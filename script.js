const textArea = document.querySelector(".Text-area");
const mensaje = document.querySelector(".Mensaje");

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

function btnEncriptar(){
    const textoEncriptado = Encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function Encriptar(stringEncriptado){
    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < codigoMatriz.length; i++){
        if(stringEncriptado.includes(codigoMatriz[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(codigoMatriz[i][0], codigoMatriz[i][1])
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = Desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function Desencriptar(stringDesencriptado){
    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < codigoMatriz.length; i++){
        if(stringDesencriptado.includes(codigoMatriz[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(codigoMatriz[i][1], codigoMatriz[i][0])
        }
    }
    return stringDesencriptado;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")

}