const body =document.querySelector('body') // guardar los valores del body
const toggle =document.getElementById('toggle')

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('toggleBlanco')//cambie el toggle
    body.classList.toggle('toggleBlanco')//cambie el body
})