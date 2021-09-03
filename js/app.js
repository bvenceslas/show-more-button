
// get the button 

let myBtn = document.getElementById('btn');

let myContent = document.getElementById('content');


btn.onclick = () => {
    
    if(myContent.className == "close") {
        myContent.className = "open";
        myBtn.innerHTML = "Show Less";
    } else {
        myContent.className = "close";
        myBtn.innerHTML = "Show More";
    }    
}