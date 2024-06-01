
const submitFunction = ()=>{
    if(!validarFormulario()){
        event.preventDefault();
    }else{
        event.preventDefault();
        alert(
            'Los datos enviados fueron: ' + '\n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de Estidio: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
}


document.getElementById('formulario').addEventListener('submit',submitFunction) //escucha el envio del evento del formulario


function validarFormulario() {

    //Esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]'); //selecciona todos los imputs de tipo texto
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // error + id con la primera letra en mayuscula
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'Este campo es requerido!')
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres!')
            validacionCorrecta = false
        }else{
            oculatarError(errorCampo)
        }
    })

    //Esto valida el campo email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)){
        oculatarError(errorEmail);
    }else{
        mostrarError(errorEmail,'Ingresa un mail valido!');
        validacionCorrecta = false
    }

    //validacion de edad
    const edad = document.getElementById('edad')
    let errorEdad = document.getElementById('errorEdad')

    if(edad.value < 18){
        validacionCorrecta = false
        mostrarError(errorEdad,'Debes ser mayor a 18 años para registrarte!');
    }else{
        oculatarError(errorEdad);
    }

    //Validacion de la actuvidad
    const actividad = document.getElementById('actividad')
    let errorActividad = document.getElementById('errorActividad')

    if(actividad.value == '' ){
        validacionCorrecta = false
        mostrarError(errorActividad,'Debes seleccionar una actividad!')
    }else{
        oculatarError(errorActividad)
    }

    //validacion nivel de estudio
    const nivelEstudio = document.getElementById('nivelEstudio')
    let errorNivelEstudio = document.getElementById('erroNivelEstudio')

    if(nivelEstudio.value == ''){
        validacionCorrecta = false
        mostrarError(errorNivelEstudio,'Debes seleccionar el nivel de estudio!')
    }else{
        oculatarError(errorNivelEstudio)
    }

    //Validar terminos y condiciones 
    const aceptoTerminos = document.getElementById('aceptoTerminos')
    let errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

    if(!aceptoTerminos.checked){
        validacionCorrecta = false
        mostrarError(errorAceptoTerminos,'Debes aceptar los terminos y condiciones!')
    }else{
        oculatarError(errorAceptoTerminos)
    }

    return validacionCorrecta; //retorna si el formulario completo es valido

}


const mostrarError = (elemento, mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const oculatarError = (elemento) =>{
    elemento.textContent = '';
    elemento.style.display = "none";
}


