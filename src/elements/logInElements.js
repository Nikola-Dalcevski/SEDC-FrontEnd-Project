import $ from 'jquery'

export const logInForm = $("#logInForm");
export const logInBtn = $("#logBtn");
export const logInEmail = $("#email");
export const logInPassword = $("#pass");
export const register = $("#reg");

export  function registerElements(){
    return {
        regFirstName : $("#name"),
        regLastName : $("#lastName"),
        regEmail : $("#regEmail"),
        regPassword : $("#password"),
        regConfirm : $("#confirm"),
        regForm : $("#registerForm"),
        regButton : $("#regButton"),
    } 
}

// export const regFirstName = $("#name");
//     export const regLastName = $("#lastName");
//     export const regEmail = $("#regEmail");
//     export const regPassword = $("#refPassword");
//     export const regConfirm = $("#confirm");
//     export const regForm = $("#registerForm");
//     export const regButton = $("#regButton");