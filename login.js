const inputs = document.querySelectorAll(".input");
const submit_btn = document.querySelector(`input[type="submit"]`);
const faceID_button = document.querySelector('.faceID button');
const faceID_is_varified = faceID_button.disabled=true;


//When input is focus
function When_to_type(){
    let parent = this.parentNode;
    parent.classList.add("focus");
    }
 // when input loses its focus   
    function When_not_typing(){
    let parent = this.parentNode;
    if(this.value == ""){
    parent.classList.remove("focus");
    }
    }

//allow the login button when all input is not empty
function ready_to_submit() {
        if(inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != "" && faceID_is_varified){
            submit_btn.disabled=false;
            }
}

setInterval(ready_to_submit,10)

    inputs.forEach(input => {
    input.addEventListener("focus", When_to_type);
    input.addEventListener("blur", When_not_typing);
    });
