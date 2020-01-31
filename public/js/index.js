window.addEventListener('load', init);

function init() {
    document.getElementById("registerSub").addEventListener('click', register);
}

function register(e) {


    e.preventDefault();

    var name = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var user = {
        name,
        email,
        password
    };

    var pr = fetch('http://localhost:1234/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }

    });

    pr.then(response => {
        response.json().then(data => {
            console.log(data);
            alert("Registered Successfully..")
        }).catch(err => console.log("error", err));
    }).catch(error => console.log("error", error));

}

function login(e) {

    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var user = {
        email,
        password
    };

    var pr = fetch('http://localhost:1234/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }

    });

    pr.then(response => {
        response.json().then(data => {
            console.log(data);
            alert("Login Successfull")
        }).catch(err => {
            console.log("error :", err)
            alert("Login Unsuccessfull")
        });
    }).catch(error => {
        console.log("error :", error)
        alert("login Unsuccessfull")
    });

}