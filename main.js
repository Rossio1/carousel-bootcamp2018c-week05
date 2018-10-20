//creating a carousel
var i= 0
var carousel = ['Images/image1.png','Images/image02.png','Images/image03.png','Images/image4.png','Images/image5.png','Images/image6.png','Images/image7.png']
document.getElementById('previous').onclick =back
document.getElementById('next').onclick =next
function back(){
  i--
  if(i< 0){
    i = carousel.length-1
  }
  document.getElementsByTagName('img')[0].src =carousel[i]
  // console.log(carousel[i])
}

function next(){
  i++
  if(i == carousel.length){
    i = 0
  }
  document.getElementsByTagName('img')[0].src =carousel[i]
  //console.log(carousel[i])
}

document.onkeydown = keyPress

var keyState= {};

function keyPress(e){
  keyState[e.keyCode]= true
  e = e || window.event
  if(keyState['37'] === true){
    back()
  }
  if(keyState['39']=== true){
    next()
  }
}
document.onkeyup= keyUp
function keyUp(e) {
  keyState[e.keyCode]= false
}
