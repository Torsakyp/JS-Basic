// javascript block scope
//{
// var x = 10;
// let y = 20;
//}
//alert(x); // x can used here
//alert(y); // y cat Not used here

//prompt
//var name = prompt("สวัสดี"); //กล่องรับข้อมูลแบบ popup
//alert("Hi!" + " " + name);
//console.log(typeof name);

//lotto v.1
//var lotto_number = prompt("กรอกเลข 2 ตัวท้าย");
//console.log(lotto_number);
//Math.random() สุ่ม 0-1
//Math.floor() ปัดเศษลง
//var lotto_win = Math.floor(Math.random()*100); //0-99
//console.log(lotto_win);
//document.getElementById("input").innerHTML = lotto_number;
//document.getElementById("result").innerHTML = lotto_win; //แสดงผล
//innerHTML ใส่โค้ด HTML ลงไปได้
//innerText ใส่ได้เฉพาะ text เท่านั้น

//ค่าความจริง
/*console.log(1 == 1); //true
console.log(1 === 1); //true
console.log(1 == "1"); //true
console.log(1 === "1"); //false
console.log("1" == "1"); //true
console.log("1" === "1"); //true
console.log("-----------")
console.log(1 != 1); //false
console.log(1 !== 1); //false
console.log(1 != "1"); //false
console.log(1 !== "1"); //true
console.log("1" != "1"); //false
console.log("1" !== "1"); //false*/

//if else
/*var age = prompt("กรุณากรอกอายุของคุณ : ");
if (age >= 13) { 
    document.getElementById("content1").innerHTML = "เย็ดหี get money";
    document.getElementById("content2").innerHTML =
    "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/802bx-h9TpQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
} else {
    document.getElementById("content1").innerHTML = "ไอ้เหี้ยเด็กน้อย ไม่ได้ดูหรอก";
}*/

//lotto v.2
/*var lotto_number = prompt("กรอกเลข 2 ตัวท้าย");
console.log(lotto_number);
var lotto_win = Math.floor(Math.random()*100); //0-99
console.log(lotto_win);
document.getElementById("input").innerHTML = lotto_number;
document.getElementById("result").innerHTML = lotto_win; //แสดงผล
if(lotto_number === lotto_win){
    document.getElementById("sum").innerHTML = "เย้ ถูกหวย!";
}
else{
    document.getElementById("sum").innerHTML = "เย้ ถูกหวยแดก!";
}*/

//โปรแกรมคำนวณเกรด
/*var score = prompt("กรอกคะแนนของคุณ :");
if(score >= 80){
    document.getElementById("result").innerHTML = "คุณได้เกรด A" ;
}
else if(score >= 75){
    document.getElementById("result").innerHTML = "คุณได้เกรด B+" ;
}
else if(score >=70){
    document.getElementById("result").innerHTML = "คุณได้เกรด B" ;
}
else if(score >= 65){
    document.getElementById("result").innerHTML = "คุณได้เกรด C+" ;
}
else if(score >= 60){
    document.getElementById("result").innerHTML = "คุณได้เกรด C" ;
}
else if(score >= 55){
    document.getElementById("result").innerHTML = "คุณได้เกรด D+" ;
 }
 else if(score >= 50){
     document.getElementById("result").innerHTML = "คุณได้เกรด D" ;
 }
 else if(score < 50){
     document.getElementById("result").innerHTML = "คุณได้เกรด F" ;
 }*/

 //for
 /*for(var i=0 ; i<10 ; i++){
     document.getElementById("num").innerText = i ;
     console.log(i);
 }*/

 //โปรแกรมคำนวณค่าอาหาร
 /*let qrt = prompt("ใส่จำนวนสินค้า");
 var sum = 0;
 for(var i=1 ; i<=qrt ; i++){
    let price = prompt("ราคาสินค้าชื่นที่ " + i + ":");
    document.getElementById("price-list").innerHTML += "สินค้าชิ้นที่ " + i + " ราคา : " + price + " บาท" + "<br>";
    sum = parseInt(price) + sum;
}
document.getElementById("result").innerHTML = "ราคารวมเท่ากับ : " + sum + " บาท";*/

//โปรแกรมทายหัว ก้อย
/*var round = prompt("จำนวนรอบที่จะเล่น : ");
var score = 0;
for(var i=0 ; i<round ; i++){
    var ans = prompt("H or T");
    var num = Math.floor(Math.random()*10)%2;
    if(ans === "H" && num == 0){        
        console.log("ถูก");
        score++;
        document.getElementById("list").innerHTML += "คุณตอบ " + ans + " ถูก" + "<br>";
    }
    else if(ans === "T" && num == 1){        
        console.log("ถูก");
        score++;
        document.getElementById("list").innerHTML += "คุณตอบ " + ans + " ถูก"  + "<br>";
    }
    else{
        
        console.log("ผิด")
        document.getElementById("list").innerHTML += "คุณตอบ " + ans + " ผิด"  + "<br>";
    }
}
document.getElementById("score").innerHTML = "คะแนนรวม : " + score + " คะแนน เต็ม " + round + " คะแนน";*/

//while
/*while(prompt("ถ้าจะออกกด x") != "x"){
    document.getElementById("result").innerHTML += "คุณไม่ได้พิมพ์ x" + "<br>";
}*/

//function
/*function sayhi(){
    console.log("hi");
}
sayhi()*/

//convert celsius , fahrenheit v.1
/*function tocelsius(){
    let fahrenheit = prompt("Fahrenheit : ")
    let value = (fahrenheit-32)*5 / 9;
    document.getElementById("answer").innerHTML += value.toFixed(2) + " °C" + "<br>";
}
function tofahrenheit(){
    let celsius = prompt("Celsius : ")
    let value = (celsius*9/5)+32;
    document.getElementById("answer").innerHTML += value.toFixed(2) + " °F";
}
tocelsius();
tofahrenheit();*/

//การส่งค่ากลับของ function
/*function sayhi(){
    return " Hi " //เหมือนกับการโยนค่ากลับไปหาตัวที่เรียกใช้มัน
}
alert(sayhi());*/

//การรับและส่งค่ากลับของ function
/*function sayhi(Firstname , Lastname){  //Firstname , Lastname = parameter (ตัวแปรที่เกิดพร้อมกับ function ทำงานใน function)
    return "Hi " + Firstname +" "+ Lastname;
}
let a = prompt("กรอกชื่อของคุณ : ");
let b = prompt("กรอกนามสกุลของคุณ : ");
alert(sayhi(a , b)); //a , b = argument (ข้อมูลที่ส่งให้ function)*/

//convert celsius , fahrenheit v.2
/*function tocelsius(fahrenheit){    
    let value = (fahrenheit-32)*5 / 9;
    return value.toFixed(2) + " °C";
}
function tofahrenheit(celsius){   
    let value = (celsius*9/5)+32;
    return value.toFixed(2) + " °F";
}
function display(elementid , value){
    document.getElementById(elementid).innerHTML = value;
}
alert(tocelsius(150));
display("tocelsius" , tocelsius(150));
alert(tofahrenheit(150));
display("tofahrenheit" , tofahrenheit(150));*/

//event
/*function test(){
    return alert("test call funcion");
}*/

//convert celsius , fahrenheit v.3
/*function tocelsius(fahrenheit){    
    let value = (fahrenheit-32)*5 / 9;
    return value.toFixed(2) + " °C";
}
function tofahrenheit(celsius){   
    let value = (celsius*9/5)+32;
    return value.toFixed(2) + " °F";
}
function display(elementid , value){
    document.getElementById(elementid).innerHTML = value;
}
function tocelsiusprogram(value){
    alert(tocelsius(value))
}
function tofahrenheitprogram(value){
    alert(tofahrenheit(value))
}*/