export function navbar() {

  var listItems = document.getElementById('navbar-animmenu').querySelectorAll('li');

  function unactiveItem() {
    listItems.forEach(item => item.classList.remove('active-li'));
  }

  listItems.forEach(item => item.onclick = function clicked(){
    unactiveItem();
    var activeWidthListItem = this.offsetWidth;
    var activePosListItem = this.offsetLeft;
    document.getElementsByClassName('hori-selector')[0].setAttribute('style', `left: ${activePosListItem}px; width: ${activeWidthListItem}px;`);
    this.classList.add('active-li');
  });
}
