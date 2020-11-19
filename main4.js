const list = document.getElementById("list")

const addButton = document.getElementById("add")
const add2Button = document.getElementById("add2")

const removeButton = document.getElementById("remove")


//数字追加

addButton.addEventListener("click", (event) => {
    const newItem = document.createElement("li")
    // var len = li.getAttribute(Array);
    var childElementCount = list.childElementCount ;
    // newItem.textContent = childElementCount
    newItem.textContent=(list.children.length + 1)
    list.appendChild(newItem)
})

//削除 これが出来ない

if (newItem.hasChildNodes()) {
  var children = newItem.childNodes;
  for (let i = 0; i < children.length; i++) {
      removeButton.addEventListener("click", (event) => {
      
          list.removeChild(list.lastElementChild)
      })
    
  }
}

//写真追加

add2Button.addEventListener("click", (event) => {

    const img2 = document.createElement("img")
    img2.setAttribute("src", "http://placehold.it/64x64")
    
    list.appendChild(img2)
})