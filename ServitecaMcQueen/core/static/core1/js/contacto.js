$('#contacto').validate({
    rules:{
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 40
        },
        apellido: {
            required: true,
            minlength: 3,
            maxlength: 40
        },
        email: {
            required: true,
            maxlength: 20
        },
        

    }
}

)