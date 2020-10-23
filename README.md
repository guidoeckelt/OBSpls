# OBSpls
just RainbowPls with OBS
Display jammy GIFs on your stream in a randomized fashion

## Setup

to setup OBSpls just copy

* OBSpls.html
* OBSpls.js
* OBSpls.config.js
* OBSpls.css

into any folder and configure the **OBSpls.config.js** to your liking.

i provided some example GIFs in the **pls** folder.

## Config

the **OBSpls.config.js** file provides you with some customization options.
the following parameters can be configured:

* maxPls = maximum number of GIFs displayed at once
  * dont make the number higher than the number of cells ( there are 9). The resulting behavior is untested (TODO for future me)
  * default value is **4**
* gifSize = GIF size in **pixels**
  * default value is **150**
* allowSameGifMultipleTimes = whether or not you want the same GIF shown multiple times on the same cycle
  * possible values are **true** or **false**
  * default value is **false**
* baseDelay = delay duration between each cycle in **milliseconds**
  * default value is **5000** aka 5 seconds
* allowRandomizedDelay = whether or not you want the delay between cycles to be a randomized value
  * possible values are **true** or **false**
  * default value is **false**
* minimumDifference = the difference between the **baseDelay** and smallest delay in **milliseconds**
  * the calculation is **baseDelay** - **minimumDifference** for the smallest possible delay between cycles
  * default value is **2000** aka 2 seconds which results in the smallest possible delay of 3 seconds
* maximumDifference = the difference between the **baseDelay** and the largest delay in **milliseconds**
  * the calculation is **baseDelay** + **maximumDifference** for the largest possible delay between cycles
  * default value is **5000** aka 5 seconds which results in the largest possible delay of 10 seconds
* pls = list of all GIFs you want to be used by the algorithm
  * the location of the GIFs can be 
    * a relative file path from the folder where OBSpls is located ( like the default values)
    * a absolute file path from anywhere on your harddrive
    * direct image links from anywhere on the internet ( for example imgur)
      * they have to be direct links like this https://i.imgur.com/ORahpi8.png
      * indirect links like https://imgur.com/ORahpi8 dont work
  * follow the format of the example to include your GIFs
  * technically you can use any image, it doesnt have to be a GIF ( but thats good for)
  
the parameters width and height are currently not customizable (TODO for future me)


## Have Fun :)
