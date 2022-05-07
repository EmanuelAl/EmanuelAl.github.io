let btnEncriptador = document.querySelector('.btn-encriptar');
let btnDesencriptador = document.querySelector('.btn-desencriptar');
let btnCopiar = document.querySelector('.btn-copiar');
let textIngresado = document.querySelector('.text-entrada');
let textDeSalida = document.querySelector('.resultado');


btnCopiar.classList.add('invisible')
textDeSalida.classList.add('invisible');



//Encriptacion
btnEncriptador.addEventListener('click', ()=> {
    document.querySelector('.sinMensaje').classList.add('invisible');//para limpiar la card de visualizacion del mensaje ingresado
    
    btnCopiar.classList.remove('invisible')
    textDeSalida.classList.remove('invisible');
    
    //validando minusculas y acentos 
    if(!validarMayusculasAcentos(textIngresado.value)){
        return;
    }else{
        console.log('es true');
        let textoEncriptado = encriptador(textIngresado.value);
        textDeSalida.value = textoEncriptado;
        
        textIngresado.value = '';
        btnCopiar.classList.remove('copiado');
        btnCopiar.innerHTML = 'Copiar';
        
    }

});

//Desencriptacion
btnDesencriptador.addEventListener('click', ()=> {
    document.querySelector('.sinMensaje').classList.add('invisible');//para limpiar la card de visualizacion del mensaje ingresado
    
    btnCopiar.classList.remove('invisible')
    textDeSalida.classList.remove('invisible');

    let textoDesencriptado = desencriptador(textIngresado.value);
    textDeSalida.value = textoDesencriptado;

    textIngresado.value = '';
    btnCopiar.classList.remove('copiado');
    btnCopiar.innerHTML = 'Copiar';
});

//copiado
btnCopiar.addEventListener('click', () => {
   
    copiar();
    btnCopiar.innerHTML = 'COPIADO!!';
    btnCopiar.classList.add('copiado');


})

//DECLARACION DE FUNCIONES
//validacion de minusculas y acentos
function validarMayusculasAcentos(cadena){
    let  textRegex = /[a-z0-9_]+/g;
    let noValido = document.querySelector('#alertaValidacion');
    if(!textRegex.test(cadena)){
        noValido.classList.add('alert');
     return false;
    }else{
        noValido.classList.remove('alert');
        return true;
    }
    
}

function encriptador(cadena) {

    let patrones = [[ "e" ,"enter"],["i" ,"imes"],["a" , "ai"],["o" , "ober"],[ "u" ,"ufat"]];
    let textoIngresado = cadena.toLowerCase();

    patrones.forEach( elem =>{
        if(textoIngresado.includes(elem[0])) {
            textoIngresado = textoIngresado.replaceAll(elem[0] ,elem[1]);
        }
    });
    return textoIngresado;
}

function desencriptador(cadena) {
    let patrones = [[ "e" ,"enter"],["i" ,"imes"],["a" , "ai"],["o" , "ober"],[ "u" ,"ufat"]];
    let textoIngresado = cadena.toLowerCase();

    patrones.forEach( elem =>{
        if(textoIngresado.includes(elem[1])) {
            textoIngresado = textoIngresado.replaceAll(elem[1] ,elem[0]);
        }
    });
    return textoIngresado;

}

function copiar() {
    let texto = document.querySelector('.resultado');
    texto.select();
    document.execCommand('copy');
    // alert('Texto copiado!!!');
}
