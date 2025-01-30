const input = document.querySelector('.input');
const button = document.querySelector('.button-add');
const listContinier = document.querySelector('.list-continier');

button.addEventListener("click", (e) =>{
    if(input.value === ''){
        alert("you must write something");
    }
    else{
        const li = document.createElement('li');
        li.innerHTML = input.value;
        listContinier.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    input.value ="";
    savaTask()
})
listContinier.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savaTask()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savaTask()
    }
}, false);
// creating local storage;
function savaTask(){
    localStorage.setItem("tasks", listContinier.innerHTML);
}
function getTask(){
    listContinier.innerHTML = localStorage.getItem("tasks");
}
getTask()
