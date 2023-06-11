function signUpBtnHandler(){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");
    var confirmPassword;

    if (username.value) {
        username.classList.remove("error");
        username.classList.add("success");
      } else {
        username.classList.remove("success");
        username.classList.add("error");
      }

      if (email.value) {
        email.classList.remove("error");
        email.classList.add("success");
      } else {
        email.classList.remove("success");
        email.classList.add("error");
      }

      if (password.value) {
        password.classList.remove("error");
        password.classList.add("success");
      } else {
        password.classList.remove("success");
        password.classList.add("error");
      }

      if (confirmPassword.value) {
        confirmPassword.classList.remove("error");
        confirmPassword.classList.add("success");
      } else {
        confirmPassword.classList.remove("success");
        confirmPassword.classList.add("error");
      }

}