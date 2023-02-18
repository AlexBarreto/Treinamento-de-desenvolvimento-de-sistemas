
const btn = document.querySelector('#btn-dropdown');
const boxDropdow = document.querySelector('#box-dropdown')

btn.addEventListener('click',()=>{
    
    if(boxDropdow.style.display == 'block'){
        boxDropdow.style.display = 'none';
    }else{
        boxDropdow.style.display = 'block';
    }
})