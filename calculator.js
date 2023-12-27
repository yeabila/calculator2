function numberInput(number){
document.getElementById('display').value += number
}
function clearInput(){
document.getElementById('display').value ='' 
}
function  operatorsInput( operator){
    document.getElementById('display').value +=  ' ' + operator + ' '
}
function calculator(){
    let resultDisplay = document.getElementById('display').value 
    let result = eval(resultDisplay)
    document.getElementById('display').value = result
 }
function solve(){
    let x = document.getElementById('display').value
    let y = Math.sin(x)
    document.getElementById('display').value = y
}
function solves(){
    let z = document.getElementById('display').value
    let b = Math.cos(z)
    document.getElementById('display').value = b
}
function solvess(){
    let a = document.getElementById('display').value
    let c = Math.tan(a)
    document.getElementById('display').value = c
}
function plays(){
    let d = document.getElementById('display').value
    let e = Math.log(d)
    document.getElementById('display').value = e
}
function play(){
    let h = document.getElementById('display').value
    let g = Math.sqrt(h)
    document.getElementById('display').value = g
}
function yeab(){
    let f = document.getElementById('display').value
    let k = Math.sign(f)
    document.getElementById('display').value = k
}
