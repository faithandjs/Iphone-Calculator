let body = document.querySelector('.calc-body'),
    one = document.querySelector('.one'),
    two = document.querySelector('.two')
    three = document.querySelector('.three')
    four = document.querySelector('.four'),
    five = document.querySelector('.five'),
    six = document.querySelector('.six'),
    seven = document.querySelector('.seven'),
    eight = document.querySelector('.eight'),
    nine = document.querySelector('.nine'),
    zero = document.querySelector('.zero'),
    clear = document.querySelector('.clear'),
    plusAndMinus = document.querySelector('.plus-and-minus'),
    modulo = document.querySelector('.modulo'),
    divide = document.querySelector('.divide'),
    times = document.querySelector('.times'),
    minus = document.querySelector('.minus'),
    plus = document.querySelector('.plus'),
    equals = document.querySelector('.equals'),
    display = document.querySelector('.display p'),
    yellow = document.querySelectorAll('.yellow'),
    dot = document.querySelector('.dot')
    
let collector = 0,
    first = 0,
    firstChanged = false, 
    second = 0,
    action = 0, 
    toggle = false,
    equalsToClicked = false,
    clearClickedOnce = false,
    orangy = '#f1a33c', 
    white = '#fff'

//body.classList.add('sci')
//document.querySelector('.')
function numberClicked(x){
    clearClickedOnce  = false
    equalsToClicked = false
    if (toggle == true){
        toZero()
    }
    yellow.forEach(element => {
        actionBtnClicked(element, orangy, white)
    })

    if (display.textContent == 0){
        if (display.textContent.length < 9){
                display.textContent = x
        }
    }else{
        if (display.textContent.length < 9){
            display.textContent += x
        }
    }
    clear.textContent = 'C'
    collector = display.textContent
    toggle = false
    console.log(first, collector)
    return collector, toggle, clearClickedOnce 
}

function assign(){
    equalsToClicked = false
    if (firstChanged == false){
        first = collector
        collector = 0
        firstChanged = true
    }else {
        collector = 0
        }
    clearClickedOnce = false
    return first, collector,clearClickedOnce 
}
function toZero(){
    clear.textContent = 'AC'
    display.textContent = 0
}
function actionFunction(){
    toggle = true;
    assign()
    return action,toggle
}
function actionBtnClicked(x,y,z){
    x.setAttribute("style", `background-color: ${y} !important`)
    x.style.color = z
}
function numberOfDigits(x){
    if (x = 6){
        return x.toExponential(Math.floor(x).toString().length)
    }else{
        return x
    }
}


clear.onclick = function(){
    if (equalsToClicked == true || action == 0 || clearClickedOnce == true){
        toZero()
        first = 0
        second = 0
        collector = 0
        firstChanged = false
        yellow.forEach(element => {
            actionBtnClicked(element, orangy, white)
        })
        console.log('clear totally')
    }else if( action != 0){
        toZero()
        if (action == '+'){
            actionBtnClicked(plus, white, orangy)
        }else if (action == '-'){
            actionBtnClicked(minus, white, orangy)
        }else if (action == 'x'){
            actionBtnClicked(times, white, orangy)
        }else if (action == '/'){
            actionBtnClicked(divide, white, orangy)
        }
        clearClickedOnce = true;
        console.log('clear second operand')
    }
}
equals.onclick = function(){
    second = collector
    if (action == '+'){
        display.textContent = numberOfDigits(Number(first) + Number(second))
    }else if (action == '-'){
        display.textContent = Number(first) - Number(second)
    }else if (action == 'x'){
        display.textContent = Number(first) * Number(second)
    }else if (action == '/'){
        display.textContent = Number(first) / Number(second)
    }else if(action == '%'){
        display.textContent = Number(first) / 100
    }
    first = display.textContent
    equalsToClicked = true;
    toggle =false;
    return toggle, first
}

modulo.onclick = function(){
    first = collector
    display.textContent = Number(first) / 100
    action = '%'
    toggle = true
    collector = display.textContent
}
plus.onclick = function(){
    actionBtnClicked(plus, white, orangy)
    actionFunction()
    action = '+'
    return action,toggle
}
minus.onclick = function(){
    actionBtnClicked(minus, white, orangy)
    actionFunction()
    action = '-'
    return action,toggle
}
times.onclick = function(){
    actionBtnClicked(times, white, orangy)
    actionFunction()
    action = 'x'
    return action,toggle
}
divide.onclick = function(){
    actionBtnClicked(divide, white, orangy)
    actionFunction()
    action = '/'
    return action,toggle
}

//0-9
one.onclick = function(){
    numberClicked(1)
}
two.onclick = function(){
    numberClicked(2)
}
three.onclick = function(){
    numberClicked(3)
}
four.onclick = function(){
    numberClicked(4)
}
five.onclick = function(){
    numberClicked(5)
}
six.onclick = function(){
    numberClicked(6)
}
seven.onclick = function(){
    numberClicked(7)
}
eight.onclick = function(){
    numberClicked(8)
}
nine.onclick = function(){
    numberClicked(9)
}
zero.onclick = function(){
    numberClicked(0)
}
dot.onclick = function(){
    numberClicked('.')
}
//`first: ${first}, second: ${second}, collector: ${collector}` ÷ 