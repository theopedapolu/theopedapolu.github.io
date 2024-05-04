import React from "react";
import './cs180_styles.css';

function ImageBlending() {
    return (
    <>
        <h1>Fun with Filters and Frequencies</h1>
        <h2 style={{ textAlign: "center" }}>Theophilus Pedapolu</h2>
        <h2>Background</h2>
        <p>
            In this project, we explore various use cases of filters/convolution and the
            frequency domain of images. Part 1 (and Part 2.1) explores various edge
            detection schemes using filters and Part 2 mainly uses the frequency domain
            of images to perform some interesting tasks
        </p>
        <h2>Part 1: Filters</h2>
        <h3>1.1 Finite Difference Operator</h3>
        <p>
            First, we use the simple finite difference operators to perform edge
            detection on the cameraman image. In particular, we convolve the filters D_x
            = [-1 1] and D_y = [1 -1]<sup>T</sup> with the cameraman image to get the
            partial derivatives of the x and y directions, as shown below. To combine
            this into one edge-detected image, we perform a gradient magnitude
            computation as follows: res(i,j) = sqrt(cameraman_dx(i,j)<sup>2</sup> +
            cameraman_dy(i,j)<sup>2</sup>) where res is the output image, cameraman_dx
            is the convolution of the cameraman image with D_x, and cameraman_dy is the
            convolution with D_y. This uses the partial derivatives of the x and y
            directions to find the gradient magnitude for the image. As seen below, this
            creates a better edge detection overall that accounts for edges in all
            direction. Finally, to make the edge detection more clear, we binarize the
            gradient magnitude image by setting all pixels above 50 to 255 and pixels at
            or below 50 to 0. We tested out different thresholds and found 50 worked
            well.
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/image_blending/cameraman.png">
                <img src="images/image_blending/cameraman.png" alt="cameraman" />
                </a>
                <div className="desc">Cameraman Original Image</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cameraman_dx.jpg">
                <img src="images/image_blending/cameraman_dx.jpg" alt="cameraman_dx" />
                </a>
                <div className="desc">
                Cameraman_dx
                <br />
                Convolved with D_x filter
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cameraman_dy.jpg">
                <img src="images/image_blending/cameraman_dy.jpg" alt="cameraman_dy" />
                </a>
                <div className="desc">
                Cameraman_dy
                <br />
                Convolved with D_y filter
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cameraman_mag.jpg">
                <img
                    src="images/image_blending/cameraman_mag.jpg"
                    alt="cameraman gradient magnitude"
                />
                </a>
                <div className="desc">Cameraman Gradient Magnitude</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cameraman_bin.jpg">
                <img src="images/image_blending/cameraman_bin.jpg" alt="cameraman binarized" />
                </a>
                <div className="desc">Cameraman Binarized</div>
            </div>
            </div>
        </div>
        <h3>1.2 Derivative of Gaussian (DoG) Filter</h3>
        <p>
            With the finite difference operator, the results were a little noisy and had
            jagged edges, as seen in the binarized image. To get smoother edge
            detection, we blur the original image by convolving it with a 2D gaussian
            kernel, then performing the same edge detection scheme with the finite
            difference operators
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/blurred_cameraman.jpg">
                <img src="images/image_blending/blurred_cameraman.jpg" alt="cameraman blurred" />
                </a>
                <div className="desc">Blurred Cameraman Image</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cameraman_blurred_dx.jpg">
                <img
                    src="images/image_blending/cameraman_blurred_dx.jpg"
                    alt="cameraman blurred dx"
                />
                </a>
                <div className="desc">
                Blurred Cameraman_dx
                <br />
                Blurred image convolved with D_x filter
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cameraman_blurred_dy.jpg">
                <img
                    src="images/image_blending/cameraman_blurred_dy.jpg"
                    alt="cameraman blurred dy"
                />
                </a>
                <div className="desc">
                Blurred Cameraman_dy
                <br />
                Blurred image convolved with D_y filter
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cameraman_blurred_mag.jpg">
                <img
                    src="images/image_blending/cameraman_blurred_mag.jpg"
                    alt="cameraman blurred gradient magnitude"
                />
                </a>
                <div className="desc">Blurred Cameraman Gradient Magnitude</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cameraman_blurred_bin.jpg">
                <img
                    src="images/image_blending/cameraman_blurred_bin.jpg"
                    alt="Blurred cameraman binarized"
                />
                </a>
                <div className="desc">Blurred Cameraman Binarized</div>
            </div>
            </div>
        </div>
        <p>
            As seen in the images above, there are clear differences between naively
            applying the finite difference filters (like in part 1.1) and blurring with
            a gaussian filter first then applying the finite difference filters. The
            edge-detected images from this part are much smoother than in the previous
            part, especially in the binarized images. The camerman no longer has jagged
            edges and instead has smooth, continous edges. Furthermore, using the
            properties of convolution, we can combine the blurring and derivative
            filters into a single filter called the Derivative of Gaussian filter (DoG)
            which we only need to convolve once with the cameraman image to perform
            smooth edge-detection. The results of applying the DoG filter are shown
            below; notice they are exactly the same as the images above.
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/DOG_dx.jpg">
                <img src="images/image_blending/DOG_dx.jpg" alt="DoG dx" />
                </a>
                <div className="desc">
                DoG_dy filter
                <br />
                Gaussian convolved with Dx filter
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/DOG_dy.jpg">
                <img src="images/image_blending/DOG_dy.jpg" alt="DoG dy" />
                </a>
                <div className="desc">
                DoG_dy filter
                <br />
                Gaussian convolved with Dy filter
                </div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cameraman_DOG_dx.jpg">
                <img src="images/image_blending/cameraman_DOG_dx.jpg" alt="cameraman DoG dx" />
                </a>
                <div className="desc">
                DoG Cameraman_dx
                <br />
                Convolved with DoG_dx filter
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cameraman_DOG_dy.jpg">
                <img src="images/image_blending/cameraman_DOG_dy.jpg" alt="cameraman DoG dy" />
                </a>
                <div className="desc">
                DoG Cameraman_dy
                <br />
                Convolved with DoG_dy filter
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cameraman_DOG_mag.jpg">
                <img
                    src="images/image_blending/cameraman_DOG_mag.jpg"
                    alt="cameraman DoG gradient magnitude"
                />
                </a>
                <div className="desc">DoG Cameraman Gradient Magnitude</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cameraman_DOG_bin.jpg">
                <img
                    src="images/image_blending/cameraman_DOG_bin.jpg"
                    alt="DoG cameraman binarized"
                />
                </a>
                <div className="desc">DoG Cameraman Binarized</div>
            </div>
            </div>
        </div>
        <h2>Part 2: Frequencies</h2>
        <h3>2.1 Image Sharpening</h3>
        <p>
            Now we try to use filters to sharpen an image, which means making the edges
            more "defined". To do this, we get the high frequencies of an image by
            applying a gaussian filter to blur the image (i.e get the low frequencies)
            then subtracting the blurred image from the original image. This leaves only
            the high frequencies (mostly edges) which we then add back to the original
            image to obtain a sharpened image. We also use a parameter alpha which
            controls how much the image is sharpened. Mathmatically,
            sharpened_image(i,j) = alpha*original_image(i,j) +
            (alpha-1)*blurred_image(i,j). Furthermore, we can combine the gaussian
            filter and subtraction into a single filter called the unsharp mask filter
            by computing alpha*e - (alpha-1)*gaussian_filter, where e is the unit
            impulse (a kernel with 1 in the middle and zeros elsewhere). The progression
            of sharpening some images is shown below.
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/taj.jpg">
                <img src="images/image_blending/taj.jpg" alt="taj" />
                </a>
                <div className="desc">Taj Mahal Original Image</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/blurred_taj.jpg">
                <img src="images/image_blending/blurred_taj.jpg" alt="Taj blurred" />
                </a>
                <div className="desc">Blurred Taj Mahal (low frequencies)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/hi_freq_taj.jpg">
                <img src="images/image_blending/hi_freq_taj.jpg" alt="Taj high frequencies" />
                </a>
                <div className="desc">High frequencies Taj Mahal</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/sharpened_taj.jpg">
                <img src="images/image_blending/sharpened_taj.jpg" alt="Sharpened Taj" />
                </a>
                <div className="desc">Sharpened Taj Mahal (alpha = 3)</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/angel.jpg">
                <img src="images/image_blending/angel.jpg" alt="angel" />
                </a>
                <div className="desc">Angel (my dog) Original Image</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/blurred_angel.jpg">
                <img src="images/image_blending/blurred_angel.jpg" alt="Angel blurred" />
                </a>
                <div className="desc">Blurred Angel (low frequencies)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/hi_freq_angel.jpg">
                <img src="images/image_blending/hi_freq_angel.jpg" alt="Angel high frequencies" />
                </a>
                <div className="desc">High frequencies Angel</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/sharpened_angel.jpg">
                <img src="images/image_blending/sharpened_angel.jpg" alt="Sharpened Angel" />
                </a>
                <div className="desc">Sharpened Angel (alpha = 3)</div>
            </div>
            </div>
        </div>
        <p>
            For evalution purposes, we also blurred an image and tried to sharpen it
            again. The results are shown below:{" "}
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lion.jpg">
                <img src="images/image_blending/lion.jpg" alt="lion" />
                </a>
                <div className="desc">Lion Original Image</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/blurred_lion.jpg">
                <img src="images/image_blending/blurred_lion.jpg" alt="blurred lion" />
                </a>
                <div className="desc">Blurred Lion</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/double_blurred_lion.jpg">
                <img src="images/image_blending/double_blurred_lion.jpg" alt="Lion double blurred" />
                </a>
                <div className="desc">Lion Double Blurred (low frequencies)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/hi_freq_lion.jpg">
                <img src="images/image_blending/hi_freq_lion.jpg" alt="Lion high frequencies" />
                </a>
                <div className="desc">High frequencies Blurred Lion</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/sharpened_lion.jpg">
                <img src="images/image_blending/sharpened_lion.jpg" alt="Sharpened Lion" />
                </a>
                <div className="desc">Sharpened Lion (alpha = 3)</div>
            </div>
            </div>
        </div>
        <p>
            Notice that the sharpened version of the blurred image is a little better
            but still far from the original image. This is because the image is
            sharpened along the edges but the rest of the blurry areas remain blurry so
            we cannot get back the original image
        </p>
        <h3>2.2 Hybrid Images</h3>
        <p>
            To create hybrid images, we combined the low frequencies from one image with
            the high frequencies from another. In particular, to compute the low
            frequecies for image A, we convolved image A with a gaussian kernel to blur
            it. To compute the high frequecies for image B, we computed the low
            frequecies using a gaussian kernel and subtracted it from the original
            image. Then we averaged the low frequency image A with the high frequency
            image B to get the hybrid image. We had to experiment with the kernel sizes
            and the sigmas (cutoff frequencies) for each gaussian filter to get the most
            aesthetically pleasing result
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/DerekPicture.jpg">
                <img src="images/image_blending/DerekPicture.jpg" alt="blurred lion" />
                </a>
                <div className="desc">Derek Picture</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/nutmeg.jpg">
                <img src="images/image_blending/nutmeg.jpg" alt="Lion double blurred" />
                </a>
                <div className="desc">Nutmeg</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/dutmeg.jpg">
                <img src="images/image_blending/dutmeg.jpg" alt="Lion high frequencies" />
                </a>
                <div className="desc">Dutmeg (Derek + Nutmeg)</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/zebra.jpg">
                <img src="images/image_blending/zebra.jpg" alt="blurred lion" />
                </a>
                <div className="desc">Zebra</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/cow.jpg">
                <img src="images/image_blending/cow.jpg" alt="Lion double blurred" />
                </a>
                <div className="desc">Cow</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/hybrid_cowra.jpg">
                <img src="images/image_blending/hybrid_cowra.jpg" alt="Lion high frequencies" />
                </a>
                <div className="desc">Cowra (Zebra + Cow)</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lawrence.jpg">
                <img src="images/image_blending/lawrence.jpg" alt="blurred lion" />
                </a>
                <div className="desc">Trevor Lawrence</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/tiger.jpg">
                <img src="images/image_blending/tiger.jpg" alt="Lion double blurred" />
                </a>
                <div className="desc">Tiger</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/hybrid_tigrence.jpg">
                <img src="images/image_blending/hybrid_tigrence.jpg" alt="Lion high frequencies" />
                </a>
                <div className="desc">Tigrence (Trevor Lawrence + Tiger)</div>
            </div>
            </div>
        </div>
        <p>Here are the FFT plots for the Tigrence hybrid image</p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/ff_tiger.jpg">
                <img src="images/image_blending/fft_tiger.jpg" alt="blurred lion" />
                </a>
                <div className="desc">FFT Tiger</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/fft_lawrence.jpg">
                <img src="images/image_blending/fft_lawrence.jpg" alt="Lion double blurred" />
                </a>
                <div className="desc">FFT Lawrence</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/fft_low.jpg">
                <img src="images/image_blending/fft_low.jpg" alt="Lion high frequencies" />
                </a>
                <div className="desc">FFT Lawrence low pass filter</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/fft_high.jpg">
                <img src="images/image_blending/fft_high.jpg" alt="Lion high frequencies" />
                </a>
                <div className="desc">FFT Tiger high pass filter</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/fft_tigrence.jpg">
                <img src="images/image_blending/fft_tigrence.jpg" alt="Lion high frequencies" />
                </a>
                <div className="desc">FFT Tigrence Hybrid</div>
            </div>
            </div>
        </div>
        <p>
            Here is an example of a failed hybrid image, a school bus and a giraffe. The
            school bus is too short for the giraffe so the output looks strange
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/bus.jpg">
                <img src="images/image_blending/bus.jpg" alt="blurred lion" />
                </a>
                <div className="desc">School Bus</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/giraffe.jpg">
                <img src="images/image_blending/giraffe.jpg" alt="Lion double blurred" />
                </a>
                <div className="desc">Giraffe</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/hybrid_biraffe.jpg">
                <img src="images/image_blending/hybrid_biraffe.jpg" alt="Lion high frequencies" />
                </a>
                <div className="desc">Biraffe (Bus + Giraffe)</div>
            </div>
            </div>
        </div>
        <h3>2.3 Gaussian and Laplacian Stacks</h3>
        <p>
            We used Gaussian and Laplacian Stacks to blend an apple and an orange image.
            In our procedure, we first created the gaussian stacks for the apple and the
            orange by successively blurring the images with gaussian filters that
            doubled in sigma at each level. We had 6 levels overall. Then, to create the
            laplacian stacks for these images, we subtracted consecutive levels of the
            gaussian stacks (i.e. gaussian_stack[i] - gaussian_stack[i+1]). Furthermore,
            we made the gaussian stack for the mask as well. Finally, to blend the
            image, we created a laplacian stack for the output via the formula
            laplacian_output(i,j) = gaussian_mask(i,j)*laplacian_apple(i,j) +
            (1-gaussian_mask(i,j))*laplacian_orange(i,j) at each level. That is, we
            weight the laplacians of both images by the gaussian of the mask at each
            level. To get the output image, we collapse the output laplacian stack by
            summing across all the levels. The result is a smoothly blended oraple
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/apple.jpeg">
                <img src="images/image_blending/apple.jpeg" alt="blurred lion" />
                </a>
                <div className="desc">Apple</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/orange.jpeg">
                <img src="images/image_blending/orange.jpeg" alt="Lion double blurred" />
                </a>
                <div className="desc">Orange</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/oraple_mask.jpg">
                <img src="images/image_blending/oraple_mask.jpg" alt="Lion double blurred" />
                </a>
                <div className="desc">Oraple Mask</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/oraple.jpg">
                <img src="images/image_blending/oraple.jpg" alt="Lion high frequencies" />
                </a>
                <div className="desc">Oraple</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_apple0.jpg">
                <img src="images/image_blending/lp_apple0.jpg" alt="Laplacian Apple 0" />
                </a>
                <div className="desc">Weighted Laplacian Apple (level = 0)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_apple1.jpg">
                <img src="images/image_blending/lp_apple1.jpg" alt="Laplacian Apple 1" />
                </a>
                <div className="desc">Weighted Laplacian Apple (level = 1)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_apple2.jpg">
                <img src="images/image_blending/lp_apple2.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">Weighted Laplacian Apple (level = 2)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_apple3.jpg">
                <img src="images/image_blending/lp_apple3.jpg" alt="Laplacian Apple 3" />
                </a>
                <div className="desc">Weighted Laplacian Apple (level = 3)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_apple4.jpg">
                <img src="images/image_blending/lp_apple4.jpg" alt="Laplacian Apple 4" />
                </a>
                <div className="desc">Weighted Laplacian Apple (level = 4)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_apple5.jpg">
                <img src="images/image_blending/lp_apple5.jpg" alt="Laplacian Apple 5" />
                </a>
                <div className="desc">Weighted Laplacian Apple (level = 5)</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_oraple0.jpg">
                <img src="images/image_blending/lp_oraple0.jpg" alt="Laplacian Oraple 0" />
                </a>
                <div className="desc">Weighted Laplacian Oraple (level = 0)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_oraple1.jpg">
                <img src="images/image_blending/lp_oraple1.jpg" alt="Laplacian Oraple 1" />
                </a>
                <div className="desc">Weighted Laplacian Oraple (level = 1)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_oraple2.jpg">
                <img src="images/image_blending/lp_oraple2.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">Weighted Laplacian Oraple (level = 2)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_oraple3.jpg">
                <img src="images/image_blending/lp_oraple3.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">Weighted Laplacian Oraple (level = 3)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_oraple4.jpg">
                <img src="images/image_blending/lp_oraple4.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">Weighted Laplacian Oraple (level = 4)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_oraple5.jpg">
                <img src="images/image_blending/lp_oraple5.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">Weighted Laplacian Oraple (level = 5)</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_orange0.jpg">
                <img src="images/image_blending/lp_orange0.jpg" alt="Laplacian Apple 1" />
                </a>
                <div className="desc">Weighted Laplacian Orange (level = 0)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_orange1.jpg">
                <img src="images/image_blending/lp_orange1.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">Weighted Laplacian Orange (level = 1)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_orange2.jpg">
                <img src="images/image_blending/lp_orange2.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">Weighted Laplacian Orange (level = 2)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_orange3.jpg">
                <img src="images/image_blending/lp_orange3.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">Weighted Laplacian Orange (level = 3)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_orange4.jpg">
                <img src="images/image_blending/lp_orange4.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">Weighted Laplacian Orange (level = 4)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_orange5.jpg">
                <img src="images/image_blending/lp_orange5.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">Weighted Laplacian Orange (level = 5)</div>
            </div>
            </div>
        </div>
        <h3>2.4 Multiresolution Blending</h3>
        <p>
            We also selected our own images to blend and used irregular masks during the
            blending process. We followed the same procedure for blending as outlined in
            the previous section for the oraple, except now with irregular masks. For
            example, here is the blending process of an image of Toothless (the dragon
            from "How to Train your Dragon") and an image of SF's Golden Gate Bridge
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/toothless.jpeg">
                <img src="images/image_blending/toothless.jpeg" alt="blurred lion" />
                </a>
                <div className="desc">Toothless</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/golden_gate.jpg">
                <img src="images/image_blending/golden_gate.jpg" alt="Lion double blurred" />
                </a>
                <div className="desc">Golden Gate Bridge</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/toothless_mask.jpeg">
                <img src="images/image_blending/toothless_mask.jpeg" alt="Lion double blurred" />
                </a>
                <div className="desc">Toothless Mask</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/toothless_gate.jpg">
                <img src="images/image_blending/toothless_gate.jpg" alt="Lion high frequencies" />
                </a>
                <div className="desc">Toothless flying over Golden Gate Bridge</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_toothless0.jpg">
                <img src="images/image_blending/lp_toothless0.jpg" alt="Laplacian Apple 0" />
                </a>
                <div className="desc">Weighted Laplacian Toothless (level = 0)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_toothless1.jpg">
                <img src="images/image_blending/lp_toothless1.jpg" alt="Laplacian Apple 1" />
                </a>
                <div className="desc">Weighted Laplacian Toothless (level = 1)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_toothless2.jpg">
                <img src="images/image_blending/lp_toothless2.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">Weighted Laplacian Toothless (level = 2)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_toothless3.jpg">
                <img src="images/image_blending/lp_toothless3.jpg" alt="Laplacian Apple 3" />
                </a>
                <div className="desc">Weighted Laplacian Toothless (level = 3)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_toothless4.jpg">
                <img src="images/image_blending/lp_toothless4.jpg" alt="Laplacian Apple 4" />
                </a>
                <div className="desc">Weighted Laplacian Toothless (level = 4)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_toothless5.jpg">
                <img src="images/image_blending/lp_toothless5.jpg" alt="Laplacian Apple 5" />
                </a>
                <div className="desc">Weighted Laplacian Toothless (level = 5)</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_toothless_gate0.jpg">
                <img src="images/image_blending/lp_toothless_gate0.jpg" alt="Laplacian Apple 1" />
                </a>
                <div className="desc">
                Weighted Laplacian Toothless Gate (level = 0)
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_toothless_gate1.jpg">
                <img src="images/image_blending/lp_toothless_gate1.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">
                Weighted Laplacian Toothless Gate (level = 1)
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_toothless_gate2.jpg">
                <img src="images/image_blending/lp_toothless_gate2.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">
                Weighted Laplacian Toothless Gate (level = 2)
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_toothless_gate3.jpg">
                <img src="images/image_blending/lp_toothless_gate3.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">
                Weighted Laplacian Toothless Gate (level = 3)
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_toothless_gate4.jpg">
                <img src="images/image_blending/lp_toothless_gate4.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">
                Weighted Laplacian Toothless Gate (level = 4)
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_toothless_gate5.jpg">
                <img src="images/image_blending/lp_toothless_gate5.jpg" alt="Laplacian Apple 2" />
                </a>
                <div className="desc">
                Weighted Laplacian Toothless Gate (level = 5)
                </div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_gate0.jpg">
                <img src="images/image_blending/lp_gate0.jpg" alt="Laplacian Gate 0" />
                </a>
                <div className="desc">Weighted Laplacian Gate (level = 0)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_gate1.jpg">
                <img src="images/image_blending/lp_gate1.jpg" alt="Laplacian Gate 1" />
                </a>
                <div className="desc">Weighted Laplacian Gate (level = 1)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_gate2.jpg">
                <img src="images/image_blending/lp_gate2.jpg" alt="Laplacian Gate 2" />
                </a>
                <div className="desc">Weighted Laplacian Gate (level = 2)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_gate3.jpg">
                <img src="images/image_blending/lp_gate3.jpg" alt="Laplacian Gate 3" />
                </a>
                <div className="desc">Weighted Laplacian Gate (level = 3)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_gate4.jpg">
                <img src="images/image_blending/lp_gate4.jpg" alt="Laplacian Gate 4" />
                </a>
                <div className="desc">Weighted Laplacian Gate (level = 4)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_gate5.jpg">
                <img src="images/image_blending/lp_gate5.jpg" alt="Laplacian Gate 5" />
                </a>
                <div className="desc">Weighted Laplacian Gate (level = 5)</div>
            </div>
            </div>
        </div>
        <p>
            Here is the blending process of an image of Bill Gates walking and an image
            of Sather Gate at UC Berkeley. The blended image shows Bill walking in
            Sather Gate
        </p>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/bill.jpg">
                <img src="images/image_blending/bill.jpg" alt="blurred lion" />
                </a>
                <div className="desc">Bill Gates</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/sather.jpg">
                <img src="images/image_blending/sather.jpg" alt="Lion double blurred" />
                </a>
                <div className="desc">Sather Gate</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/bill_mask.jpg">
                <img src="images/image_blending/bill_mask.jpg" alt="Lion double blurred" />
                </a>
                <div className="desc">Bill Gates Mask</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/bill_sather.jpg">
                <img src="images/image_blending/bill_sather.jpg" alt="Lion high frequencies" />
                </a>
                <div className="desc">Bill Gates walking through Sather Gate</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_bill0.jpg">
                <img src="images/image_blending/lp_bill0.jpg" alt="Laplacian Bill Gates 0" />
                </a>
                <div className="desc">Weighted Laplacian Bill Gates (level = 0)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_bill1.jpg">
                <img src="images/image_blending/lp_bill1.jpg" alt="Laplacian Bill Gates 1" />
                </a>
                <div className="desc">Weighted Laplacian Bill Gates (level = 1)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_bill2.jpg">
                <img src="images/image_blending/lp_bill2.jpg" alt="Laplacian Bill Gates 2" />
                </a>
                <div className="desc">Weighted Laplacian Bill Gates (level = 2)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_bill3.jpg">
                <img src="images/image_blending/lp_bill3.jpg" alt="Laplacian Bill Gates 3" />
                </a>
                <div className="desc">Weighted Laplacian Bill Gates (level = 3)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_bill4.jpg">
                <img src="images/image_blending/lp_bill4.jpg" alt="Laplacian Bill Gates 4" />
                </a>
                <div className="desc">Weighted Laplacian Bill Gates (level = 4)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_bill5.jpg">
                <img src="images/image_blending/lp_bill5.jpg" alt="Laplacian Bill Gates 5" />
                </a>
                <div className="desc">Weighted Laplacian Bill Gates (level = 5)</div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_bill_sather0.jpg">
                <img
                    src="images/image_blending/lp_bill_sather0.jpg"
                    alt="Laplacian Bill at Sather Gate 0"
                />
                </a>
                <div className="desc">
                Weighted Laplacian Bill at Sather Gate (level = 0)
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_bill_sather1.jpg">
                <img
                    src="images/image_blending/lp_bill_sather1.jpg"
                    alt="Laplacian Bill at Sather Gate 1"
                />
                </a>
                <div className="desc">
                Weighted Laplacian Bill at Sather Gate (level = 1)
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_bill_sather2.jpg">
                <img
                    src="images/image_blending/lp_bill_sather2.jpg"
                    alt="Laplacian Bill at Sather Gate 2"
                />
                </a>
                <div className="desc">
                Weighted Laplacian Bill at Sather Gate (level = 2)
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_bill_sather3.jpg">
                <img
                    src="images/image_blending/lp_bill_sather3.jpg"
                    alt="Laplacian Bill at Sather Gate 3"
                />
                </a>
                <div className="desc">
                Weighted Laplacian Bill at Sather Gate (level = 3)
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_bill_sather4.jpg">
                <img
                    src="images/image_blending/lp_bill_sather4.jpg"
                    alt="Laplacian Bill at Sather Gate 4"
                />
                </a>
                <div className="desc">
                Weighted Laplacian Bill at Sather Gate (level = 4)
                </div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_bill_sather5.jpg">
                <img
                    src="images/image_blending/lp_bill_sather5.jpg"
                    alt="Laplacian Bill at Sather Gate 5"
                />
                </a>
                <div className="desc">
                Weighted Laplacian Bill at Sather Gate (level = 5)
                </div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_sather0.jpg">
                <img src="images/image_blending/lp_sather0.jpg" alt="Laplacian Sather Gate 0" />
                </a>
                <div className="desc">Weighted Laplacian Sather Gate (level = 0)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_sather1.jpg">
                <img src="images/image_blending/lp_sather1.jpg" alt="Laplacian Sather Gate 1" />
                </a>
                <div className="desc">Weighted Laplacian Sather Gate (level = 1)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_sather2.jpg">
                <img src="images/image_blending/lp_sather2.jpg" alt="Laplacian Sather Gate 2" />
                </a>
                <div className="desc">Weighted Laplacian Sather Gate (level = 2)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_sather3.jpg">
                <img src="images/image_blending/lp_sather3.jpg" alt="Laplacian Sather Gate 3" />
                </a>
                <div className="desc">Weighted Laplacian Sather Gate (level = 3)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_sather4.jpg">
                <img src="images/image_blending/lp_sather4.jpg" alt="Laplacian Sather Gate 4" />
                </a>
                <div className="desc">Weighted Laplacian Sather Gate (level = 4)</div>
            </div>
            </div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="images/image_blending/lp_sather5.jpg">
                <img src="images/image_blending/lp_sather5.jpg" alt="Laplacian Sather Gate 5" />
                </a>
                <div className="desc">Weighted Laplacian Sather Gate (level = 5)</div>
            </div>
            </div>
        </div>
    </>
)
}

export default ImageBlending;