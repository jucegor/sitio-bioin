export function home() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

}


export function counter() {
  // const counters = document.querySelectorAll('.counter');
  // const speed = 200; // The lower the slower

  // counters.forEach(counter => {
  //   const updateCount = () => {
  //     const target = +counter.getAttribute('data-target');
  //     const count = +counter.innerText;

  //     // Lower inc to slow and higher to slow
  //     const inc = target / speed;

  //     // console.log(inc);
  //     // console.log(count);

  //     // Check if target is reached
  //     if (count < target) {
  //       // Add inc to count and output in counter
  //       counter.innerText = count + inc;
  //       // Call function every ms
  //       setTimeout(updateCount, 1);
  //     } else {
  //       counter.innerText = target;
  //     }
  //   };

  //   updateCount();
  // });
console.log("hello from counter!");
}
