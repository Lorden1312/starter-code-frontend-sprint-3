// Get the input fields

//var password = document.querySelector(".password");
//var phone = document.querySelector('.phone');
//var name = document.querySelector('.name');

// Get the error elements

//var errorPassword = document.getElementById("errorPassword");
//var errorName = document.getElementById('errorName');
//var errorPhone = document.getElementById('errorPhone');


// Exercise 9

const form = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input ')

const expresiones = {
    password: /^.{4,8}$/, // de 4 a 8 numeros
    phone: /^\d{7,14}$/,  // de 7 a 14 numeros
    name: /^[a-zA-Z]+$/, // Only words are allowed
    lastName: /^[a-zA-Z]+$/, // Only words are allowed
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // email form required
}


const validarFormulario = (e) => {

    const value = e.target.value;

    switch (e.target.name) { //Accedemos al name de cada input
        case "FirstName":

            if (!value) {

                document.getElementById('grupo_FirstName').classList.add('formulario__grupo-incorrecto');
                
                document.querySelector('.formulario__camps-error').classList.add('formulario__mensajeError-activo');
            } 
            else if (value.length < 3) {

                document.getElementById('grupo_FirstName').classList.add('formulario__grupo-incorrecto');
                document.querySelector('.formulario__mesTres-error').classList.add('formulario__mensajeError-activo');

            } 
            else if (!expresiones.name.test(value)) {
                document.getElementById('grupo_FirstName').classList.add('formulario__grupo-incorrecto');
                document.querySelector('.formulario__lletres-error').classList.add('formulario__mensajeError-activo');
            } 
            else {
                document.querySelector('.formulario__camps-error').classList.remove('formulario__mensajeError-activo');
                document.querySelector('.formulario__lletres-error').classList.remove('formulario__mensajeError-activo');
                document.getElementById('grupo_FirstName').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo_FirstName').classList.add('formulario__grupo-correcto');
                document.querySelector('.formulario__mesTres-error').classList.remove('formulario__mensajeError-activo');
                
            }

            break;

        case "Email":

            if (!value) {

                document.getElementById('grupo_Email').classList.add('formulario__grupo-incorrecto');
                
                document.querySelector('.formulario__camps-error').classList.add('formulario__mensajeError-activo');
            } 
            else if (value.length < 3) {

                document.getElementById('grupo_Email').classList.add('formulario__grupo-incorrecto');
                document.querySelector('.formulario__mesTresEmail-error').classList.add('formulario__mensajeError-activo');

            }
            else if (!expresiones.email.test(value)) {
                document.getElementById('grupo_Email').classList.add('formulario__grupo-incorrecto');
                document.querySelector('.formulario__email-error').classList.add('formulario__mensajeError-activo');
            }
            else {
                document.querySelector('.formulario__campsEmail-error').classList.remove('formulario__mensajeError-activo');
                document.querySelector('.formulario__email-error').classList.remove('formulario__mensajeError-activo');
                document.getElementById('grupo_Email').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo_Email').classList.add('formulario__grupo-correcto');
                document.querySelector('.formulario__mesTresEmail-error').classList.remove('formulario__mensajeError-activo');
                
            } 

            break;

        case "Address":

            if (!value) {

                document.getElementById('grupo_Address').classList.add('formulario__grupo-incorrecto');
                
                document.querySelector('.formulario__campsAddress-error').classList.add('formulario__mensajeError-activo');
            } 
            else if (value.length < 3) {

                document.getElementById('grupo_Address').classList.add('formulario__grupo-incorrecto');
                document.querySelector('.formulario__mesTresAdress-error').classList.add('formulario__mensajeError-activo');

            }
            else {
                document.querySelector('.formulario__campsAddress-error').classList.remove('formulario__mensajeError-activo');
                document.querySelector('.formulario__email-error').classList.remove('formulario__mensajeError-activo');
                document.getElementById('grupo_Address').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo_Address').classList.add('formulario__grupo-correcto');
                document.querySelector('.formulario__mesTresAddress-error').classList.remove('formulario__mensajeError-activo');
                
            } 

            break;

        case "LastName":

            if (!value) {

                document.getElementById('grupo_LastName').classList.add('formulario__grupo-incorrecto');
                
                document.querySelector('.formulario__camps-error').classList.add('formulario__mensajeError-activo');
            } 
            else if (value.length < 3) {

                document.getElementById('grupo_LastName').classList.add('formulario__grupo-incorrecto');
                document.querySelector('.formulario__mesTresLastName-error').classList.add('formulario__mensajeError-activo');

            } 
            else if (!expresiones.lastName.test(value)) {
                document.getElementById('grupo_LastName').classList.add('formulario__grupo-incorrecto');
                document.querySelector('.formulario__lletresLastName-error').classList.add('formulario__mensajeError-activo');
            } 
            else {
                document.querySelector('.formulario__campsLastName-error').classList.remove('formulario__mensajeError-activo');
                document.querySelector('.formulario__lletresLastName-error').classList.remove('formulario__mensajeError-activo');
                document.getElementById('grupo_LastName').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo_LastName').classList.add('formulario__grupo-correcto');
                document.querySelector('.formulario__mesTresLastName-error').classList.remove('formulario__mensajeError-activo');
                
            }

            break;

        case "password":
            if (!value) {

                document.getElementById('grupo_Password').classList.add('formulario__grupo-incorrecto');
                
                document.querySelector('.formulario__campsPassword-error').classList.add('formulario__mensajeError-activo');
            } 
            else if (value.length < 3) {

                document.getElementById('grupo_Password').classList.add('formulario__grupo-incorrecto');
                document.querySelector('.formulario__mesTresPassword-error').classList.add('formulario__mensajeError-activo');

            }
            else if (!expresiones.password.test(value)) {
                document.getElementById('grupo_Password').classList.add('formulario__grupo-incorrecto');
                document.querySelector('.formulario__password-error').classList.add('formulario__mensajeError-activo');
            }
            else {
                document.querySelector('.formulario__campsPassword-error').classList.remove('formulario__mensajeError-activo');
                document.querySelector('.formulario__password-error').classList.remove('formulario__mensajeError-activo');
                document.getElementById('grupo_Password').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo_Password').classList.add('formulario__grupo-correcto');
                document.querySelector('.formulario__mesTresPassword-error').classList.remove('formulario__mensajeError-activo');
                
            } 
            break;

        case "PhoneNumber":
            if (!value) {

                document.getElementById('grupo_PhoneNumber').classList.add('formulario__grupo-incorrecto');
                
                document.querySelector('.formulario__campsPhoneNumber-error').classList.add('formulario__mensajeError-activo');
            } 
            else if (value.length < 3) {

                document.getElementById('grupo_PhoneNumber').classList.add('formulario__grupo-incorrecto');
                document.querySelector('.formulario__mesTresPhoneNumber-error').classList.add('formulario__mensajeError-activo');

            }
            else if (!expresiones.phone.test(value)) {
                document.getElementById('grupo_PhoneNumber').classList.add('formulario__grupo-incorrecto');
                document.querySelector('.formulario__PhoneNumber-error').classList.add('formulario__mensajeError-activo');
            }
            else {
                document.querySelector('.formulario__campsPhoneNumber-error').classList.remove('formulario__mensajeError-activo');
                document.querySelector('.formulario__PhoneNumber-error').classList.remove('formulario__mensajeError-activo');
                document.getElementById('grupo_PhoneNumber').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo_PhoneNumber').classList.add('formulario__grupo-correcto');
                document.querySelector('.formulario__mesTresPhoneNumber-error').classList.remove('formulario__mensajeError-activo');
                
            } 

            break;
    }
    ;
}

    inputs.forEach((input) => {

        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    });

