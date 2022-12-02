let show1 = document.getElementById('span1');
let show2 = document.getElementById('span2');
let show3 = document.getElementById('span3');
let clk1 = document.getElementById('clk1');
let clk2 = document.getElementById('clk2');
let clk3 = document.getElementById('clk3');
let hd1 = document.getElementById('hd1');
let hd2 = document.getElementById('hd2');
let hd3 = document.getElementById('hd3');
function expand1(){
    show1.style.display='block';
    clk1.style.display='none';
    hd1.style.display='block';
}
function expand2(){
    show2.style.display='block';
    clk2.style.display='none';
    hd2.style.display='block';
}
function expand3(){
    show3.style.display='block';
    clk3.style.display='none';
    hd3.style.display='block';
}
function shrnk1(){
    show1.style.display='none';
    clk1.style.display='block';
    hd1.style.display='none';
}
function shrnk2(){
    show2.style.display='none';
    clk2.style.display='block';
    hd2.style.display='none';
}
function shrnk3(){
    show3.style.display='none';
    clk3.style.display='block';
    hd3.style.display='none';
}