export function hamburger() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = [];
  inicio = document.getElementById('inicio');
  nosotros = document.getElementById('nosotros');
  productos = document.getElementById('productos');
  servicios = document.getElementById('servicios');
  blog = document.getElementById('blog');

  navMenu.push(inicio);
  navMenu.push(nosotros);
  navMenu.push(productos);
  navMenu.push(servicios);
  navMenu.push(contacto);
  navMenu.push(blog);

  hamburger.addEventListener('click', () => {
    navMenu.forEach(navElement => {
      navElement.classList.toggle('show-nav');
      console.log(navElement);
    });
  })


  console.log(navMenu);
}
