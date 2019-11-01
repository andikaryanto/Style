var isMenuToggled = true;
var allTables;

$(document).ready(function () {
    ancorActive();
    if (isMenuToggled)
        openNav();
    else
        closeNav();

    overideDtTable();
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

function overideDtTable() {
    allTables = document.querySelectorAll("table");
    overrideDtTableFilter();
    // overideDtTablePagination();
    overideDtTableShow();
}

function overideDtTableShow() {
    allTables.forEach(element => {
        if (element.id) {
            var allShow = document.querySelectorAll("select[name=" + element.id + "_length]");
            allShow.forEach(s => {
                s.setAttribute('style','width:50px;');
                s.classList.add("floating");
            })
        }
    })
}

$('select[name="table_id_length"]').on("change", function(){
    console.log(this);
})

function changeDtTablePrevNextIcon(tableid) {
    var elPrev = document.getElementById(tableid + "_previous");
    // console.log(elPrev);
    var aPrev = elPrev.childNodes[0];
    aPrev.innerText = "";
    var iPrev = document.createElement("i");
    iPrev.setAttribute("class", "fa fa-angle-double-left");
    aPrev.appendChild(iPrev);

    var elNext = document.getElementById(tableid + "_next");
    var aNext = elNext.childNodes[0];
    aNext.innerText = "";
    var iNext = document.createElement("i");
    iNext.setAttribute("class", "fa fa-angle-double-right");
    aNext.appendChild(iNext);
}

function overideDtTablePagination() {
    allTables.forEach(element => {
        if (element.id) {
            changeDtTablePrevNextIcon(element.id);
        }
    });
}

function overrideDtTableFilter() {
    allTables.forEach(element => {
        if (element.id) {
            var elDtFilter = document.getElementById(element.id + "_filter");
            var oldInput = elDtFilter.getElementsByTagName('input');
            var oldLabel = elDtFilter.getElementsByTagName('label');
            var searchText = oldLabel[0].innerText;
            var inputChild = document.createElement("div");
            var labelChild = document.createElement("label");
            inputChild.setAttribute('class', "form-label-group");
            oldInput[0].removeAttribute('class');
            oldInput[0].removeAttribute('placeholder');
            oldInput[0].setAttribute('class', 'form-control floating');
            oldInput[0].setAttribute('placeholder', searchText);
            labelChild.innerText = searchText;
            var newinput = oldInput[0];
            elDtFilter.removeChild(elDtFilter.getElementsByTagName('label')[0]);
            inputChild.appendChild(newinput);
            inputChild.appendChild(labelChild);
            elDtFilter.appendChild(inputChild);
        }
    });

}