function changeStateBurgerButton(){
  document.addEventListener('DOMContentLoaded', () =>{
    const burgerButton = document.getElementById('burger_button');
    burgerButton.addEventListener('click', (e) => {
      const headerBurger = document.querySelectorAll('.header_burger');      
        headerBurger.classList.toggle('active');
    });
  });
};
changeStateBurgerButton();