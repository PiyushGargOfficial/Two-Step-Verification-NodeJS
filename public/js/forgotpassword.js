window.addEventListener('load', init3);

function init3() {
    document.getElementById("forgotPass").addEventListener('click', sendMail);
    document.getElementById("verify").addEventListener('click', verifyOTP);
    document.getElementById("reset").addEventListener('click', resetPass);
}


function sendMail(e) {
    e.preventDefault();

    var email = document.getElementById('forgetEmail').value;

    var user = {
        email
    };

    var pr = fetch('http://localhost:1234/api/forgetPass', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }

    });

    pr.then(response => {
        response.json().then(data => {
            if (data.msg == "OTP sent") {
                alert("Mail Sent..");
                document.querySelector(".forgot").style.display = "none";
                document.querySelector(".verify").style.display = "block";
            }
        }).catch(err => console.log("err", err));
    }).catch(error => console.log("error", error));
}


function verifyOTP(e) {
    e.preventDefault();

    var otp = document.getElementById('otp').value;
    var email = document.getElementById('forgetEmail').value;

    var user = {
        otp,
        email
    };

    var pr = fetch('http://localhost:1234/api/verify', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }

    });

    pr.then(response => {
        response.json().then(data => {
            console.log(data);
            if (data.msg == "User Verified") {
                alert("User Verified..")
                document.querySelector(".verify").style.display = "none";
                document.querySelector(".newPass").style.display = "block";
            } else {
                alert("OTP didnt match..");
            }
        }).catch(err => console.log("err", err));
    }).catch(error => console.log("error", error));
}

function resetPass(e) {
    e.preventDefault();

    var password = document.getElementById('newPass').value;
    var email = document.getElementById('forgetEmail').value;

    var user = {
        password,
        email
    };

    var pr = fetch('http://localhost:1234/api/reset', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }

    });

    pr.then(response => {
        response.json().then(data => {
            console.log(data);
            if (data.msg == "Password Changed") {
                alert("Password Changed...")
                location.href = "login.html"
            } else {
                alert("Try again..");
            }
        }).catch(err => console.log("err", err));
    }).catch(error => console.log("error", error));
}