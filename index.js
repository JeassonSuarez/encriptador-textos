import { llaves } from "./modelo.js";
const $d = document;

const $btnEncriptar =document.querySelector('.btn-encriptar');
const $btnDesencriptar = $d.querySelector('.btn-desencriptar');
const $btnCopiar = $d.querySelector('.btn-copiar');
const $conRespuesta = $d.querySelector('.con-resultado')
const $sinRespuesta = $d.querySelector('.sin-resultado')
const $campoRespuesta = $d.querySelector('.texto-res-p')

const i = $d.querySelector('.form-input-texto');

// i.addEventListener('input', () => {
//   i.style.width = `${i.value.length}ch`;
// });

$btnEncriptar.addEventListener('click', (e)=>{
    e.preventDefault();
    traerTexto('encriptar')
})

$btnDesencriptar.addEventListener('click', (e)=>{
    e.preventDefault();
    traerTexto('desencriptar')
})

const traerTexto = (tarea) => {
    let $input = $d.querySelector('.form-input-texto').value;
    tarea==='encriptar' && encriptar($input)
    tarea==='desencriptar' && desencriptar($input)
}

const encriptar = ($input) => {
    for (const key in llaves) {
        console.log(key, llaves[key]);
        $input=$input.replaceAll(key, llaves[key])
    }
    console.log($input);
    mostrarResultado($input)
}

const desencriptar = ($input) => {
    for (const key in llaves) {
        console.log(key, llaves[key]);
        $input=$input.replaceAll(llaves[key], key)
    }
    console.log($input);
    mostrarResultado($input)
}

const mostrarResultado = (respuesta) => {
    $sinRespuesta.style.display='none';
    $conRespuesta.style.display='flex';
    $campoRespuesta.textContent=respuesta
    copiar();
}

const copiar = () => {
    $btnCopiar.addEventListener('click', () => {
        const texto = document.querySelector('.texto-res-p');
        const input = document.createElement('input');
        input.value = texto.textContent;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      });
}




