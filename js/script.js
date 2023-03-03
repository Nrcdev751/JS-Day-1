
document.getElementById("zoomed").style.display="none";
document.getElementById("zoom").addEventListener("click",(zooming));

var pic1src = document.getElementById("pic1");
var pic2src = document.getElementById("pic2");
var pic3src = document.getElementById("pic3");

document.getElementById("pic1").addEventListener("click",(change1));
document.getElementById("pic2").addEventListener("click",(change2));
document.getElementById("pic3").addEventListener("click",(change3));

function zooming() {
    document.getElementById("zoomed").style.display="flex";
}
document.getElementById("icon-close").addEventListener("click",(close));

function close() {
    document.getElementById("zoomed").style.display="none";
}

function change1() {
    document.getElementById("picB").src = "https://images.unsplash.com/photo-1636956078539-c9fb9e51bf12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    document.getElementById("picA").src = "https://images.unsplash.com/photo-1636956078539-c9fb9e51bf12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
    pic1src.classList.add("dark");
    pic2src.classList.remove("dark");
    pic3src.classList.remove("dark");
}
function change2() {
    document.getElementById("picB").src = "https://images.unsplash.com/photo-1629459347138-b34fcc7603cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80";
    document.getElementById("picA").src = "https://images.unsplash.com/photo-1629459347138-b34fcc7603cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80";
    pic1src.classList.remove("dark");
    pic2src.classList.add("dark");
    pic3src.classList.remove("dark");
}
function change3() {
    document.getElementById("picB").src = "https://images.unsplash.com/photo-1627843240043-aa499ed215e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
    document.getElementById("picA").src = "https://images.unsplash.com/photo-1627843240043-aa499ed215e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
    pic1src.classList.remove("dark");
    pic2src.classList.remove("dark");
    pic3src.classList.add("dark");
}

