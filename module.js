export function validateForm(formId, userId, passId) {
    let form = document.getElementById(formId);
       let username = document.getElementById(userId);
    let password = document.getElementById(passId);
            let fullname = document.getElementById("fullname");
let confirmpassword = document.getElementById("confirmpassword");


    let pattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@#$!%*?&]).{8,16}$/;


 username.onblur = username.oninput = () => {
let name = username.value.trim();
              if (name === '') {
        document.getElementById("usernameWarning").innerText = "User Name is required!";
            username.classList.add("error");
 } else if (!/^[a-zA-Z]+$/.test(name)) {
     document.getElementById("usernameWarning").innerText = "Enter a valid username letters only.";
            username.classList.add("error");
        } else {
  document.getElementById("usernameWarning").innerText = '';
            username.classList.remove("error");
        }
    };


 fullname.onblur = fullname.oninput = () => {
        let fullName = fullname.value.trim();
          if (fullName === '') {
            document.getElementById("fullnameWarning").innerText = "Full Name is required!";
               fullname.classList.add("error");
        } else {
            document.getElementById("fullnameWarning").innerText = '';
            fullname.classList.remove("error");
        }
    };

 
    password.onblur = password.oninput = () => {
        let pwd = password.value.trim();
        if (pwd === '') {
     document.getElementById("passwordWarning").innerText = "Password is required!";
                password.classList.add("error");
           } else if (!pattern.test(pwd)) {
            document.getElementById("passwordWarning").innerText = "Password must be 8-16 characters, with at least one uppercase, one lowercase, one number, and one special character.";
            password.classList.add("error");
        } else {
                document.getElementById("passwordWarning").innerText = '';
            password.classList.remove("error");
        }
    };


    confirmpassword.onblur = confirmpassword.oninput = () => {
        let confirmPassword = confirmpassword.value.trim();
        if (confirmPassword !== password.value.trim()) {
                  document.getElementById("confirmPasswordWarning").innerText = "Passwords do not match.";
            confirmpassword.classList.add("error");
        } else {
            document.getElementById("confirmPasswordWarning").innerText = '';
            confirmpassword.classList.remove("error");
        }
    };

 form.addEventListener("submit", (event) => {
        let name = username.value.trim();
        let pwd = password.value.trim();
        let fullName = fullname.value.trim();
        let confirmPassword = confirmpassword.value.trim();

 
if (name === '' || pwd === '' || fullName === '' || confirmPassword === '') {
                 event.preventDefault();
            alert("Please fill in all the required fields correctly!");
        }


 if (pwd !== '' && !pattern.test(pwd)) {
            event.preventDefault();
            alert("Password must be 8-16 characters, with at least one uppercase, one lowercase, one number, and one special character.");
        }


 if (confirmPassword !== pwd) {
            event.preventDefault();
            alert("Passwords do not match.");
        }
    });
}