let themeButton
window.addEventListener("DOMContentLoaded", domLoaded)

function domLoaded() {
    console.log("start")
    themeButton = document.getElementById("themeButton")
    themeButton.addEventListener("click",changeTheme)
    if(localStorage.getItem("theme") == "lightMode"){
        loadTheme()
    }
}

function loadTheme() {
            let page = document.getElementById("page")
            page.classList.toggle("darkMode")
            page.classList.toggle("lightMode")
        }

function changeTheme(event){
    console.log("function")
    let body = event.target.parentNode
    body.parentNode.classList.toggle("darkMode")
    body.parentNode.classList.toggle("lightMode")

    if(body.parentNode.className == "darkMode"){
        localStorage.setItem("theme","darkMode")
    }
    else{
        localStorage.setItem("theme","lightMode")
    }
}