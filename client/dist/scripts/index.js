
function changeStateBurgerButton(){
  
  const headerLogo = document.getElementById('header_logo');
  const burgerButton = document.getElementById('burger_button');
  const headerBurger = document.querySelectorAll('.header_burger, .header_menu');
  const headerBody = document.querySelector('.header_body');
  const headerList = document.querySelectorAll('.header_list li');
  const body = document.querySelector('body');

  document.addEventListener('DOMContentLoaded', () =>{
  
    burgerButton.addEventListener('click', (e) => {
        headerBurger.forEach((element) => {
          element.classList.toggle('active')
        });
        
      body.classList.toggle('lock');
      headerBody.classList.toggle('active')
    });

    headerLogo.addEventListener('click', (e) => {
      removeClass();
    });


    headerList.forEach((e) => {
      e.addEventListener('click', () => {
        removeClass();
      });
    });

  });

  function removeClass(){
    headerBurger.forEach((el) => {
      el.classList.remove('active');
      body.classList.remove('lock');
      headerBody.classList.remove('active');
    })
  }

};
changeStateBurgerButton();