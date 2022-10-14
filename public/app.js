display_image = document.getElementById("displayIMAGE")

parent_image = document.getElementById("parentImage")

all_images = parent_image.getElementsByTagName('img')

indexNum = 0

function runSlider () {

    display_image.src = all_images[indexNum].src
}

runSlider()

// 

function backward() {

    if (indexNum == 0) {

        indexNum = all_images.length -1
    }

    else {

        indexNum--
        runSlider()
    }

   
}

function forward() {

    if (indexNum == 0) {

        indexNum = all_images.length -1
    }

    else {

        indexNum++
        runSlider()
    }

   
}