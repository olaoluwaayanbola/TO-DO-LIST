const useradd = document.getElementById("useradd")
const btn = document.getElementById("btn")
const listElements = document.getElementById("listElements")
const lists = document.getElementById("lists")

var iconDelete;

function toDoList() {
    var headerTag = document.createElement("h2")
    iconDelete = document.createElement("i")
    var checkboxx = document.createElement("input")
    
    headerTag.innerHTML = useradd.value

    iconDelete.setAttribute("class","fas fa-trash-alt")
    checkboxx.setAttribute("type","checkbox")

    checkboxx.style.float = "right"
    iconDelete.style.paddingLeft = "10px"

    iconDelete.addEventListener("click",function(){
        headerTag.remove()
    })

    headerTag.append(iconDelete)
    headerTag.append(checkboxx)

    iconDelete.style.float = "right";
    listElements.insertAdjacentElement("beforeend",headerTag); 
}

btn.addEventListener("click",toDoList)
useradd.addEventListener("keydown",function(event){
    if (event.key == "Enter"){
        toDoList()
    }
})


