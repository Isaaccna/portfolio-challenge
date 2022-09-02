var slideIndex = 1
showDivs(slideIndex)

function plusDivs(n) {
  showDivs((slideIndex += n))
}

function showDivs(n) {
  var i

  var slides = document.getElementsByClassName('slides')

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'

    slides[slideIndex - 1].style.display = 'block'
  }
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 37:
          //left
          e.preventDefault();
          slideIndex--;
          showDivs(slideIndex);
          break;
      case 39:
          //right
          e.preventDefault();
          slideIndex++;
          showDivs(slideIndex);
          break;
  }
}



