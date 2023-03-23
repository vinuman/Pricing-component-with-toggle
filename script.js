const cards = document.querySelectorAll('.card');
const toggle = document.querySelector('#toggleBtn');
const main = document.querySelector('main');
let activeButton = false;

/* Adding the blue theme to all the even card children */
document.addEventListener('DOMContentLoaded', ()=>{
        for(let i=0; i<cards.length; i++){
            if(i%2 !== 0){
                cards[i].classList.add('blue-theme');
            }
        }
});


toggle.addEventListener('click', ()=>{
   
    if(activeButton == false){
      cards[0].querySelector('h3').textContent = '$ ' + 199.99;
      cards[1].querySelector('h3').textContent = '$ ' + 249.99;
      cards[2].querySelector('h3').textContent = '$ ' + 399.99;
      activeButton = true;
    } else{
       cards[0].querySelector('h3').textContent = '$ ' + 19.99;
       cards[1].querySelector('h3').textContent = '$ ' + 24.99;
       cards[2].querySelector('h3').textContent = '$ ' + 39.99;
       activeButton = false;
    }
})


