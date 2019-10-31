var isMenuToggled = true;

$(document).ready(function () {
    ancorActive();
    if (isMenuToggled)
        openNav();
    else
        closeNav();
})

function openNav() {
    document.getElementById("sideNav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    isMenuToggled = true;
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sideNav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    isMenuToggled = false;
}

function ancorActive() {
    var expandeAncdor = document.querySelectorAll("a[aria-expanded='true']");

    expandeAncdor.forEach(a => {
        a.setAttribute("class", "active");
    });
}

$("#menu").on("click", function () {
    if (isMenuToggled) {
        closeNav();
    }
    else {
        openNav();
    }
});