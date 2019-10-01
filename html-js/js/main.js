'use strict';

function validatForm() {
    var name, lastName, age, date, cpf, phone, email, gender, adress, number, uf, password;

    name = document.forms['workshop-html-js']['name'];
    lastName = document.forms['workshop-html-js']['lastName'];
    age = document.forms['workshop-html-js']['age'];
    date = document.forms['workshop-html-js']['date'];
    cpf = document.forms['workshop-html-js']['cpf'];
    phone = document.forms['workshop-html-js']['phone'];
    email = document.forms['workshop-html-js']['email'];
    gender = document.forms['workshop-html-js']['gender'];
    adress = document.forms['workshop-html-js']['adress'];
    number = document.forms['workshop-html-js']['number'];
    uf = document.forms['workshop-html-js']['UF'];
    password = document.forms['workshop-html-js']['pw'];

    if (name.value == '') {
        alert('Por favor preencha o campo "Nome"');
        name.focus();
        return false;
    }
    
    if (lastName.value == '') {
        alert('Por favor preencha o campo "Sobrenome"');
        lastName.focus();
        return false;
    }
    
    if (age.value == '') {
        alert('Por favor preencha o campo "Idade"');
        age.focus();
        return false;
    }
    
    if (date.value == '') {
        alert('Por favor preencha o campo "Data"');
        date.focus();
        return false;
    }
    
    if (cpf.value == '') {
        alert('Por favor preencha o campo "CPF"');
        cpf.focus();
        return false;
    }
    
    if (phone.value == '') {
        alert('Por favor preencha o campo "Telefone"');
        phone.focus();
        return false;
    }
    
    if (gender.value == '') {
        alert('Por favor preencha o campo "Gênero"');
        return false;
    }
    
    if (adress.value == '') {
        alert('Por favor preencha o campo "Endereço"');
        adress.focus();
        return false;
    }
    
    if (number.value == '') {
        alert('Por favor preencha o campo "Número"');
        number.focus();
        return false;
    }
    
    if (uf.value == '' || uf.value == '--') {
        alert('Por favor preencha o campo "Estado"');
        uf.focus();
        return false;
    }
    
    if (email.value == '') {
        alert('Por favor preencha o campo "E-Mail"');
        email.focus();
        return false;
    }
    
    if (password.value == '') {
        alert('Por favor preencha o campo "Senha"');
        password.focus();
        return false;
    }
    return true;
}