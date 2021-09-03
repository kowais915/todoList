const but1 = document.querySelector('.button1');
const bod = document.querySelector('body');
const but2 = document.querySelector('.button2');
const para = document.querySelectorAll('p');
const list = document.querySelector('ul');



but1.addEventListener('click', ()=>{
    // bod.setAttribute('style', 'background-color: green;');
    const inp = prompt("Enter: ");
    list.innerHTML += `<p>${inp}</p>`;
    
    })


    
para.forEach((item)=>{
    item.addEventListener('click', ()=>{
       item.style.textDecoration = "line-through";
    })
})
