/*
const verificaForm = (string) =>
{
    const email = document.querySelector('#email');
    const senha = document.querySelector('#senha');

    email.value = string;

    if(verificaEMail1(email.value))
    {
        email.style.border = "2px solid green";

    }else{

        email.style.border = "2px solid red";
        return
    }

    if(verificaEMail2(email.value))
    {
        email.style.border = "2px solid green";

    }else{

        email.style.border = "2px solid blue";
    }

}

function verificaEMail1(email)
{
    const indice = email.indexOf('@');
    return indice !== -1;
}

function verificaEMail2(email)
{
    const indice = email.indexOf('.com');
    return indice !== -1;
}


const btn = document.getElementById('button');

btn.addEventListener('click', ()=>{

    const string = "email@exemplo.com";

    verificaForm(string);
})
*/

//DEFINIÇÃO  DE FUNÇÃO

function soma1(a,b,c)
{
    const soma = a + b + c;

    return soma;
}

const resultado1 = soma1(5,6,10);

//EXPREÇÃO DE FUNÇÃO

const soma2 = function(a,b,c){
    return a + b+ c
}

const resultado2 = soma2(5,6,10);

//arrow function

const soma3 = (a,b,c) => a + b + c;

const resultado3 = soma3(5,6,10);

//Método de objeto

const pessoa = {
    nome: "Alex",
    idade: "34",
    info: function(){
        console.log("O nome é " + this.nome + " e a idade é " + this.idade + " anos")
    }
}

pessoa.info();