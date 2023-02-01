function insert(num){
    numero = document.querySelector('#input2').value;
    document.querySelector('#input2').value = numero + num;
}
function clean(){
    document.querySelector('#input2').value = ' ';
    document.querySelector('#input1').value = ' ';
}
function calcular(){
    var numero = document.querySelector('#input2').value;
    if(numero){
        document.querySelector('#input2').value = eval(numero);
        document.querySelector('#input1').value = numero;
    }
}
function back(){
    var resultado = document.querySelector('#input2').value;
    document.querySelector('#input2').value = resultado.substring(0, resultado.length - 1);
}

function tema(){
    var circuloBranco = document.querySelector('#circuloBranco');
    circuloBranco.style.display = 'none';
    var circuloPreto = document.querySelector('#circuloPreto');
    circuloPreto.style.display = 'flex';
    circuloPreto.style.boxShadow = '1px 1px 1px 1px #2B2A2A';
    var container = document.querySelector('.container');
    container.style.backgroundColor = '#3E3E3E';
    var calculadora = document.querySelector('.calculadora');
    calculadora.style.backgroundColor ='#F8F8FF';
    calculadora.style.boxShadow = '2px 2px 2px 2px #DCDCDC';
    var input1 = document.querySelector('#input1');
    input1.style.backgroundColor = '#F8F8FF';
    input1.style.color = '#8F8D8D';
    var input2 = document.querySelector('#input2');
    input2.style.backgroundColor = '#F8F8FF';
    input2.style.color = '#dd4f56';

    var button = document.querySelectorAll('.botao');
    for(var i = 0; i < button.length; i++){
    button[i].style.backgroundColor = '#F8F8FF';
    button[i].style.color = '#3E3E3E';
    button[i].style.boxShadow = '2px 2px 2px 2px #DCDCDC';
    button[i].addEventListener('mouseover',function(){
        this.style.backgroundColor = '#F4F4F4';
    })
    button[i].addEventListener('mouseleave',function(){
        this.style.backgroundColor = '#F8F8FF';
    })
    }

    var operadores = document.querySelectorAll('.operadores');
    for(var i = 0; i < operadores.length; i++){
    operadores[i].style.color = '#F56068';
    operadores[i].style.backgroundColor = '#F8F8FF';
    operadores[i].style.boxShadow = '2px 2px 2px 2px #DCDCDC';
    operadores[i].addEventListener('mouseover',function(){
        this.style.backgroundColor = '#F4F4F4';
    })
    operadores[i].addEventListener('mouseleave',function(){
        this.style.backgroundColor = '#F8F8FF';
    })
    }

    var igual = document.querySelector('.igual');
    igual.style.boxShadow = '2px 2px 2px 2px #dcdcdc';
    }   

function atualiza(){
    window.location.reload();
}