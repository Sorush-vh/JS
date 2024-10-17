i = 0
function f_scroll() {
    document.getElementById("paragraph1").style.display = "flex"
    document.getElementById("paragraph2").style.color = "black"
    document.getElementById("paragraph1").style.justifyContent = "center"
    document.getElementById("hider1").style.display = "none"
    document.getElementById("hider2").style.display = "block"
}
function f_scroll2() {
    document.getElementById("paragraph1").style.display = "none"
    document.getElementById("hider1").style.display = "block"
    document.getElementById("hider2").style.display = "none"
}
function copy_icon() {
    document.getElementById("copytext").innerHTML = "!کپی شد"
    document.getElementById("copytext").style.backgroundColor = "#fe6666"
    document.getElementById("copytext").style.color = "white"

}
function list2() {
    i = i + 1;
    if (i % 2 == 0) {
        document.getElementById("menubar").setAttribute("src", "../img/icons8-menu-96 (2).png")
        document.getElementById("listhover2b").style.display = "none"
    }
    else {
        document.getElementById("listhover2b").style.display = "block"
        document.getElementById("menubar").setAttribute("src", "../img/icons8-multiply-96 (1).png")
    }
}
i1 = 0
function moreorless1() {
    i1 = i1 + 1;
    if (i1 % 2 == 0) {
        document.getElementById("question1").style.color = "#1c7256"
        document.getElementById("answer1").style.textDecoration = "none"
        document.getElementById("answer1").style.display = "none"
        document.getElementById("iconz1").setAttribute("src", "../img/icons8-plus-math-96.png")
    }
    else {
        document.getElementById("question1").style.color = "#fe6666"
        document.getElementById("answer1").style.textDecoration = "underline"
        document.getElementById("answer1").style.display = "block"
        document.getElementById("iconz1").setAttribute("src", "../img/icons8-subtract-96.png")
    }

}
i2 = 0
function moreorless2() {
    i2 = i2 + 1;
    if (i2 % 2 == 0) {
        document.getElementById("question2").style.color = "#1c7256"
        document.getElementById("answer2").style.textDecoration = "none"
        document.getElementById("answer2").style.display = "none"
        document.getElementById("iconz2").setAttribute("src", "../img/icons8-plus-math-96.png")
    }
    else {
        document.getElementById("question2").style.color = "#fe6666"
        document.getElementById("answer2").style.textDecoration = "underline"
        document.getElementById("answer2").style.display = "block"
        document.getElementById("iconz2").setAttribute("src", "../img/icons8-subtract-96.png")
    }

}
i3 = 0
function moreorless3() {
    i3 = i3 + 1;
    if (i3 % 2 == 0) {
        document.getElementById("question3").style.color = "#1c7256"
        document.getElementById("answer3").style.textDecoration = "none"
        document.getElementById("answer3").style.display = "none"
        document.getElementById("iconz3").setAttribute("src", "../img/icons8-plus-math-96.png")
    }
    else {
        document.getElementById("question3").style.color = "#fe6666"
        document.getElementById("answer3").style.textDecoration = "underline"
        document.getElementById("answer3").style.display = "block"
        document.getElementById("iconz3").setAttribute("src", "../img/icons8-subtract-96.png")
    }

}
x = angular.module("app", [])
x.controller("name1", function ($scope) {
    $scope.fig1 = [{
        src: "img/large-kalanchoe-beharensis-pot-360x360.webp",
        title: " کالانکویه مخملی یک تنه ارتفاع 130 ",
        price1: "3,863,000 تومان ",
        price2: "2,897,250 تومان ",
        button: "خرید این گل"
    },
    {
        src: "img/euphorbia-inermis-concrete-potted-360x360.webp",
        title:" کاکتوس افوربیا اینرمیس   ",
        price1: "297,000 تومان ",
        price2: "252,450 تومان   ",
        button: "خرید این گل"
    },
    {
        src: "img/miniature-orchid-flower-768x768.jpg",
        title: " گلدان ارکیده مینیاتوری بی همتا ",
        price1: "1,092,000 تومان ",
        price2: "982,800 تومان ",
        button: "خرید این گل"
    },
    {
        src: "img/red-vriesea-rubra-360x360.jpg",
        title: "گیاه ویریزیا قرمز ",
        price1: " 756,000 تومان ",
        price2: "642,600 تومان ",
        button: "خرید این گل"
    }]
    $scope.fig2 = ""
})
