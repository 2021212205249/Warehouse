function Color(){
    document.getElementById("p1").style.color="red";
}

function Date1(){
    var time = new Date();
    document.getElementById("date").innerHTML=time.getFullYear()+'-' + (time.getMonth() +1) +'-' + time.getDate();
}

function Add(){
    document.getElementById("p3").classList.add("fn-active");
}

function Delete(){
    document.getElementById("p8").remove();
}

function Window(){
    window.open("https://www.taobao.com");
}

function Addli(){
    var ul = document.getElementById("ul");
    var li = document.createElement("li");
    ul.append(li);
    li.classList.add("m-item");
    li.innerHTML="p9"; 
}

let i =document.querySelectorAll(".m-item");
for(var j = 0; j < i.length; j++)
{
    i[j].addEventListener("click",function(){
        alert(this.innerHTML);
    })
}

function mbox() {
    var box =document.getElementsByClassName("m-box")[0];
    box.style.backgroundColor="#999";
    box.style.width="100%";
}
