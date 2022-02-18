export function scrollTop() {
  //Get the button
  var scrollIcon = document.getElementById('scrollUp')

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollIcon.style.display = "block";
    } else {
      scrollIcon.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }


  scrollIcon.addEventListener('click', function click() {
    topFunction();
  });
}
