let popup = document.getElementById("popup");


function closePopup(){
    popup.style.display="none";
}

document.querySelectorAll("#aufgabe1, #aufgabe2, #aufgabe3, #aufgabe4, #aufgabe5, #aufgabe6, #aufgabe7, #aufgabe8").forEach((ele) => {
    ele.addEventListener("click", () => {
        popup.style.display="flex";
        ele.style.backgroundColor = "#efefef";
    ele.style.cursor= "not-allowed";
        
    });
});
