function loginUser() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let error = document.getElementById("error");

    // simple static login check
    if (user === "admin" && pass === "admin") {
        window.location.href = "pages/dashboard.html";
        return false;
    } else {
        error.innerText = "Invalid username or password!";
        return false;
    }
}