if (JSON.parse(localStorage.getItem("login"))) {
    console.log("entro")
    window.location.href = "/home.html"
} else {
    window.location.href = "/login.html"
}