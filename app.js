//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function iniciarDecodificador(){
    document.querySelector('.decodificador__botao__copy').style.visibility = 'hidden';
    document.getElementById('saida__texto').style.display = 'none';
}

iniciarDecodificador();

function exibirTextoCriptografado(tag, texto){
    let campo = document.getElementById(tag)
    campo.innerHTML = texto;
}

function criptografar(){
    
    document.querySelector('.decodificador__mensagem__saida').style.display = 'none';
    document.getElementById('saida__texto').style.display = 'block';

    let texto = document.getElementById('entrada__texto').value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    let matrizChaves = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];

    for (let i = 0; i < matrizChaves.length; i++){
        if(texto.includes(matrizChaves[i][0])) {
            texto = texto.replaceAll(matrizChaves[i][0], matrizChaves[i][1]);
            document.getElementById('entrada__texto').value = '';
            document.querySelector('.decodificador__botao__copy').style.visibility = 'visible';
        }
    }

    exibirTextoCriptografado('saida__texto', texto);

}

function descriptografar(){
       
    document.querySelector('.decodificador__mensagem__saida').style.display = 'none';
    document.getElementById('saida__texto').style.display = 'block';

    let texto = document.getElementById('entrada__texto').value;

    let matrizChaves = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];

    for (let i = 0; i < matrizChaves.length; i++){
        if(texto.includes(matrizChaves[i][1])) {
            texto = texto.replaceAll(matrizChaves[i][1], matrizChaves[i][0]);
            document.getElementById('entrada__texto').value = '';
            document.querySelector('.decodificador__botao__copy').style.visibility = 'visible';
        }
    }

    exibirTextoCriptografado('saida__texto', texto);

}

function copy(){
    let copia = document.getElementById('saida__texto')
    navigator.clipboard.writeText(copia.value);
    alert('Copiado!');
    location.reload();
}