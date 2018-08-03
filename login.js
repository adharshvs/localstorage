var flag = 0;

function login() {
    var userName = document.getElementById('uname');
    var userPass = document.getElementById('pass');
    users = JSON.parse(localStorage.getItem("users"));    
    //alert(JSON.stringify(users));
    for(var user in users) {
        if(users.hasOwnProperty(user)) {
            var pass = users[user];
            if(userName.value == user && userPass.value == pass) {
                alert("Welcome, " + userName.value + ".");
                flag = 1;                
            }        
        } 
    }
    if(flag === 0) {
        alert("Credentials do not match.");
    }    
}