const but1 = document.querySelector('.button1');
const bod = document.querySelector('body');
const but2 = document.querySelector('.button2');

but1.addEventListener('click', ()=>{
bod.setAttribute('style', 'background-color: green;')

})

but2.addEventListener('click', ()=>{
    bod.setAttribute('style', 'background-color: pink;')
    
    })

