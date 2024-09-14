let nameerror = document.getElementById("nameerror");
let athliteerror = document.getElementById("pswderror");
let login = document.getElementById("login");
let heading = document.getElementById("heading");
let list = document.getElementById("list");

let users = JSON.parse(localStorage.getItem('users')) || [];

function Submited() {
    let name = document.getElementById("name").value.trim();
    let athlite = document.getElementById("athlite").value.trim();

    name = decodeURIComponent(name);
    athlite = decodeURIComponent(athlite);
    
    console.log(name);

    const namecheck = /^[a-zA-Z\s]+$/;
    const athlitecheck = /^[a-zA-Z\s]+$/;


    if (name.length === 0 || !namecheck.test(name)) {
        if (name.length === 0) {
            nameerror.style.display = "block";
        } else if (!namecheck.test(name)) {
            document.getElementById("name").value = "Enter a valid name";
        }
        setTimeout(() => {
            document.getElementById("name").value = "";
            nameerror.style.display = "none";
        }, 2000);
    } 
   
    else if (athlite.length === 0 || !athlitecheck.test(athlite)) {
        if (athlite.length === 0) {
            athliteerror.style.display = "block";
        } else if (!athlitecheck.test(athlite)) {
            document.getElementById("athlite").value = "Enter a valid name";
        }
        setTimeout(() => {
            document.getElementById("athlite").value = "";
            athliteerror.style.display = "none";
        }, 3000);
    } 
   
    else {
        heading.style.width = "100vw";
        heading.style.height = "100vh";
        login.style.display = "none";
        list.style.display = "none";

        const info = {
            username: name,
            athlitename: athlite
        };
        users.push(info);

        localStorage.setItem('users', JSON.stringify(users));

        setTimeout(() => {
            document.getElementById("name").value = "";
            document.getElementById("athlite").value = "";
        }, 100);
    }
}
