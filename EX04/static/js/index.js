var divs = document.getElementsByClassName("m4");
    for(var i=0;i<divs.length;i++){
        var div = divs[i];
        div.onclick = function(){
            for(var i=0;i<divs.length;i++){
                divs[i].style.borderColor="gainsboro gainsboro orange gainsboro";
                divs[i].style.borderWidth="1px";
                divs[i].style.color="black";
            }
            this.style.borderColor="orange orange white orange";
            this.style.borderWidth="2px";
            this.style.color="tomato";
        }
    }


var divs2 = document.getElementsByClassName("text3");
    for(var i=0;i<divs2.length;i++){
        var div = divs2[i];
        div.onclick = function(){
            for(var i=0;i<divs2.length;i++){
                divs2[i].style.fontWeight="";
                divs2[i].style.textDecoration="none";
            }
            this.style.fontWeight="bold";
            this.style.textDecoration="underline red 2px";
        }
    }