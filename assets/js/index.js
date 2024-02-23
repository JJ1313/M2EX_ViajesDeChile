document.addEventListener('DOMContentLoaded', ()=>{
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  const btnSubmit = document.querySelector('#btn-submit');

  btnSubmit.addEventListener('click', (event)=>{
    event.preventDefault();
    alert('Mensaje enviado con exito');
  });
});