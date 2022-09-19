let Nout = document.getElementById("Numberout");
const btn = document.getElementById("sub");
 var random = Math.floor(Math.random() * 10 + 1);
 console.log("random1::",random);

// var x;

btn.addEventListener("click",find);

function mathAgain(){
    random = Math.floor(Math.random() * 10 + 1);
    console.log("random2::",random);
}

function find(){     
var x = document.getElementById("Numberin").value;
    
    if(x){
         if (x == random) {
         Nout.innerHTML = "You win, play again";
            mathAgain();
            
            x.value = "";
        }
        
        else if (x > random){
         Nout.innerHTML = "Take smaller Number ";
         x = document.getElementById("Numberin");
         x.value = "";
        }

        else if (x < random) {
            Nout.innerHTML = "Take Biger Number";
            x = document.getElementById("Numberin");
            x.value = "";
        }
        
    }else{
        alert("Enter any number")
    }
    
} 

    