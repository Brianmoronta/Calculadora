const keypads = document.getElementsByClassName(".keypad");
const button = document.querySelectorAll("button");
const display = document.getElementById("VarNum");
const displayOperacion = document.getElementById("VarNum2");


button.forEach(function(button){
        button.addEventListener('click',()=>{           
                var Changer = button.innerHTML

            if(display.textContent == 0){
                    display.textContent = Changer 
            } else{
                 display.textContent +=  Changer
            } 

            switch (Changer) {
                case "CE":
                    display.textContent = ""
                    displayOperacion.textContent = ""
                break;
                case "C":
                    display.textContent = "0"
                break;
                case "DE":
                    display.textContent = display.textContent.slice(0,-3)
                break;
                case "+":
                    displayOperacion.textContent = display.textContent
                    display.textContent = ""
                break;
                case "-":
                    displayOperacion.textContent = display.textContent
                    display.textContent = ""
                break;
                case "x":
                    displayOperacion.textContent = display.textContent
                    display.textContent = ""
                break;
                case "/":
                    displayOperacion.textContent = display.textContent
                    display.textContent = ""
                break;
            }

        if(Changer == "="){
                        if(displayOperacion.innerHTML.includes("+")){
                    var num1 = parseFloat(displayOperacion.textContent.slice(0,-1));
                    var num2 = parseFloat(display.textContent.slice(0,-1))
                    var resultado = num1 + num2
                    
                   display.textContent = resultado.toString();
                   displayOperacion.textContent = ""
            }

                    if(displayOperacion.innerHTML.includes("-")){
                var num1 = parseFloat(displayOperacion.textContent.slice(0,-1));
                var num2 = parseFloat(display.textContent.slice(0,-1))
                var resultado = num1 - num2
                
               display.textContent = resultado.toString();
               displayOperacion.textContent = ""
            }
            
                    if(displayOperacion.innerHTML.includes("x")){
                var num1 = parseFloat(displayOperacion.textContent.slice(0,-1));
                var num2 = parseFloat(display.textContent.slice(0,-1))
                var resultado = num1 * num2
                
               display.textContent = resultado.toString();
               displayOperacion.textContent = ""
            }

                    if(displayOperacion.innerHTML.includes("/")){
                var num1 = parseFloat(displayOperacion.textContent.slice(0,-1));
                var num2 = parseFloat(display.textContent.slice(0,-1))
                var resultado = num1 / num2
                
               display.textContent = resultado.toString();
               displayOperacion.textContent = ""
            }
                
        }

        })
                
    })


 



