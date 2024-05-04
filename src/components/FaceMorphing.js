import React from "react";
import './cs180_styles.css';

function FaceMorphing() {
    return (
    <>
        <h1>Face Morphing</h1>
        <h2 style={{ textAlign: "center" }}>Theophilus Pedapolu</h2>
        <h2>Background</h2>
        <p>
            In this project, I explore various applications of morphing. I morph my face
            into the face of Magnus Carlen, the world chess champion. Then, I use a
            dataset of Danish faces and compute the average face of the population,
            morphing the average into my face and vice versa. Finally, I use morphing to
            change the gender of my face for the bells &amp; whistles portion.
        </p>
        <h2>Part 1: Defining Correspondences</h2>
        <p>
            In order to morph my face into Magnus&#39;s, I first defined correspondence
            points between the two images using this tool:{" "}
            <a href="https://inst.eecs.berkeley.edu/~cs194-26/fa22/upload/files/proj3/cs194-26-aex/tool.html">
            Correspondence Points Tool
            </a>
            . Then, I created a triangular mesh for the two images using Delaunay
            triangulation, which ensured that the triangles were not too skinny. The
            triangulation was constructed on the average of the two correspondence
            points sets to avoid triangle deformation
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/face_morphing/theo_nobg.png">
                <img src="images/face_morphing/theo_nobg.png" alt="cameraman_dx" />
                </a>
                <div className="desc">My Face</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/magnus_nobg.png">
                <img
                    src="images/face_morphing/magnus_nobg.png"
                    alt="cameraman gradient magnitude"
                />
                </a>
                <div className="desc">Magnus Carlsen&#39;s Face</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theo_tri.PNG">
                <img src="images/face_morphing/theo_tri.PNG" alt="cameraman_dx" />
                </a>
                <div className="desc">
                Triangulation of my Face
                <br />
                Computed on average point set
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/magnus_tri.PNG">
                <img src="images/face_morphing/magnus_tri.PNG" alt="cameraman gradient magnitude" />
                </a>
                <div className="desc">
                Triangulation of Magnus&#39;s Face
                <br />
                Computed on average point set
                </div>
            </div>
            </div>
        </div>
        <h2>Part 2: Computing the "Mid-way Face"</h2>
        <p>
            To get an idea of how to construct a sequence that morphs my face into
            Magnus&#39;s, I computed the mid-way face first, which is the average
            combination of my face with Magnus&#39;s. This is the face that should appear in
            the middle of the morphing sequence. From the previous part, I had the
            average shape (i.e. the average of the two correspondence points sets). To
            construct the midway face, I first warped my face into the average shape and
            Magnus&#39;s face into the average shape. Then, I cross-dissolved the two warped
            images by averaging the pixel values between them. For the warping
            procedure, we want to warp each triangle in the source shape to its
            corresponding triangle in the target shape, so for each pair of
            corresponding triangles, we find the inverse affine transformation matrix
            that maps the target triangle to the source triangle. Then, to find the
            color of each pixel inside the target triangle, we apply this inverse affine
            transformation to find its location in the source triangle and interpolate
            among the source pixels to find the color of the target pixel. I used
            nearest neighbor interpolation because it ran the fastest and produced good
            results.
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theo_tri.PNG">
                <img src="images/face_morphing/theo_tri.PNG" alt="cameraman_dx" />
                </a>
                <div className="desc">Triangulation of my face with original shape</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theo_avg_tri.PNG">
                <img src="images/face_morphing/theo_avg_tri.PNG" alt="cameraman_dx" />
                </a>
                <div className="desc">Triangulation of my face with midway shape</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theo_warped_midway.jpg">
                <img
                    src="images/face_morphing/theo_warped_midway.jpg"
                    alt="cameraman gradient magnitude"
                />
                </a>
                <div className="desc">My face warped to midway shape</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/magnus_tri.PNG">
                <img src="images/face_morphing/magnus_tri.PNG" alt="cameraman_dx" />
                </a>
                <div className="desc">
                Triangulation of Magnus&#39;s face with original shape
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/magnus_avg_tri.PNG">
                <img src="images/face_morphing/magnus_avg_tri.PNG" alt="cameraman_dx" />
                </a>
                <div className="desc">
                Triangulation of Magnus&#39;s face with midway shape
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/magnus_warped_midway.jpg">
                <img
                    src="images/face_morphing/magnus_warped_midway.jpg"
                    alt="cameraman gradient magnitude"
                />
                </a>
                <div className="desc">Magnus&#39;s face warped to midway shape</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theo_magnus_midway.jpg">
                <img src="images/face_morphing/theo_magnus_midway.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">Mid-way Face (after cross-dissolving)</div>
            </div>
            </div>
        </div>
        <h2>Part 3: The Morph Sequence</h2>
        <p>
            Now that we have an idea of how to morph between the two faces, to produce a
            gradual sequence that morphs between my face and Magnus&#39;s, we simply need to
            vary the parameters of the morph and apply the same procedure we used in
            Part 2. Namely, the 2 parameters we're concerned with are warp_frac
            (controls how much of my face shape is warped into Magnus&#39;s face shape) and
            dissolve_frac (controls how much my face colors are changed into Magnus&#39;s
            face colors). For the midway face, both of these parameters were 0.5 because
            we wanted an equal contribution from both faces. To produce a morph
            sequence, we vary these parameters from 0 to 1 and create 50 frames of
            gradual morphing from my face to Magnus&#39;s. For each frame, I compute the
            shape to warp to as (1-warp_frac)*theo_pts + warp_frac*magnus_pts and warp
            both faces to this shape. Then, I cross-dissolve by computing a weighted
            average of the pixel values of these warped images, i.e.
            (1-dissolve_frac)*warped_theo + dissolve_frac*warped_magnus. The morph
            sequence can be seen as a GIF below
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theo_to_magnus.gif">
                <img src="images/face_morphing/theo_to_magnus.gif" alt="cameraman_dx" />
                </a>
                <div className="desc">Morphing Sequence from my face to Magnus&#39;s</div>
            </div>
            </div>
        </div>
        <h2>Part 4: The "Mean Face" of a Population</h2>
        <p>
            I also computed the mean face of a subset of the{" "}
            <a href="https://web.archive.org/web/20210305094647/http://www2.imm.dtu.dk/~aam/datasets/datasets.html">
            Danes
            </a>{" "}
            dataset by first finding the average face shape (averaging the face
            vectors), warping each image to the average shape, and finally averaging the
            pixels of these warped images. The subset I used was the frontal face,
            neutral expession subset. I used the annotated face shapes provided in the
            dataset but added additional points to each shape corresponding to the
            corners of each image. The average face can be seen below. Since most of the
            dataset contained male faces, it makes sense that the average face also
            looks male.{" "}
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/dane_faces.JPG">
                <img src="images/face_morphing/dane_faces.JPG" alt="cameraman_dx" />
                </a>
                <div className="desc">
                Subset of Danes Population (full frontal, neutral expression)
                </div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/avg_dane_face_tri.JPG">
                <img src="images/face_morphing/avg_dane_face_tri.JPG" alt="cameraman_dx" />
                </a>
                <div className="desc">Triangulation on Average Danes' Shape</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/average_dane_face.jpg">
                <img src="images/face_morphing/average_dane_face.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">Average Face of Danes Population</div>
            </div>
            </div>
        </div>
        <p>
            Here are the faces of the population morphed to the average shape with some
            specific examples
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/danes_warped.JPG">
                <img src="images/face_morphing/danes_warped.JPG" alt="cameraman_dx" />
                </a>
                <div className="desc">Danes Population Morphed to Average shape</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/dane1.jpg">
                <img src="images/face_morphing/dane1.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">Original image</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/dane1_warped.jpg">
                <img src="images/face_morphing/dane1_warped.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">Image Warped to Average Shape</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/dane2.jpg">
                <img src="images/face_morphing/dane2.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">Original Image</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/dane2_warped.jpg">
                <img src="images/face_morphing/dane2_warped.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">Image Warped to Average Shape</div>
            </div>
            </div>
        </div>
        <p>
            I took another picture of my face to match the pattern in the Danes dataset,
            full frontal and neutral expression. Then, I morphed my face into the
            average Danes shape and the average Danes face into my face shape, the
            results of which can be seen below
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theop.jpg">
                <img src="images/face_morphing/theop.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">My Face (full frontal, neutral expression)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theo_to_avg.jpg">
                <img src="images/face_morphing/theop_to_avg.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">My face warped to average Danes' geometry</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/avg_to_theop.jpg">
                <img src="images/face_morphing/avg_to_theop.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">Average Danes' Face warped into my geometry</div>
            </div>
            </div>
        </div>
        <h2>Part 5: Caricatures - Extrapolating from the Mean</h2>
        <p>
            To produce a caricature of myself, I extrapolated from the population mean
            found in the previous part. If <b>a</b> is the shape vector for the average
            face of the Danes and <b>b</b> is the shape vector for my face, then{" "}
            <b>b-a</b> represents what makes my shape different from the averge Danes
            shape. So, we can add <b>alpha(b-a)</b> (where alpha is a positive constant)
            to my face shape to get an extrapolated face shape. Warping my face to this
            shape then produces a caricature of myself
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theop_caricature.jpg">
                <img src="images/face_morphing/theop_caricature.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">
                Caricature of my face extrapolated from Danes population with alpha=1
                </div>
            </div>
            </div>
        </div>
        <h2>Bells &amp; Whistles</h2>
        <p>
            I changed the gender of my face my morphing with the face of an average
            European woman (image found{" "}
            <a href="https://learnopencv.com/average-face-opencv-c-python-tutorial/">
            here
            </a>
            ). After defining correspondence points between the two faces, I warped just
            my face shape to the woman&#39;s face shape. Then, I morphed my appearance to
            the woman&#39;s appearance by first warping the woman&#39;s face shape to mine and
            cross-dissolving the colors. Finally, I morphed both the shape and the
            appearance of my face to the woman&#39;s by morphing with warp_frac = 0.75 and
            dissolve_frac = 0.5
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theo_crop.jpg">
                <img src="images/face_morphing/theo_crop.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">My face</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/woman.jpg">
                <img src="images/face_morphing/woman.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">Average Woman&#39;s Face</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theow_tri.JPG">
                <img src="images/face_morphing/theow_tri.JPG" alt="cameraman_dx" />
                </a>
                <div className="desc">Correspondence Points of my face</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/woman_tri.JPG">
                <img src="images/face_morphing/woman_tri.JPG" alt="cameraman_dx" />
                </a>
                <div className="desc">Correspondence Points of the woman&#39;s face</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theo_to_woman_shape.jpg">
                <img src="images/face_morphing/theo_to_woman_shape.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">Morphing just face shape</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theo_to_woman_appearance.jpg">
                <img src="images/face_morphing/theo_to_woman_appearance.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">Morphing just appearance</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/face_morphing/theo_to_woman.jpg">
                <img src="images/face_morphing/theo_to_woman.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">Morphing both face shape and appearance</div>
            </div>
            </div>
        </div>
    </>

    )
}
            

export default FaceMorphing;