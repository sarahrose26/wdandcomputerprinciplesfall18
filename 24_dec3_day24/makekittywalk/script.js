//access the image
var img = document.getElementsByTagName('img')[0];

//set the left as '0px'
img.style.left = '0px'

//add pixels to the left on an interval to make it go right
//grab the previous position, parse it to make it an integer, then add pixels back onto it

//this function allows the cat to start on the left and move to the right one time

//function catWalk(){
//    var oldLeft = parseInt(img.style.left)
//    var newLeft = oldLeft + 1
//    img.style.left = newLeft + 'px'
//}

//window.setInterval(catWalk, 10)


//when the cat reaches the right hand of the screen, have it reset back to the left
//how can we tell the image reached the end of the screen?
//did the amount of pixels on the right side equal 0?
//the images's last right position compared to the right side of the window


//this function will allow the cat to loop back over and over

//option A
function catWalk(){
    if (img.style.left === '600px'){
        img.style.left = '0px'
    }
    var oldLeft = parseInt(img.style.left)
    
    var newLeft = oldLeft + 1
    img.style.left = newLeft + 'px'
}

window.setInterval(catWalk, 10)

//option B
//function catWalk(){
//    //add pixels to the old left
//    var oldLeft = parseInt(img.style.left)
//    if (oldLeft >= window.innerWidth) {
//        oldLeft = -300
//    }
//    var newLeft = oldLeft + 1
//    img.style.left = newLeft + 'px'
//}
//
//window.setInterval(catWalk, 10)









