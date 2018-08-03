function login() {
    var userName = document.getElementById('uname').value;
    var userPass = document.getElementById('pass').value;
    if(!localStorage.hasOwnProperty(userName)) {
        alert("No such account exists");
    } else if(localStorage.getItem(userName) == userPass) {
        alert("Welcome, " + userName);
    } else {
        alert("Password is wrong.");
    }     
}