export function contact() {
  console.log("Hello from contact form...");
  const form = document.getElementById('form');
  const sending = document.getElementById('send-form');

  form.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const form_data = new FormData(this);
    console.log(form_data.get('name'));
    sending.setAttribute('href', `mailto:contacto@bioin.mx?subject=${form_data.get('name')}${form_data.get('email')}&body=${form_data.get('message')}`)
    sending.click();
  }
}
