lite = () => {
    document.getElementById("light").style.display = "none"
    document.getElementById("dark").style.display = "inline"
    document.getElementById("theme").href = "assets/css/light.css";
}
nite = () => {
    document.getElementById("dark").style.display = "none"
    document.getElementById("light").style.display = "inline"
    document.getElementById("theme").href = "assets/css/dark.css";
}