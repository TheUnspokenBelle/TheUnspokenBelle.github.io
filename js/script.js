var header = document.querySelector("#app-header");

window.onscroll = function () { headerBoxShadow() };

headerBoxShadow = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        header.style.boxShadow = 'rgba(0, 0, 0, 0.6) 0px 2px 5px 0px';
    } else {
        header.style.boxShadow = 'none';
    }
}

$(window).on('beforeunload', function () {
    $('body').hide();
    $(window).scrollTop(0);
});

function readMore1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("readMore1");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        readLess2();
        readLess3();
    }
}

function readLess1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("readMore1");

    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
}

function readMore2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("readMore2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        readLess1();
        readLess3();
    }
}

function readLess2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("readMore2");

    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
}

function readMore3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("readMore3");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        readLess1();
        readLess2();
    }
}

function readLess3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("readMore3");

    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
}
