const but1 = document.querySelector('.button1');
const bod = document.querySelector('body');
const but2 = document.querySelector('.button2');
const para = document.querySelectorAll('p');


but1.addEventListener('click', ()=>{
bod.setAttribute('style', 'background-color: green;')

})

but2.addEventListener('click', ()=>{
    bod.setAttribute('style', 'background-color: pink;')
    
    })

    
para.forEach((item)=>{
    item.addEventListener('click', ()=>{
       item.innerHTML = '';
    })
})
