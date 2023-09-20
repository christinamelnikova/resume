let container = document.querySelector('.form')
let saveButton = document.querySelector('.saveBtn')
const openButton = document.querySelector('.openBtn')

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

    const deleteSkill = document.querySelectorAll('.deleteSkill')
    deleteSkill.forEach(btnDelete =>{
        btnDelete.addEventListener('click', function() {
            this.parentElement.remove()
        })
    })
}

if (localStorage.getItem("default")){
  container.innerHTML = localStorage.getItem("default");
  newInput()
}
newInput()

saveButton.addEventListener('click', function(){
    let name = prompt('Как Вас зовут?')
    localStorage.setItem(name, container.innerHTML)
})

openButton.addEventListener('click', function (){
    let resume = prompt('Какое резюме открыть?')
    if (localStorage.getItem(resume))
    {
        container.innerHTML = localStorage.getItem(resume)
        newInput()
    }
})


const addSkill = document.querySelector('.addSkill')

addSkill.addEventListener('click', function (){
    let main = document.querySelector('.mainContainer')
    let skillList = document.querySelector('.skillList')
    let skill = document.createElement('div')
    skill.setAttribute('class', 'skill')
    skill.style.height = '20px'
    skill.style.width = '100%'
    skill.style.marginTop = '15px'
    skill.style.display = 'flex'
    skill.style.alignContent = 'center'
    skillList.style.height += skill.height + skill.marginTop
    main.style.height = 735 +'px' + 35 + 'px'
    skillList.appendChild(skill)

    let inputTxt = document.createElement('input')
    inputTxt.setAttribute('class', '.inputData')
    inputTxt.setAttribute('type', 'text')
    inputTxt.setAttribute('placeholder', 'Навык')
    inputTxt.style.backgroundColor = 'transparent'
    inputTxt.style.border = 'none'
    inputTxt.style.fontSize = 'larger'
    inputTxt.style.width = '40%'
    inputTxt.style.fontFamily = 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'
    inputTxt.style.letterSpacing = '1px'
    inputTxt.style.color = 'black'
    skill.appendChild(inputTxt)

    let inputRange = document.createElement('input')
    inputRange.setAttribute('type', 'range')
    inputRange.setAttribute('step', '1')
    inputRange.setAttribute('class', 'inputData')
    inputRange.style.width = '50%'
    skill.appendChild(inputRange)

    let skillBtn = document.createElement('button')
    skillBtn.innerText = 'x'
    skillBtn.setAttribute('class', 'deleteSkill')
    skill.appendChild(skillBtn)
    newInput()
})

