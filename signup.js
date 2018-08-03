function signup() {     
    var uname = document.getElementById('uname').value;    
    var pass = document.getElementById('pass').value;    
    localStorage.setItem(uname, pass);
    
    document.getElementById("signup").reset();
    alert("Account created successfully!");    
}