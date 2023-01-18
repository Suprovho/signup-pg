var exclamation = document.getElementsByClassName("error");
var form = document.getElementById("form");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var formError = document.getElementsByClassName("form-error");
var input = document.getElementsByTagName("input");


/*validation*/
function formValidation(event){
     /*for loop for all input fields except submit input, so it is 4*/

     for (i = 0; i < 4; i++){
        /*clear the form*/
        input[i].classList.remove("error"); //this remove the error msg..
        formError[i].style.display= "none"; 

           /*email validation*/
      if (!email.validity.valid) {
        formError[2].style.display = "block";
        email.classList.add("error");  //class list add error msg..
        event.preventDefault();   
        /*The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

        For example, this can be useful when:
        
        Clicking on a "Submit" button, prevent it from submitting a form
        Clicking on a link, prevent the link from following the URL
        */
      }

         /*validation of other fields*/
         if((input.type != "email" || input.type != "submit") && input[i].value == ""){
            formError[i].style.display = "block";
            input[i].classList.add("error");
            event.preventDefault();
            }
     }
}
/*event listener on button, call the formValidation function*/
form.addEventListener("submit",formValidation,false)
