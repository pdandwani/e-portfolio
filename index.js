// document.getElementById("myP").style.visibility = "hidden";
let pages = document.getElementsByClassName('page');
//alert(pages.length);
var i = pages.length;
var pg = 0;
var ar = screen.width / screen.height;
var page = 1;
while (i--) {
    pages[i].classList.add("d-none");
    --i;
    pages[i].classList.remove("d-flex");
    pages[i].classList.add("d-none");
}
//alert(pages.length);
if (ar > 1) {
    let pages = document.getElementsByClassName('page');
    //alert(pages.length);
    pages[pg].classList.remove("d-none");
    pages[pg].classList.add("d-flex");
    pg++;
    pages[pg].classList.remove("d-none");

    //alert(pg);
}
else {
    let pages = document.getElementsByClassName('page');
    //alert(pages.length);
    if (pg % 2 === 0) {
        pages[pg].classList.remove("d-none");
        pages[pg].classList.add("d-flex");
    }
    else {
        pages[pg].classList.remove("d-none");
    }

}

function next() {
    //alert(page);
    let pages = document.getElementsByClassName('page');
    var ar = screen.width / screen.height;
    if (ar > 1) {
        page++;
        pages[page - 1].classList.add("d-none");
        pages[page - 2].classList.remove("d-flex");
        pages[page - 2].classList.add("d-none");
        if (page > 14)
            page = 0;

        pages[page].classList.remove("d-none");
        pages[page].classList.add("d-flex");
        page++;
        pages[page].classList.remove("d-none");
    }
    else {
        if (page % 2 === 0)
            pages[page - 1].classList.add("d-none");
        else {
            pages[page - 1].classList.remove("d-flex");
            pages[page - 1].classList.add("d-none");
        }

        if (page > 15)
            page = 0;

        if (page % 2 === 0) {
            pages[page].classList.remove("d-none");
            pages[page].classList.add("d-flex");

        }
        else {

            pages[page].classList.remove("d-none");
        }
        page++;
    }

}

function prev() {
    let pages = document.getElementsByClassName('page');
    //alert(page);
    var ar = screen.width / screen.height;
    if (ar > 1) {
        page = page - 2;
        pages[page + 2].classList.add("d-none");
        pages[page + 1].classList.remove("d-flex");
        pages[page + 1].classList.add("d-none");
        //page--;
        if (page <= 0) {
            page = 15;
        }
        pages[page].classList.remove("d-none");

        page--;
        pages[page].classList.remove("d-none");
        pages[page].classList.add("d-flex");
        page++;
    }
    else {
        if (page % 2 === 0) {

            pages[page - 1].classList.add("d-none");
        }
        else {
            pages[page - 1].classList.remove("d-flex");
            pages[page - 1].classList.add("d-none");
        }
        page--;
        if (page <= 0)
            page = 16;

        if (page % 2 == 0) {
            pages[page - 1].classList.remove("d-none");

        }
        else {

            pages[page - 1].classList.remove("d-none");
            pages[page - 1].classList.add("d-flex");
        }

    }

}
function goto(num) {
    var ar = screen.width / screen.height;
    if (ar > 1) {
        page++;
        pages[page - 1].classList.add("d-none");
        pages[page - 2].classList.remove("d-flex");
        pages[page - 2].classList.add("d-none");
        page = num;
        next();
    }
    else {
        if (page % 2 === 0)
            pages[page - 1].classList.add("d-none");
        else {
            pages[page - 1].classList.remove("d-flex");
            pages[page - 1].classList.add("d-none");
        }
        page = num + 1;
        next();
    }
}
function home() {
    if (ar > 1) {
        page++;
        pages[page - 1].classList.add("d-none");
        pages[page - 2].classList.remove("d-flex");
        pages[page - 2].classList.add("d-none");
        page = 14;
        next();
    }
    else {
        if (page % 2 === 0)
            pages[page - 1].classList.add("d-none");
        else {
            pages[page - 1].classList.remove("d-flex");
            pages[page - 1].classList.add("d-none");
        }
        page = 1;
        next();
    }
}
//if (ar < 1) {
//pages[1].remove("page");
