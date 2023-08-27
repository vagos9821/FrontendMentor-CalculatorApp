const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const times = document.getElementById("times")
const division = document.getElementById("division")
const dot = document.getElementById("dot")
const del = document.getElementById("delete")
const reset = document.getElementById("reset")
const equal = document.getElementById("equal")

const whiteButtons = document.querySelectorAll(".wht-btns")

const result = document.getElementById("result-screen")

const numbers = document.getElementsByClassName("numbers")

const theme = document.getElementById("themeRange")
    // =-=-==-=-=--=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=

function btn1() {
    result.value = result.value + one.innerHTML
}

function btn2() {
    result.value = result.value + two.innerHTML
}

function btn3() {
    result.value = result.value + three.innerHTML
}

function btn4() {
    result.value = result.value + four.innerHTML
}

function btn5() {
    result.value = result.value + five.innerHTML
}

function btn6() {
    result.value = result.value + six.innerHTML
}

function btn7() {
    result.value = result.value + seven.innerHTML
}

function btn8() {
    result.value = result.value + eight.innerHTML
}

function btn9() {
    result.value = result.value + nine.innerHTML
}

function btn0() {
    result.value = result.value + zero.innerHTML
}

function plusBtn() {
    result.value = result.value + plus.innerText
}

function minusBtn() {
    result.value = result.value + minus.innerHTML
}

function timesBtn() {
    result.value = result.value + "*"
}

function divBtn() {
    result.value = result.value + division.innerHTML
}

function dotBtn() {
    result.value = result.value + dot.innerHTML
}

function delBtn() {
    result.value = result.value.slice(0, -1)
}

function resetBtn() {
    result.value = ""
}

function equalBtn() {
    result.value = eval(result.value)
}

function whtBtns(x) {
    x.classList.remove("wht-btns2")
    x.classList.remove("wht-btns3")
    x.classList.add("wht-btns")
    x.style = "color: var(--t1-text-dark)"
}

function whtBtns2(x) {
    x.classList.remove("wht-btns")
    x.classList.remove("wht-btns3")
    x.classList.add("wht-btns2")
    x.style = "color: var(--t2-text-dark)"
}

function whtBtns3(x) {
    x.classList.remove("wht-btns")
    x.classList.remove("wht-btns2")
    x.classList.add("wht-btns3")
    x.style = "color: var(--t3-text-light)"
}

function blueBtns(x) {
    x.classList.remove("blue-btns2")
    x.classList.remove("blue-btns3")
    x.classList.add("blue-btns")
}

function blueBtns2(x) {
    x.classList.remove("blue-btns")
    x.classList.remove("blue-btns3")
    x.classList.add("blue-btns2")
}

function blueBtns3(x) {
    x.classList.remove("blue-btns")
    x.classList.remove("blue-btns2")
    x.classList.add("blue-btns3")
}

function thumb1(x) {
    x.classList.remove("theme-range2")
    x.classList.remove("theme-range3")
    x.classList.add("theme-range")
}

function thumb2(x) {
    x.classList.remove("theme-range")
    x.classList.remove("theme-range3")
    x.classList.add("theme-range2")
}


function thumb3(x) {
    x.classList.remove("theme-range")
    x.classList.remove("theme-range2")
    x.classList.add("theme-range3")
}


// -======================================================

theme.onchange = function() {
    if (theme.value == 1) {
        document.body.style = "background-color:var(--t1-main-bg)"
        document.getElementById("title").style = "color:white"
        document.getElementById("theme").style = "color:white"
        document.getElementById("theme1").style = "color:white"
        document.getElementById("theme2").style = "color:white"
        document.getElementById("theme3").style = "color:white"
        document.getElementById("themeRange").style = "background-color: var(--t1-keypad-bg)"
        document.getElementById("result-screen").style = "background-color: var(--t1-screen-bg);color:white"
        document.getElementById("numpad").style = "background-color: var(--t1-keypad-bg);"
        document.getElementById("equal").style = "background-color: var(--t1-red-key-bg);"
        thumb1(theme);
        whtBtns(one);
        whtBtns(two);
        whtBtns(three);
        whtBtns(four);
        whtBtns(five);
        whtBtns(six);
        whtBtns(seven);
        whtBtns(eight);
        whtBtns(nine);
        whtBtns(zero);
        whtBtns(plus);
        whtBtns(minus);
        whtBtns(times);
        whtBtns(division);
        whtBtns(dot);
        blueBtns(reset);
        blueBtns(del);
    } else if (theme.value == 2) {
        document.body.style = "background-color:var(--t2-main-bg)"
        document.getElementById("themeRange").style = "background-color: var(--t2-keypad-bg)"
        document.getElementById("result-screen").style = "background-color: var(--t2-screen-bg);color:var(--t2-text-dark)"
        document.getElementById("numpad").style = "background-color: var(--t2-keypad-bg);"
        document.getElementById("equal").style = "background-color: var(--t2-red-key-bg);border-bottom: 3px solid var(--t2-red-shadow);"
        document.getElementById("title").style = "color:var(--t2-text-dark)"
        document.getElementById("theme").style = "color:var(--t2-text-dark)"
        document.getElementById("theme1").style = "color:var(--t2-text-dark)"
        document.getElementById("theme2").style = "color:var(--t2-text-dark)"
        document.getElementById("theme3").style = "color:var(--t2-text-dark)"
        thumb2(theme);
        whtBtns2(one);
        whtBtns2(two);
        whtBtns2(three);
        whtBtns2(four);
        whtBtns2(five);
        whtBtns2(six);
        whtBtns2(seven);
        whtBtns2(eight);
        whtBtns2(nine);
        whtBtns2(zero);
        whtBtns2(plus);
        whtBtns2(minus);
        whtBtns2(times);
        whtBtns2(division);
        whtBtns2(dot);
        blueBtns2(reset);
        blueBtns2(del);
    } else if (theme.value == 3) {
        document.body.style = "background-color:var(--t3-main-bg)"
        document.getElementById("result-screen").style = "background-color: var(--t3-screen-bg);color:var(--t3-text-light)"
        document.getElementById("themeRange").style = "background-color: var(--t3-keypad-bg)"
        document.getElementById("numpad").style = "background-color: var(--t3-keypad-bg);"
        document.getElementById("equal").style = "background-color: var(--t3-red-key-bg);border-bottom: 3px solid var(--t3-red-shadow); color: var(--t3-text-dark)"
        document.getElementById("title").style = "color:var(--t3-text-light)"
        document.getElementById("theme").style = "color:var(--t3-text-light)"
        document.getElementById("theme1").style = "color:var(--t3-text-light)"
        document.getElementById("theme2").style = "color:var(--t3-text-light)"
        document.getElementById("theme3").style = "color:var(--t3-text-light)"
        thumb3(theme);
        whtBtns3(one);
        whtBtns3(two);
        whtBtns3(three);
        whtBtns3(four);
        whtBtns3(five);
        whtBtns3(six);
        whtBtns3(seven);
        whtBtns3(eight);
        whtBtns3(nine);
        whtBtns3(zero);
        whtBtns3(plus);
        whtBtns3(minus);
        whtBtns3(times);
        whtBtns3(division);
        whtBtns3(dot);
        blueBtns3(reset);
        blueBtns3(del);
    }
}