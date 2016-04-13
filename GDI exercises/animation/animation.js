//catwalk

var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';

function catWalk() {
  var moveLeft = parseInt(img.style.left);
  img.style.left = (moveLeft + 10) + 'px';

  if ( moveLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}

setInterval(catWalk, 50);
