
function changeStateBurgerButton(){
  
  const burgerButton = document.getElementById('burger_button');
  const headerBurger = document.querySelectorAll('.header_burger, .header_menu');  
  const body = document.querySelector('body');

  document.addEventListener('DOMContentLoaded', () =>{
    burgerButton.addEventListener('click', (e) => {
        headerBurger.forEach((element) => {
          element.classList.toggle('active')
        });
      body.classList.toggle('lock');
    });
  });
};
changeStateBurgerButton();