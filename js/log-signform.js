document.addEventListener('DOMContentLoaded', function (){

    const form = document.getElementById('mainForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passConfirm = document.getElementById('passConfirm');
    // let mailMsg = document.getElementById('mailMsg');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        checkInputs();
    })


    email.addEventListener('input', () => {
        validateField(email, isEmail(email.value.trim()), 'Not a valid email');
    });


    password.addEventListener('input', () => {
        validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');
        validateField(passConfirm, passConfirm.value.trim() == password.value.trim(), 'Passwords must match');
    });

    passConfirm.addEventListener('input', () => {
        validateField(passConfirm, passConfirm.value.trim() == password.value.trim(), 'Passwords must match');
    });

    function checkInputs(){
        let isValid = true;
        let count = 0;
        validateField(email, isEmail(email.value.trim()), 'Not a valid email');
        validateField(password, password.value.trim().length >= 8, 'Password must be at least 8 characters');
        validateField(passConfirm, passConfirm.value.trim() == password.value.trim() && passConfirm.value.trim().length != 0, 'Passwords must match');

        document.querySelectorAll('.form-row').forEach((control) => {
            if(control.classList.contains('error')){
                isValid = false;
                count++;
            }

        });

        if(count != 0){
            // localStorage.setItem("auth", 1);
            // form.submit();
            // console.log("nay");
        }
        else{
            localStorage.setItem("auth", 1);
            form.submit();
            // console.log("yay");
        }

        return isValid;

        
    }

    function validateField(input, condition, errorMessage){
        if(condition){
            setSuccess(input);
        }
        else{
            setError(input, errorMessage);
        }
    }

    function setSuccess(input){
        const formRow = input.parentElement;
        const icon = formRow.querySelector("i");
        icon.className = 'tick-icon';
        formRow.className = 'form-row'; //Resets the name so that checkInputs loop doesnt tag the error
    }

    function setError(input, message){
        const formRow = input.parentElement;
        const icon = formRow.querySelector("i");
        icon.className = 'cross-icon error';
        input.placeholder = message;
        formRow.className = 'form-row error'; //Allows the checkInputs loop to catch the error
        // errorMsg.textContent = message;

    }

    function isEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    }

    // function isPass(pass){
    //     return .test(pass);
    // }


});