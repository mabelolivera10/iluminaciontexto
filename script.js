var light = document.querySelector('.light');

var px = 0;
var py = 0;

var touches = [];

window.addEventListener('mousemove', follow, false);
window.addEventListener('touchmove', follow, false);

function follow(event) {
  
  px = event.pageX;
  py = event.pageY;
  
  if(px == null || py == null) {
    touches = event.touches;
    px = touches[0].pageX;
    py = touches[0].pageY;
  }
  
  for (var i = 0; i < 20; i++) {
    
    light.style.transform = 'translate(' + px + 'px, ' + py + 'px) rotate(25deg)';
    
  }
  
}