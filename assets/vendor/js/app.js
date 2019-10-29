var isMenuToggled = true;

$(document).ready(function () {
    if (isMenuToggled)
        openNav();
})

function openNav() {
    document.getElementById("sideNav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    isMenuToggled = true;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sideNav").style.width = "50px";
    document.getElementById("main").style.marginLeft = "50px";
    isMenuToggled = false;
}


$("#menu").on("click", function () {
    console.log("aaa");
    if (isMenuToggled){
        closeNav();
    }
    else {
        openNav();
    }
});

