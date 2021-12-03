function parserForm(aForm){
    //Esto nos ayuda basados en el Schema
    return {
        "type": aForm.type.value,
        "gender": aForm.gender.value,
        "name": {
            "title": aForm.title.value,
            "first": aForm.fname.value,
            "last": aForm.lname.value
        },
        "address": aForm.address.value,
        "email": aForm.email.value,
        "phone": aForm.phone.value,
        "cell": aForm.cellphone.value,
        "id":{
            "type": aForm.document_type.value,
            "value": aForm.document.value
        },
        "picture":{
            "thumbnail": `https://via.placeholder.com/500x500?text=${aForm.fname.value}`
        }

    }
}

module.exports = {
    parserForm
}