import React from "react";
import "./cs180_styles.css";

// function createGallery({}) {

// }

function ProkudinGorskii() {
    return (
        <>
        <h1>
          Images of the Russian Empire: Colorizing the Prokudin-Gorskii photo
          collection
        </h1>
        <h2 style={{ textAlign: "center" }}>Theophilus Pedapolu</h2>
        <h2>Background</h2>
        <p>
          Sergei Mikhailovich Prokudin-Gorskii was a Russian photographer who
          travelled the Russian Empire from 1909 to 1915, documenting many aspects of
          the country using his three-image photography method. He recorded three
          images of each scene, using a red, green, and blue filter in the hopes that
          Russian schoolchildren could learn about their country one day by viewing
          these photographs in color. Some of these RGB glass plate negatives were
          eventually purchased by the Library of Congress and are now available
          publicly. The process of colorizing the photographs, however, is harder than
          just superimposing the 3 filtered images since each image is slightly
          displaced due to the method by which the photos were taken. In this project,
          I automate the process of aligning the 3 images to produce a single
          colorized photograph. I also employ techniques from image processing to make
          the color photographs look cleaner and "better"
        </p>
        <h2>Single-Scale: Alignment Algorithm</h2>
        <p>
          The core of my algorithm is pretty simple. I considered the blue-filter
          image to be fixed and aligned the red-filter and green-filter images to it
          via the following process. For each aligning image, I exhaustively search
          over a window of possible displacements ([-20,20] pixels to be specific) on
          both the x and y axes and use the normalized cross-correlation metric (NCC)
          to score each displacement. The displacement with the best score is what I
          eventually shift the image by to properly align it. One of the problems I
          ran into early on, however, was that this naive method produced alignments
          that were slighly off; you could see the blue, red, and green filters vary
          visibly in the final colorized photo. To fix this problem, for each
          displacement I cropped 20% off the border of both the aligning image and the
          fixed image so that the NCC metric would only be computed on the innermost
          parts of the images. This worked much better since we decreased the excess
          noise in the NCC metric caused by mismatched borders. The results of this
          single-scale alignment algorithm can be seen below:{" "}
        </p>
        <p>
          <b>Note:</b>{" "}
          <i>
            In captions for images, R[x,y] means the red-filter image was displaced by
            x pixels horizontally and y pixels vertically to align it to the blue
            filter. Similarly, G[x,y] means the same for the green-filter image
          </i>
        </p>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_cathedral_before.jpg">
                <img src="images/prokudin_gorskii/out_cathedral_before.jpg" alt="Cathedral Before" />
              </a>
              <div className="desc">Cathedral (before aligning)</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_cathedral_no_crop.jpg">
                <img src="images/prokudin_gorskii/out_cathedral_no_crop.jpg" alt="Cathedral After" />
              </a>
              <div className="desc">
                Cathedral (after aligning)
                <br />
                R[3,12] G[2,5]
              </div>
            </div>
          </div>
        </div>
        <h2>Faster Search: Image Pyramid</h2>
        <p>
          For larger .tif images, the single-scale procedure is far too slow since the
          window of possible displacements we need to search in is much larger. As a
          result, I used an image pyramid which stores smaller, scaled versions of the
          original image to make the search faster. For large images, I recursively
          rescale the both the aligning image and the fixed image by a factor of 2
          (i.e. half each dimension) 4 times until the bottom level is reached. At
          that point, I run the single-scale alignment algorithm from before on the
          smaller images using the standard window of [-20, 20] pixels to estimate the
          best displacement. Then, for each return from a lower level, I find a
          slightly better displacement estimate by running the single-scale alignment
          algorithm, this time with a window of [-3,3] pixels from the displacement
          estimate found at the lower level (multiplied by 2 to account for
          rescaling). Essentially, this multi-scale image pyramid approach finds a
          good estimate for the displacement at the lowest scale and slightly refines
          it at each higher scale to get a better final estimate. Initially, I didn't
          refine the estimate at each level and just used the estimate found at the
          bottom level (multiplied by 2 at each recursive return). However, I found
          that that this method caused the aligned images to be slightly off, so I
          implemented refining at each level which fixed the issue. I also tried
          different schemes such as increasing the window size for refinement and
          varying the window size based on the scaling at each level, but I found that
          these methods increased the computation time sizably or produced results
          that weren't much better than the small window size of [-3,3] pixels. The
          results of implementing the multi-scale image pyramid procedure on large
          images can be seen below. Decent results were output for every image except
          "emir.tif" probably due to significant differences in brightness between its
          color channels. In the extra credit section, I explore a way to use edge
          detectors to fix this problem with "emir.tif" and even produce better
          alignments on other images
        </p>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_church_before.jpg">
                <img src="images/prokudin_gorskii/out_church_before.jpg" alt="Church Before" />
              </a>
              <div className="desc">Church (before aligning)</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_church_no_crop.jpg">
                <img src="images/prokudin_gorskii/out_church_no_crop.jpg" alt="Church After" />
              </a>
              <div className="desc">
                Church (after aligning)
                <br />
                R[-4,58] G[4,25]
              </div>
            </div>
          </div>
        </div>
        <h2>Bells and Whistles: Extra Credit</h2>
        <h3>Edge Detection</h3>
        <p>
          To fix the issue with "emir.tif" and produce better alignment overall, I
          modified the single-scale alignment algorithm to run edge detection on the
          image first and then search over the displacement window. This has the
          effect of computing more accurate NCC metrics since edge detection
          eliminates the varying degrees in brightness between channels. I used a
          sobel filter to perform edge detection. Overall, aligning after edge
          detection gave noticably better results, especially on "emir.tif"
        </p>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/prokudin_gorskii/out_emir_no_edge.jpg">
                <img src="images/prokudin_gorskii/out_emir_no_edge.jpg" alt="Emir Before" />
              </a>
              <div className="desc">Emir (with naive aligning)</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_emir_no_crop.jpg">
                <img src="images/prokudin_gorskii/out_emir_no_crop.jpg" alt="Emir After" />
              </a>
              <div className="desc">
                Emir (after edge detection aligning)
                <br />
                R[40,107] G[24,49]
              </div>
            </div>
          </div>
        </div>
        <h3>Automatic Cropping</h3>
        <p>
          To improve the quality of the images after aligning, I also implemented
          automatic cropping of the black, white, and colored borders of the image. I
          performed two phases of cropping. First, before aligning the images, I
          cropped the black and white borders on each channel. To do this, I first ran
          edge detection on the image and, starting from the center, found bounds for
          the border of the image in each direction. I iterated through each row and
          column until I found one that has a percentage of "white" pixels above a
          certain threshold. A pixel was considered to be "white" if it had a value
          above a certain threshold close to 255. This algorithm essentially looked
          for straight white lines in the edge detected image, starting from the
          center. I ran this cropping procedure to find bounds for every channel of
          the image and applied the maximum cropping across the 3 channels at the end.
          The second phase of cropping came after the image was aligned. Shifting the
          channels after aligning caused colored borders due to the np.roll function
          so I cropped the image based on how much it was shifted. This only left the
          part of the image that all 3 channels agreed upon. Overall, automatic
          cropping worked well and produced significantly more aesthetic final images{" "}
        </p>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_tobolsk_no_crop.jpg">
                <img src="images/prokudin_gorskii/out_tobolsk_no_crop.jpg" alt="Tobolsk Before" />
              </a>
              <div className="desc">Tobolsk (before automatic cropping)</div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_tobolsk_no_contrast.jpg">
                <img src="images/prokudin_gorskii/out_tobolsk_no_contrast.jpg" alt="Tobolsk After" />
              </a>
              <div className="desc">
                Tobolsk (after automatic cropping)
                <br />
                R[3,7] G[3,3]
              </div>
            </div>
          </div>
        </div>
        <h3>Automatic Contrasting</h3>
        <p>
          To improve the quality of the images after aligning, I implemented automatic
          contrasting. This adjusts the intensity of the pixels across the across the
          image to achieve an even contrast throughout. Specifically, I found the
          intensity <i>minval</i> at the 2nd percentile and the intensity{" "}
          <i>maxval</i> at the 98th percentile and set all values below the 2nd
          percentile to <i>minval</i> and all values above the 98th percentile to{" "}
          <i>maxval</i>. Then, I "stretched" all values in between via the following
          formula: <i>pixel(i,j) = (pixel(i,j) - minval)/(maxval - minval)</i>.
          Automatic contrasting produced better looking and sharper images in general
          as seen below.{" "}
        </p>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_three_generations_no_contrast.jpg">
                <img
                  src="images/prokudin_gorskii/out_three_generations_no_contrast.jpg"
                  alt="Three_Generations Before"
                />
              </a>
              <div className="desc">
                Three Generations (before automatic contrasting)
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_three_generations.jpg">
                <img
                  src="images/prokudin_gorskii/out_three_generations.jpg"
                  alt="Three_Generations After"
                />
              </a>
              <div className="desc">
                Three Generations (after automatic contrasting)
                <br />
                R[9,111] G[13,53]
              </div>
            </div>
          </div>
        </div>
        <h2>Final Image Gallery</h2>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_cathedral.jpg">
                <img src="images/prokudin_gorskii/out_cathedral.jpg" alt="Cathedral" />
              </a>
              <div className="desc">
                Cathedral
                <br />
                R[3,12] G[2,5]
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_church.jpg">
                <img src="images/prokudin_gorskii/out_church.jpg" alt="Church" />
              </a>
              <div className="desc">
                Church
                <br />
                R[-4,58] G[4,25]
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_emir.jpg">
                <img src="images/prokudin_gorskii/out_emir.jpg" alt="Emir" />
              </a>
              <div className="desc">
                Emir
                <br />
                R[40,107] G[24,49]
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_harvesters.jpg">
                <img src="images/prokudin_gorskii/out_harvesters.jpg" alt="Harvesters" />
              </a>
              <div className="desc">
                Harvesters
                <br />
                R[14,123] G[18,60]
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_icon.jpg">
                <img src="images/prokudin_gorskii/out_icon.jpg" alt="Icon" />
              </a>
              <div className="desc">
                Icon
                <br />
                R[23,90] G[17,41]
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_lady.jpg">
                <img src="images/prokudin_gorskii/out_lady.jpg" alt="Lady" />
              </a>
              <div className="desc">
                Lady
                <br />
                R[13,115] G[9,56]
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_melons.jpg">
                <img src="images/prokudin_gorskii/out_melons.jpg" alt="Melons" />
              </a>
              <div className="desc">
                Melons
                <br />
                R[14,177] G[10,80]
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_monastery.jpg">
                <img src="images/prokudin_gorskii/out_monastery.jpg" alt="Monastery" />
              </a>
              <div className="desc">
                Monastery
                <br />
                R[2,3] G[2,-3]
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_onion_church.jpg">
                <img src="images/prokudin_gorskii/out_onion_church.jpg" alt="Onion Church" />
              </a>
              <div className="desc">
                Onion Church
                <br />
                R[36,108] G[26,51]
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_sculpture.jpg">
                <img src="images/prokudin_gorskii/out_sculpture.jpg" alt="Sculpture" />
              </a>
              <div className="desc">
                Sculpture
                <br />
                R[-27,140] G[-11,33]
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_self_portrait.jpg">
                <img src="images/prokudin_gorskii/out_self_portrait.jpg" alt="Self-Portrait" />
              </a>
              <div className="desc">
                Self-Portrait
                <br />
                R[37,176] G[29,78]
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_three_generations.jpg">
                <img src="images/prokudin_gorskii/out_three_generations.jpg" alt="Three Generations" />
              </a>
              <div className="desc">
                Three Generations
                <br />
                R[9,111] G[13,53]
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_tobolsk.jpg">
                <img src="images/prokudin_gorskii/out_tobolsk.jpg" alt="Tobolsk" />
              </a>
              <div className="desc">
                Tobolsk
                <br />
                R[3,7] G[3,3]
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_train.jpg">
                <img src="images/prokudin_gorskii/out_train.jpg" alt="Train" />
              </a>
              <div className="desc">
                Train
                <br />
                R[-27,140] G[-11,33]
              </div>
            </div>
          </div>
        </div>
        <h3>Examples of my own choosing from the collection</h3>
        <div className="container">
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_on_the_island_of_capri.jpg">
                <img
                  src="images/prokudin_gorskii/out_on_the_island_of_capri.jpg"
                  alt="On the Island of Capri"
                />
              </a>
              <div className="desc">
                On the Island of Capri
                <br />
                R[-11, 102] G[-14, 45]
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_in_italy.jpg">
                <img src="images/prokudin_gorskii/out_in_italy.jpg" alt="In Italy" />
              </a>
              <div className="desc">
                In Italy
                <br />
                R[4,8] G[2,4]
              </div>
            </div>
          </div>
          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="images/prokudin_gorskii/out_man_with_camel.jpg">
                <img src="images/prokudin_gorskii/out_man_with_camel.jpg" alt="Man with Camel" />
              </a>
              <div className="desc">
                Man with Camel
                <br />
                R[33,78] G[14,18]
              </div>
            </div>
          </div>
        </div>
        <h2>References</h2>
        <p>I referenced the following resources while completing this project:</p>
        <p>
          <b>
            This stack overflow post detailing how to adjust the contrast of an image
            using numpy. I used this post to write the automatic contrast function:
          </b>
        </p>
        <p>
          https://stackoverflow.com/questions/48406578/adjusting-contrast-of-image-purely-with-numpy
        </p>
        <p>
          <b>Wikipedia page on the Prokudin-Gorskii photo collection: </b>
        </p>
        <p>https://en.wikipedia.org/wiki/Prokudin-Gorskii</p>
        <p>
          <b>Udacity course CS6475: Computational Photography: </b>
        </p>
        <p>https://www.udacity.com/course/computational-photography--ud955</p>
      </>      
    );
}

export default ProkudinGorskii;
