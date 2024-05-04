import React from "react";
import './cs180_styles.css';

function Autostitching() {
    return (
        <>
        <h1>Part A: Image Warping and Mosaicing</h1>
        <h2 style={{ textAlign: "center" }}>Theophilus Pedapolu</h2>
        <h2>Background</h2>
        <p>
          In this part of the project, I explore some interesting applications of
          image homography like rectification and mosaicing. I derived a least squares
          solution to the homography matrix and shot pictures of various objects and
          environments at my house and on the UC Berkeley Campus which I compute the
          homographies on.
        </p>
        <h2>Shooting the Pictures</h2>
        <p>
          I shot the pictures in this project using my iPhone Camera (iPhone 13 Pro
          Max) which gave me an initial size and resolution of 4032x3024. However,
          this size was too large so I later downsampled it to a size of 1200x900 to
          make computations faster. Furthermore, I used focus and exposure locking
          (AE/AF) to ensure the settings don't change across perspectives
        </p>
        <h2>Recovering Homographies</h2>
        <p>
          We want to recover a 3x3 homography matrix, H, from one set of points to
          another. Because we have 8 unknowns in H, only 4 pairs of correspondence
          points are needed to recover it. However, using 4 points makes H unstable
          and prone to noise so it's better to have more points and find the best
          solution using least squares. We can write out an overdetermined system of
          equations between the correspondence points and find a least squares setup
          to recover H.
        </p>
        <div style={{ textAlign: "center" }}>
          <a target="_blank" href="images/autostitching/proof.PNG">
            <img src="images/autostitching/proof.PNG" alt="cameraman_dx" width="50%" height="50%" />
          </a>
        </div>
        <h2>Image Rectification</h2>
        <p>
          Having found a way to recover the homography matrix, we can "rectify"
          images, i.e. warp them so the plane is frontal-parallel. Because we have
          only one image, we find an object in that image we know is rectangular and
          define two sets of points: one being the corners of the rectangular object
          in the image and the other a manually defined forward-facing rectangle in
          the image plane. Then, we compute the homography between these set of points
          and warp the image via this homography to make it frontal-parallel. This has
          the effect of changing our perspective angle on the image
        </p>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/book.jpg">
                <img src="images/autostitching/book.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">C.S. Lewis Book</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/book_down_pts.JPG">
                <img src="images/autostitching/book_down_pts.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">C.S. Lewis Book original points</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/book_front_pts.JPG">
                <img src="images/autostitching/book_front_pts.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">C.S. Lewis Book rectified points</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/book_front.jpg">
                <img src="images/autostitching/book_front.jpg" alt="cameraman gradient magnitude" />
              </a>
              <div className="desc">C.S. Lewis Book Rectified</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/painting.jpg">
                <img src="images/autostitching/painting.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Painting</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/painting_right_pts.JPG">
                <img src="images/autostitching/painting_right_pts.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Painting original points</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/painting_front_pts.JPG">
                <img src="images/autostitching/painting_front_pts.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Painting rectified points</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/painting_front.jpg">
                <img
                  src="images/autostitching/painting_front.jpg"
                  alt="cameraman gradient magnitude"
                />
              </a>
              <div className="desc">Painting Rectified</div>
            </div>
          </div>
        </div>
        <p>
          It's pretty cool that even though the pictures are taken at an angle, we can
          recover a full-frontal view of the image. Below are the cropped versions of
          the rectified book and painting images. Notice that we have a much clearer
          front-facing view of the book and painting than in the original images
        </p>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/book_front_cropped.jpg">
                <img src="images/autostitching/book_front_cropped.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">C.S. Lewis Book Cropped</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/painting_front_cropped.jpg">
                <img src="images/autostitching/painting_front_cropped.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Painting Cropped</div>
            </div>
          </div>
        </div>
        <h2>Blending Images into a Mosaic</h2>
        <p>
          Using homography, we can also blend multiple images into a mosaic that
          covers a wider field of perception. Given a set of images and correspondence
          points from left to right, my procedure for creating a mosaic was first
          warping each image except the leftmost one into the leftmost one via a
          homography. Then, we have a set of warped images of the same size (with the
          actual image in different locations on the plane) that need to be stitched
          together. I tried many different blending techniques like laplacian pyramids
          and gaussian alpha channels but the technique that seemed to work best was
          using a linear gradient mask in the overlapping region. To stitch two images
          together, this involved first calculating the overlapping region then
          creating a linear gradient mask that goes from 1 to 0 in this region
          column-wise. Then I create a left mask and a right mask, where the left mask
          contains the area of the left image but replaced with the linear gradient
          mask in the overlapping region and the right mask contains the area of the
          right image but replaced with the inverse of the linear gradient mask (goes
          from 0 to 1 instead) in the overlapping region. Then, I calculated the
          stitched image as left_mask*left_image + right_mask*right_image. This has
          the effect of keeping the left and right images in regions where they are
          exclusive but creaing a smooth transition from the left to the right in the
          region they overlap. I found that this technique also elimiates edge
          artifacts which were common in the other techniques I explored.{" "}
        </p>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/DL_left_pts.JPG">
                <img src="images/autostitching/DL_left_pts.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Room Left Angle Points</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/DL_right_pts.JPG">
                <img src="images/autostitching/DL_right_pts.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Room Right Angle Points</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_left_pts.JPG">
                <img src="images/autostitching/campanile_left_pts.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Camapnile Left Angle Points</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_middle_pts.JPG">
                <img src="images/autostitching/campanile_middle_pts.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Camapnile Right Angle Points</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/sproul_left_pts.JPG">
                <img src="images/autostitching/sproul_left_pts.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Sproul Left Angle Points</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/sproul_right_pts.JPG">
                <img src="images/autostitching/sproul_right_pts.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Sproul Right Angle Points</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/DL_left.jpg">
                <img src="images/autostitching/DL_left.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Room left angle</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/DL_right.jpg">
                <img src="images/autostitching/DL_right.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Room right angle</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/DL_mosaic.jpg">
                <img src="images/autostitching/DL_mosaic.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Room mosaic</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_left.jpg">
                <img src="images/autostitching/campanile_left.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Campanile left angle</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_middle.jpg">
                <img src="images/autostitching/campanile_middle.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Campanile right angle</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_mosaic.jpg">
                <img src="images/autostitching/campanile_mosaic.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Campanile mosaic</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/sproul_left.jpg">
                <img src="images/autostitching/sproul_left.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Sproul left angle</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/sproul_right.jpg">
                <img src="images/autostitching/sproul_right.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Sproul right angle</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/sproul_mosaic.jpg">
                <img src="images/autostitching/sproul_mosaic.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Sproul mosaic</div>
            </div>
          </div>
        </div>
        <hr />
        <h1>Part B: Feature Matching for Autostitching</h1>
        <h2>Background</h2>
        <p>
          In part B of this project, I create a system for automatically stitching
          images into mosaics, without requiring human input for point
          correspondences. We largely follow the algorithm outlined in this paper{" "}
          <a href="https://inst.eecs.berkeley.edu/~cs180/fa23/hw/proj4/Papers/MOPS.pdf">
            Multi-Image Matching using Multi-Scale Oriented Patches by Brown et al.
          </a>{" "}
          which involves detecting the harris corners, using adaptive non-maximal
          suppression to restrict and ensure the points are spatially
          well-distributed, extracting and matching feature descriptors for each
          point, and finally using RANSAC to compute a robust homography estimate
          between the images. At the end, I show some examples of images that were
          automatically stitched using this method
        </p>
        <h2>Detecting Harris Corners</h2>
        <p>
          First, we need to find salient features in each image so we have something
          good to match. We use the Harris detector to find corners in each image. The
          detector identifies corners by testing the change in intensity across the
          different directions from a point. If the point is a corner, it changes
          significantly in intensity across multiple directions. If it changes
          significantly in only one direction, the point is on an edge.
        </p>
        <div style={{ textAlign: "center" }}>
          <a target="_blank" href="images/autostitching/harris.JPG">
            <img src="images/autostitching/harris.JPG" alt="cameraman_dx" />
          </a>
        </div>
        <p>
          Mathematically, we find the SSD between an image patch around the original
          point and a patch around the shifted point. We can approximate this SSD
          using matrix Taylor expansion to get the equation below. Finally, to
          calculate the response for a point, we use the response equation below. When
          R is large and postive, both eigenvalues are large, meaning the SSD has
          large shifts in all directions and the point is a corner. We implement
          Harris Corner Detection using the provided <code>harris.py</code> code.{" "}
        </p>
        <div style={{ textAlign: "center" }}>
          <a target="_blank" href="images/autostitching/harris_eq.JPG">
            <img src="images/autostitching/harris_eq.JPG" alt="cameraman_dx" />
          </a>
        </div>
        <div style={{ textAlign: "center" }}>
          <a target="_blank" href="images/autostitching/harris_eq2.JPG">
            <img src="images/autostitching/harris_eq2.JPG" alt="cameraman_dx" />
          </a>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_left_harris.JPG">
                <img src="images/autostitching/campanile_left_harris.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Left Angle Harris Points</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_middle_harris.JPG">
                <img src="images/autostitching/campanile_middle_harris.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Right Angle Harris Points</div>
            </div>
          </div>
        </div>
        <h2>Adaptive Non-Maximal Suppression</h2>
        <p>
          Because the computational cost of matching is high, it is beneficial to
          restrict the number of interest points used. However, we also want to ensure
          that the points are spatially well-distributed since the area of overlap
          between two images may be small. Therefore, we use the adaptive non-maximal
          suppression algorithm outlined in the paper to select a smaller number of
          interest points for the image. The algorithm works by calculating a radius,
          r_i for each interest point by finding the distance to the closest point in
          a 3x3 window whose harris response is sufficiently higher than the interest
          point's response. Then, we take the <i>n</i> interest points with the
          highest radii. This ensures we only reject points with small radii, which
          are already "covered" by other interest points. For this project, I used{" "}
          <i>n = 100</i> points
        </p>
        <div style={{ textAlign: "center" }}>
          <a target="_blank" href="images/autostitching/anms_eq.JPG">
            <img src="images/autostitching/anms_eq.JPG" alt="cameraman_dx" />
          </a>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_left_anms.JPG">
                <img src="images/autostitching/campanile_left_anms.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Left Angle ANMS Points</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_middle_anms.JPG">
                <img src="images/autostitching/campanile_middle_anms.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Right Angle ANMS Points</div>
            </div>
          </div>
        </div>
        <h2>Extracting Feature Descriptors</h2>
        <p>
          Now that we have interest points for each image, we can compute feature
          descriptors for each point to be used in matching later. Again following the
          paper, we compute a feature descriptor for an interest point by taking a
          40x40 image patch around the point and rescaling it to a size of 8x8. We
          then normalize the entire patch so it has a mean of 0 and standard deviation
          of 1. This makes the descriptors have consistent computations when we later
          match them. In the feature descriptor images below, each feature descriptor
          was re-normalied to be between 0 and 1 for viewing purposes
        </p>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_left_anms.JPG">
                <img src="images/autostitching/campanile_left_anms.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Left Angle ANMS Points</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_left_fd.JPG">
                <img src="images/autostitching/campanile_left_fd.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Left Angle Feature Descriptors</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_middle_anms.JPG">
                <img src="images/autostitching/campanile_middle_anms.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Middle Angle ANMS Points</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_middle_fd.JPG">
                <img src="images/autostitching/campanile_middle_fd.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Middle Angle Feature Descriptors</div>
            </div>
          </div>
        </div>
        <h2>Matching Feature Descriptors and Outlier Rejection</h2>
        <p>
          Next, we match the feature descriptors across two images to come up with a
          robust selection of point pairs. For matching, we use the nearest neighbors
          method (NN) with Lowe thresholding. For each point <i>p</i> in the first
          image with feature descriptor{" "}
          <i>
            f<sub>p</sub>
          </i>
          , we calculate the SSD with every feature descriptor in the other image,
          recording the smallest (<i>p_1_nn</i>) and second-smallest (
          <i>p_2_nn) matches</i>. Then, we reject <i>p</i> if{" "}
          <i>p_1_nn/p_2_nn &gt; ε</i> for some threshold <i>ε</i> because this would
          mean <i>p</i> does not have many strong matches in the other image so it
          probably doesn't lie in the overlapping area. If <i>p</i> is not rejected,
          we match it with its nearest neighbor in the other image and remove that
          neighbor from the other image's set of interest points so that we do not
          have a double match to the same point. We perform this process for every
          interest point in the first image. At the end, we are left with a set of
          point correspondences between the two images
        </p>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_left_matched.JPG">
                <img src="images/autostitching/campanile_left_matched.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Left Angle Matched Points</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_middle_matched.JPG">
                <img src="images/autostitching/campanile_middle_matched.JPG" alt="cameraman_dx" />
              </a>
              <div className="desc">Right Angle Matched Points</div>
            </div>
          </div>
        </div>
        <h2>Homography via RANSAC</h2>
        <p>
          The last part of the process is to compute a robust homography estimate
          between the two images using the point correspondences we derived. To do
          this, we use the RANSAC algorithm. We randomly select 4 point pairs between
          the images and compute an exact homography estimate on these pairs (since
          the homography matrix has exactly 8 unknowns). Then we count the number of
          inliers, i.e. the number of point pairs that are described well by this
          homography matrix. We loop through these steps for some number of iterations
          (I used <i>1000</i> iterations), recording the largest set of inlier pairs
          found over all iterations. Finally, we compute a final homography estimate
          via least squares on this largest inliers set. RANSAC works because with
          enough iterations, there is a good chance that a well-defining set of 4
          pairs is chosen at some point in the loop, especially with a lot of
          correspondences in the overlapping region. These 4 pairs would define a good
          homography estimate which is later refined by least squares.{" "}
        </p>
        <div style={{ textAlign: "center" }}>
          <a target="_blank" href="images/autostitching/ransac.JPG">
            <img
              src="images/autostitching/ransac.JPG"
              alt="cameraman_dx"
              width="50%"
              height="50%"
            />
          </a>
        </div>
        <h2>Autostitching Mosaics</h2>
        <p>
          After automatically computing a homography between two images, we can warp
          them and stitch them together to form a mosaic. We perform this
          autostitching on the 3 sets of images we used for mosaics in the previous
          part. We also apply the same gaussian mask blending we used in the previous
          part to ensure a smooth transition between images and no edge artifacts{" "}
        </p>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/DL_mosaic.jpg">
                <img src="images/autostitching/DL_mosaic.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Room Mosaic Manual Stitching</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/DL_auto_mosaic.jpg">
                <img src="images/autostitching/DL_auto_mosaic.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Room Mosaic Autostitching</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_mosaic.jpg">
                <img src="images/autostitching/campanile_mosaic.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Campanile Mosaic Manual Stitching</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/campanile_auto_mosaic.jpg">
                <img src="images/autostitching/campanile_auto_mosaic.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Campanile Mosaic Autostitching</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/sproul_mosaic.jpg">
                <img src="images/autostitching/sproul_mosaic.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Sproul Mosaic Manual Stitching</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/autostitching/sproul_auto_mosaic.jpg">
                <img src="images/autostitching/sproul_auto_mosaic.jpg" alt="cameraman_dx" />
              </a>
              <div className="desc">Sproul Mosaic Autostitching</div>
            </div>
          </div>
        </div>
        <h2>Conclusion</h2>
        <p>
          Overall, this was an interesting project and I enjoyed working through it,
          though the image stitching portion of image mosaicing was quite cumbersome
          . A cool thing I learned is that homographies cannot "create" information.
          A lot of times, I expected the homography to make it look like I actually
          changed perspective but this would require additional information that isn't
          in the image. The homography simply lets us warp the image to make it look
          as close to shifting perspective as possible without adding information.{" "}
        </p>
      </>
      
    )
}

export default Autostitching;