export function navbar() {
  // ---------horizontal-navbar-menu-----------
  var tabsNewAnim = document.querySelector('#navbar-animmenu');
  var selectorNewAnim = document.querySelector('#navbar-animmenu');
  var optionsOnNavbar = document.getElementById('navbar-animmenu').getElementsByTagName('li');
  var listItemsLenght = optionsOnNavbar.length;
  var activeItemNewAnim = document.getElementsByClassName('active-li').item(0);
  var activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
  var itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;

  function unactiveItem() {
    activeItemNewAnim.classList.remove('active-li');
  }

  function clicked() {
    console.log("Success!!!");
  }


  console.log(optionsOnNavbar);
  console.log(listItemsLenght);



  function restyleItem() {
    var item = document.getElementsByClassName('hori-selector');
    item[0].setAttribute('style', `left: ${itemPosNewAnimLeft}px; width: ${activeWidthNewAnimWidth}px;`);
  }
  restyleItem();



  console.log("Hello from navbar!");
}
