// Made By Prathmesh Thorat
alert("This is an Simple Stopwatch...!\n\n\nPlease Upvote my code....")
var i = 0;
var c1;
function start(){
var time = document.getElementById("time");
var btn = document.getElementById("start");
if(i==0){
btn.innerHTML="Stop";
btn.style.backgroundColor="#FF6666";
btn.style.color="#F0F0F0";
i++;
c1 = setInterval(count,10);
var h = 0;
var min = 0;
var sec = 0;
var milli = 0;
function count(){
milli++;
time.innerHTML=h+":"+min+":"+sec+":"+milli;
if(milli==99){
sec++;
milli=0;
if(sec==60){
sec=0;
min++;
if(min==60){
min=0;
h++;
}}}
}}
else{
if(i==1){
  btn.innerHTML="Reset";
  btn.style.backgroundColor="#39F2C9";
  btn.style.color="black";
  clearInterval(c1);
  i=2;
}
else{
  btn.innerHTML="Start";
  btn.style.color="#F0F0F0";
  btn.style.backgroundColor="#364F6B";
  time.innerHTML="0:0:0:0";
  i=0;
}}}