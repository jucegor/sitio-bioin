export function navbar() {
  //set the li
  var listItems = document.getElementById('navbar-animmenu').querySelectorAll('li');
  //get the tabs
  var tabItems = document.querySelectorAll('div.tabContent');
  hideElements();
  showHome();

  function unactiveItem() {
    listItems.forEach(item => item.classList.remove('active-li'));
  }


  function hideElements() {
    tabItems.forEach(tab => tab.setAttribute('style', 'display: none;'));
  }

  function showHome() {
    document.getElementById('inicio-tab').setAttribute('style', 'display: block;');
  }
  const navMenu = [];
  var inicio = document.getElementById('inicio');
  var nosotros = document.getElementById('nosotros');
  var productos = document.getElementById('productos');
  var servicios = document.getElementById('servicios');
  var blog = document.getElementById('blog');

  navMenu.push(inicio);
  navMenu.push(nosotros);
  navMenu.push(productos);
  navMenu.push(servicios);
  navMenu.push(contacto);
  navMenu.push(blog);


  function showTab(tabId) {
    hideElements();
    switch (tabId) {
      case 'inicio':
        document.getElementById('inicio-tab').setAttribute('style', 'display: block;');

        break;
      case 'nosotros':
        document.getElementById('nosotros-tab').setAttribute('style', 'display: block;');

        break;
      case 'productos':
        document.getElementById('productos-tab').setAttribute('style', 'display: block;');

        break;
      case 'servicios':
        document.getElementById('servicios-tab').setAttribute('style', 'display: block;');

        break;
      case 'contacto':
        document.getElementById('contacto-tab').setAttribute('style', 'display: block;');

        break;
      case 'blog':
        document.getElementById('blog-tab').setAttribute('style', 'display: block;');

        break;
      default:
        document.getElementById('inicio-tab').setAttribute('style', 'display: block;');

        break;
    }
    unactiveItem();

  }
function topFunction() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }
  listItems.forEach(item => item.onclick = function clicked(){
    var activeWidthListItem = this.offsetWidth;
    var activePosListItem = this.offsetLeft;
    document.getElementsByClassName('hori-selector')[0].setAttribute('style', `left: ${activePosListItem}px; width: ${activeWidthListItem}px;`);
    var tabId = this.id;
    showTab(tabId);
    topFunction();
    this.classList.add('active-li');
    navMenu.forEach(navElement => {navElement.classList.remove('show-nav');});
  });

  // When the user clicks on the button, scroll to the top of the document



  console.log("Navbar loaded...")

}
