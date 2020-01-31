window.addEventListener('load', init2);

function init2() {
    document.getElementById("loginSub").addEventListener('click', login);
}

function login(e) {

    e.preventDefault();

    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

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
        }).catch(err => console.log("error :", err));
    }).catch(error => console.log("error :", error));

}