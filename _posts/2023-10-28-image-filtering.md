---
title: Experimenting with image filters and blending techniques
tags: [Photography, Image Processing]
style: fill
color: light
description: 
---
## Background

In this project, we explore various use cases of filters/convolution and
the frequency domain of images. Part 1 (and Part 2.1) explores various
edge detection schemes using filters and Part 2 mainly uses the
frequency domain of images to perform some interesting tasks

## Part 1: Filters

### 1.1 Finite Difference Operator

First, we use the simple finite difference operators to perform edge
detection on the cameraman image. In particular, we convolve the filters
D_x = [-1 1] and D_y = [1 -1]^T^ with the cameraman image to get the
partial derivatives of the x and y directions, as shown below. To
combine this into one edge-detected image, we perform a gradient
magnitude computation as follows: res(i,j) = sqrt(cameraman_dx(i,j)^2^ +
cameraman_dy(i,j)^2^) where res is the output image, cameraman_dx is the
convolution of the cameraman image with D_x, and cameraman_dy is the
convolution with D_y. This uses the partial derivatives of the x and y
directions to find the gradient magnitude for the image. As seen below,
this creates a better edge detection overall that accounts for edges in
all direction. Finally, to make the edge detection more clear, we
binarize the gradient magnitude image by setting all pixels above 50 to
255 and pixels at or below 50 to 0. We tested out different thresholds
and found 50 worked well.

![Cameraman Original Image](images/cameraman.png)

Cameraman Original Image

![Cameraman_dx\
Convolved with D_x filter](images/cameraman_dx.jpg)

Cameraman_dx\
Convolved with D_x filter

![Cameraman_dy\
Convolved with D_y filter](images/cameraman_dy.jpg)

Cameraman_dy\
Convolved with D_y filter

![Cameraman Gradient Magnitude](images/cameraman_mag.jpg)

Cameraman Gradient Magnitude

![Cameraman Binarized](images/cameraman_bin.jpg)

Cameraman Binarized

### 1.2 Derivative of Gaussian (DoG) Filter

With the finite difference operator, the results were a little noisy and
had jagged edges, as seen in the binarized image. To get smoother edge
detection, we blur the original image by convolving it with a 2D
gaussian kernel, then performing the same edge detection scheme with the
finite difference operators

![Blurred Cameraman Image](images/blurred_cameraman.jpg)

Blurred Cameraman Image

![Blurred Cameraman_dx\
Blurred image convolved with D_x filter](images/cameraman_blurred_dx.jpg)

Blurred Cameraman_dx\
Blurred image convolved with D_x filter

![Blurred Cameraman_dy\
Blurred image convolved with D_y filter](images/cameraman_blurred_dy.jpg)

Blurred Cameraman_dy\
Blurred image convolved with D_y filter

![Blurred Cameraman Gradient Magnitude](images/cameraman_blurred_mag.jpg)

Blurred Cameraman Gradient Magnitude

![Blurred Cameraman Binarized](images/cameraman_blurred_bin.jpg)

Blurred Cameraman Binarized

As seen in the images above, there are clear differences between naively
applying the finite difference filters (like in part 1.1) and blurring
with a gaussian filter first then applying the finite difference
filters. The edge-detected images from this part are much smoother than
in the previous part, especially in the binarized images. The camerman
no longer has jagged edges and instead has smooth, continous edges.
Furthermore, using the properties of convolution, we can combine the
blurring and derivative filters into a single filter called the
Derivative of Gaussian filter (DoG) which we only need to convolve once
with the cameraman image to perform smooth edge-detection. The results
of applying the DoG filter are shown below; notice they are exactly the
same as the images above.

![DoG_dy filter\
Gaussian convolved with Dx filter](images/DOG_dx.jpg)

DoG_dy filter\
Gaussian convolved with Dx filter

![DoG_dy filter\
Gaussian convolved with Dy filter](images/DOG_dy.jpg)

DoG_dy filter\
Gaussian convolved with Dy filter

![DoG Cameraman_dx\
Convolved with DoG_dx filter](images/cameraman_DOG_dx.jpg)

DoG Cameraman_dx\
Convolved with DoG_dx filter

![DoG Cameraman_dy\
Convolved with DoG_dy filter](images/cameraman_DOG_dy.jpg)

DoG Cameraman_dy\
Convolved with DoG_dy filter

![DoG Cameraman Gradient Magnitude](images/cameraman_DOG_mag.jpg)

DoG Cameraman Gradient Magnitude

![DoG Cameraman Binarized](images/cameraman_DOG_bin.jpg)

DoG Cameraman Binarized

## Part 2: Frequencies

### 2.1 Image Sharpening

Now we try to use filters to sharpen an image, which means making the
edges more "defined". To do this, we get the high frequencies of an
image by applying a gaussian filter to blur the image (i.e get the low
frequencies) then subtracting the blurred image from the original image.
This leaves only the high frequencies (mostly edges) which we then add
back to the original image to obtain a sharpened image. We also use a
parameter alpha which controls how much the image is sharpened.
Mathmatically, sharpened_image(i,j) = alpha*original_image(i,j) +
(alpha-1)*blurred_image(i,j). Furthermore, we can combine the gaussian
filter and subtraction into a single filter called the unsharp mask
filter by computing alpha*e - (alpha-1)*gaussian_filter, where e is
the unit impulse (a kernel with 1 in the middle and zeros elsewhere).
The progression of sharpening some images is shown below.

![Taj Mahal Original Image](images/taj.jpg)

Taj Mahal Original Image

![Blurred Taj Mahal (low frequencies)](images/blurred_taj.jpg)

Blurred Taj Mahal (low frequencies)

![High frequencies Taj Mahal](images/hi_freq_taj.jpg)

High frequencies Taj Mahal

![Sharpened Taj Mahal (alpha = 3)](images/sharpened_taj.jpg)

Sharpened Taj Mahal (alpha = 3)

![Angel (my dog) Original Image](images/angel.jpg)

Angel (my dog) Original Image

![Blurred Angel (low frequencies)](images/blurred_angel.jpg)

Blurred Angel (low frequencies)

![High frequencies Angel](images/hi_freq_angel.jpg)

High frequencies Angel

![Sharpened Angel (alpha = 3)](images/sharpened_angel.jpg)

Sharpened Angel (alpha = 3)

For evalution purposes, we also blurred an image and tried to sharpen it
again. The results are shown below:

![Lion Original Image](images/lion.jpg)

Lion Original Image

![Blurred Lion](images/blurred_lion.jpg)

Blurred Lion

![Lion Double Blurred (low frequencies)](images/double_blurred_lion.jpg)

Lion Double Blurred (low frequencies)

![High frequencies Blurred Lion](images/hi_freq_lion.jpg)

High frequencies Blurred Lion

![Sharpened Lion (alpha = 3)](images/sharpened_lion.jpg)

Sharpened Lion (alpha = 3)

Notice that the sharpened version of the blurred image is a little
better but still far from the original image. This is because the image
is sharpened along the edges but the rest of the blurry areas remain
blurry so we cannot get back the original image

### 2.2 Hybrid Images

To create hybrid images, we combined the low frequencies from one image
with the high frequencies from another. In particular, to compute the
low frequecies for image A, we convolved image A with a gaussian kernel
to blur it. To compute the high frequecies for image B, we computed the
low frequecies using a gaussian kernel and subtracted it from the
original image. Then we averaged the low frequency image A with the high
frequency image B to get the hybrid image. We had to experiment with the
kernel sizes and the sigmas (cutoff frequencies) for each gaussian
filter to get the most aesthetically pleasing result

![Derek Picture](images/DerekPicture.jpg)

Derek Picture

![Nutmeg](images/nutmeg.jpg)

Nutmeg

![Dutmeg (Derek + Nutmeg)](images/dutmeg.jpg)

Dutmeg (Derek + Nutmeg)

![Zebra](images/zebra.jpg)

Zebra

![Cow](images/cow.jpg)

Cow

![Cowra (Zebra + Cow)](images/hybrid_cowra.jpg)

Cowra (Zebra + Cow)

![Trevor Lawrence](images/lawrence.jpg)

Trevor Lawrence

![Tiger](images/tiger.jpg)

Tiger

![Tigrence (Trevor Lawrence + Tiger)](images/hybrid_tigrence.jpg)

Tigrence (Trevor Lawrence + Tiger)

Here are the FFT plots for the Tigrence hybrid image

![FFT Tiger](images/ff_tiger.jpg)

FFT Tiger

![FFT Lawrence](images/fft_lawrence.jpg)

FFT Lawrence

![FFT Lawrence low pass filter](images/fft_low.jpg)

FFT Lawrence low pass filter

![FFT Tiger high pass filter](images/fft_high.jpg)

FFT Tiger high pass filter

![FFT Tigrence Hybrid](images/fft_tigrence.jpg)

FFT Tigrence Hybrid

Here is an example of a failed hybrid image, a school bus and a giraffe.
The school bus is too short for the giraffe so the output looks strange

![School Bus](images/bus.jpg)

School Bus

![Giraffe](images/giraffe.jpg)

Giraffe

![Biraffe (Bus + Giraffe)](images/hybrid_biraffe.jpg)

Biraffe (Bus + Giraffe)

### 2.3 Gaussian and Laplacian Stacks

We used Gaussian and Laplacian Stacks to blend an apple and an orange
image. In our procedure, we first created the gaussian stacks for the
apple and the orange by successively blurring the images with gaussian
filters that doubled in sigma at each level. We had 6 levels overall.
Then, to create the laplacian stacks for these images, we subtracted
consecutive levels of the gaussian stacks (i.e. gaussian_stack[i] -
gaussian_stack[i+1]). Furthermore, we made the gaussian stack for the
mask as well. Finally, to blend the image, we created a laplacian stack
for the output via the formula laplacian_output(i,j) =
gaussian_mask(i,j)*laplacian_apple(i,j) +
(1-gaussian_mask(i,j))*laplacian_orange(i,j) at each level. That is, we
weight the laplacians of both images by the gaussian of the mask at each
level. To get the output image, we collapse the output laplacian stack
by summing across all the levels. The result is a smoothly blended
oraple

![Apple](images/apple.jpeg)

Apple

![Orange](images/orange.jpeg)

Orange

![Oraple Mask](images/oraple_mask.jpg)

Oraple Mask

![Oraple](images/oraple.jpg)

Oraple

![Weighted Laplacian Apple (level = 0)](images/lp_apple0.jpg)

Weighted Laplacian Apple (level = 0)

![Weighted Laplacian Apple (level = 1)](images/lp_apple1.jpg)

Weighted Laplacian Apple (level = 1)

![Weighted Laplacian Apple (level = 2)](images/lp_apple2.jpg)

Weighted Laplacian Apple (level = 2)

![Weighted Laplacian Apple (level = 3)](images/lp_apple3.jpg)

Weighted Laplacian Apple (level = 3)

![Weighted Laplacian Apple (level = 4)](images/lp_apple4.jpg)

Weighted Laplacian Apple (level = 4)

![Weighted Laplacian Apple (level = 5)](images/lp_apple5.jpg)

Weighted Laplacian Apple (level = 5)

![Weighted Laplacian Oraple (level = 0)](images/lp_oraple0.jpg)

Weighted Laplacian Oraple (level = 0)

![Weighted Laplacian Oraple (level = 1)](images/lp_oraple1.jpg)

Weighted Laplacian Oraple (level = 1)

![Weighted Laplacian Oraple (level = 2)](images/lp_oraple2.jpg)

Weighted Laplacian Oraple (level = 2)

![Weighted Laplacian Oraple (level = 3)](images/lp_oraple3.jpg)

Weighted Laplacian Oraple (level = 3)

![Weighted Laplacian Oraple (level = 4)](images/lp_oraple4.jpg)

Weighted Laplacian Oraple (level = 4)

![Weighted Laplacian Oraple (level = 5)](images/lp_oraple5.jpg)

Weighted Laplacian Oraple (level = 5)

![Weighted Laplacian Orange (level = 0)](images/lp_orange0.jpg)

Weighted Laplacian Orange (level = 0)

![Weighted Laplacian Orange (level = 1)](images/lp_orange1.jpg)

Weighted Laplacian Orange (level = 1)

![Weighted Laplacian Orange (level = 2)](images/lp_orange2.jpg)

Weighted Laplacian Orange (level = 2)

![Weighted Laplacian Orange (level = 3)](images/lp_orange3.jpg)

Weighted Laplacian Orange (level = 3)

![Weighted Laplacian Orange (level = 4)](images/lp_orange4.jpg)

Weighted Laplacian Orange (level = 4)

![Weighted Laplacian Orange (level = 5)](images/lp_orange5.jpg)

Weighted Laplacian Orange (level = 5)

### 2.4 Multiresolution Blending

We also selected our own images to blend and used irregular masks during
the blending process. We followed the same procedure for blending as
outlined in the previous section for the oraple, except now with
irregular masks. For example, here is the blending process of an image
of Toothless (the dragon from "How to Train your Dragon") and an image
of SF's Golden Gate Bridge
