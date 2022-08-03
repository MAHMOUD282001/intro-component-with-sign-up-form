let submitBtn = document.querySelector(".btn");

let inputs = document.querySelectorAll(".input input");

let errorMsgs = document.querySelectorAll(".err-msg");



submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    
    
    for(let i = 0; i < inputs.length; i++){
    
        if(inputs[i].classList.contains("email")){
            if(inputs[i].value === ""){
                errorMsgs[i].innerText = "Looks like this is not Email"
                errorMsgs[i].classList.add("active")
            }
            
            else{
                if(inputs[i].value.includes("@")){
                    errorMsgs[i].classList.remove("active")
                }
                
                else{
                    errorMsgs[i].innerText = "Email must contains @"
                }
            }
            
        }
        
        else{
            if(inputs[i].value === ""){
                errorMsgs[i].classList.add("active")
            }
            
            else{
                errorMsgs[i].classList.remove("active")
                
            }
    }
}
})