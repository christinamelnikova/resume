let container = document.querySelector('.form')
function newInput(){
    let data = document.querySelectorAll('.inputData')
    data.forEach(inp =>{
        inp.addEventListener('input', function(){
            if (inp.tagName === 'INPUT')
                inp.setAttribute("value", inp.value);
            if (inp.tagName === 'TEXTAREA')
                inp.innerText = inp.value;
            localStorage.setItem("default", container.innerHTML)
        })
    })
}

if (localStorage.getItem("default")){
  container.innerHTML = localStorage.getItem("default");
  newInput()
}

const saveButton = document.querySelector('.saveBtn')

saveButton.addEventListener('click', function(){
    let name = prompt('Как Вас зовут?')
    localStorage.setItem(name, container.innerHTML)
})

const openButton = document.querySelector('.openBtn')

openButton.addEventListener('click', function (){
    let resume = prompt('Какое резюме открыть?')
    if (localStorage.getItem(resume)){
        container.innerHTML = localStorage.getItem(resume)
        newInput()
    }
})
