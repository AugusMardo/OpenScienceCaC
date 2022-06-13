(function(){
    var formulario=document.getElementsByName('formulario')[0]
    elementos=formulario.elements
    var noname = document.getElementById('noname');
    var nolastname = document.getElementById('nolastname');
    var noocupation = document.getElementById('noocupation');
    var noemail = document.getElementById('noemail');
    var differentemail = document.getElementById('differentemail');
    var nophone = document.getElementById('nophone');
    var noarticle = document.getElementById('noarticle');
    var noexplanation = document.getElementById('noexplanation');
    boton=document.getElementsByName('btn')



    var validateName=function(e){
        if(formulario.name.value == 0){
            noname.innerText=("A name is required")
            e.preventDefault()
        }
        else{
            noname.innerText=null
        }
    }
    var validateLastName=function(e){
        if(formulario.last_name.value == 0){
            nolastname.innerText=("A last name is required")
            e.preventDefault()
        }
        else{
            nolastname.innerText=null
        }
    }
    var validateOcupation=function(e){
        if(formulario.ocupation.value == 0){
            noocupation.innerText=("An ocupation is required")
            e.preventDefault()
        }
        else{
            noocupation.innerText=null
        }
    }
    var validateEmail=function(e){
        if(formulario.email.value == 0){
            noemail.innerText=("A valid email is required")
            e.preventDefault()
        }
        else{
            noemail.innerText=null
        }
    }
    var reconfirmEmail=function(e){
        if (formulario.confirm_email.value!=formulario.email.value){
            differentemail.innerText=("Emails do not match")
            e.preventDefault()
        }
        else{
            differentemail.innerText=null
        }

    }
    var validatePhone=function(e){
        if(formulario.phone.value == 0){
            nophone.innerText=("A phone is required")
            e.preventDefault()
        }
        else{
            nophone.innerText=null
        }
    }
    var validateRadio=function(e){
        if(formulario.article_type[0].checked==true || formulario.article_type[1].checked==true || formulario.article_type[2].checked==true){
            noarticle.innerText=null
        }
        else {
            noarticle.innerText=("Must select one")
            e.preventDefault()
        }
    }
    var validateExplanation=function(e){
        if(formulario.introduction.value == 0){
            noexplanation.innerText=("A brief explanation or introduction is required")
            e.preventDefault()
        }
        else{
            noexplanation.innerText=null
        }
    }
    

    var validar = function(e){
        validateName(e)
        validateLastName(e)
        validateOcupation(e)
        validateEmail(e)
        reconfirmEmail(e)
        validatePhone(e)
        validateRadio(e)
        validateExplanation(e)
        
    };
    formulario.addEventListener('submit', validar);

}())