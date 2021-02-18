var bucketlist=[]

var listitem=document.getElementById("list-container")

function addValues(){
    let value=document.getElementById("input-field").value
    bucketlist.push(value)
    showlist()
}

function reset(){
    bucketlist=[]
    showlist()
}

function showlist(){
    listitem.innerHTML = ""
    for(let i=0; i<bucketlist.length ; i++){
        let li=document.createElement("li")
        li.innerHTML = bucketlist[i] + `<span> <img src="https://i1.faceprep.in/tick-mark.png" class="checked" onclick="remove(`+i+`)"> </span>`
        li.className="list"
        listitem.appendChild(li)
    }
}


function remove(i){
    bucketlist.splice(i,1)
    showlist()
}