var users = JSON.parse(localStorage.getItem("users"));


function signup() {    
    var uname = document.getElementById('uname').value;    
    var pass = document.getElementById('pass').value;  
    
    users = Object.assign(users, {[uname]: pass});
    
    console.log(users);
    
    localStorage.setItem("users", JSON.stringify(users));
    //alert(JSON.parse(localStorage.getItem("users")));
    //alert(localStorage.getItem("pass"));
    document.getElementById("signup").reset();
    alert("Account created successfully!");
    //alert(nm.value + "," + uname.value + "," + pass.value);  
}