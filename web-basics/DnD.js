function dragStart(event){
    event.dataTransfer.setData("text/html", event.target.id);
}

function dropImageFunc(event){
    event.preventDefault();
    const data  = event.dataTransfer.getData("text/html")
    event.target.appendChild(document.getElementById(data))
}

function allowDrop(event){
    event.preventDefault();
} 

function imageClicked(event){
    console.log(event)
}