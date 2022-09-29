const form = document.querySelector('form');
const inputs = document.querySelectorAll(".input");
const submit_btn = document.querySelector(`input[type="submit"]`);
const faceID_button = document.querySelector('.faceID button');
const faceID_is_varified = faceID_button.disabled;
const notification_bar  = document.querySelector('.notification_bar');



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
        if(inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != "" && faceID_is_varified==true){
            submit_btn.disabled=false;
            }else{
                submit_btn.disabled=true;
            }
}


    inputs.forEach(input => {
    input.addEventListener("focus", When_to_type);
    input.addEventListener("blur", When_not_typing);
    input.addEventListener("keyup", ready_to_submit);
    });

//Alert if system has internet connection
const offline = `<p class="text-white font-bold text-center">Cannot login. Please Check your internet Connection </p>`;
const online = `<p class="text-white font-bold text-center">Signing in... Connecting to server</p>`

 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let notification;
    let notification_content;
    notification = document.createElement('div')
    notification_content = document.createElement('div')
    notification.setAttribute('class','notification p-2 mt-2 rounded-xl')

    if (window.navigator.onLine) {
       notification.classList.add('bg-green-600')
       notification.classList.add('show')
       notification_content.innerHTML = online;
       notification.appendChild(notification_content)
       notification_bar.appendChild(notification)
       inputs.forEach(input => {
        input.disabled=true;
        input.parentNode.style.borderColor= '#bdbbd3';
        input.parentNode.style.color= '#bdbbd3';
       });
       submit_btn.disabled= true;
    } else {
        notification.classList.add('bg-red-600')
        notification.classList.add('show')
        notification_content.innerHTML = offline;
        notification.appendChild(notification_content)
        notification_bar.appendChild(notification)
        setTimeout(()=>{
            notification_bar.removeChild(notification)
        },1200)
    }
 
 })