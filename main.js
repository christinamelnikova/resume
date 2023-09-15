let container = document.querySelector('.form')
let data = document.querySelectorAll('.inputData')
let saveButton = document.querySelector('.saveBtn')
let openButton = document.querySelector('.openBtn')

let main = document.querySelector('.mainContainer')

if (localStorage.getItem("default")){
   container.innerHTML = localStorage.getItem("default");
}


data.forEach(inp =>{
    inp.addEventListener('input', function(){
        console.log('kk')
        if (inp.tagName === 'INPUT')
            inp.setAttribute("value", inp.value);
        if (inp.tagName === 'TEXTAREA')
            inp.innerText = inp.value;
        localStorage.setItem("default", container.innerHTML)
    })
})

saveButton.addEventListener('click', function(){
    let name = prompt('Как Вас зовут?')
    localStorage.setItem(name, container.innerHTML)
})

openButton.addEventListener('click', function (){
    let resume = prompt('Какое резюме открыть?')
    if (localStorage.getItem(resume))
        container.innerHTML = localStorage.getItem(resume)
})
