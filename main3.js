// window.alert("window.alert")

//window.~~~は省略できる
// alert("window省略ver")

console.log(document.doctype)
console.log(document.title)

/*documentにはhtmlの要素を見つける方法がいくつかある

// document.getElementById 
// document.querySelector cssと同じ。初めに見つかった要素を取得する
// document.querySelectorAll ↑と同じだが、合致する要素全て取り出す

*/

const intro = document.getElementById("intro")
console.log(intro.textContent)

const list = document.querySelector(".list")
console.log(list.children.length)

const items = document.querySelectorAll(".list li")

items.forEach((item)=> {
    console.log(item.textContent)
})

const elem = document.querySelector(".list")
console.log(elem.textContent)
console.log(elem.innerHTML)

for (let i = 0; i < elem.children.length; i++){
    console.log(elem.children[i])
}


console.log(elem.firstElementChild)
console.log(elem.lastElementChild)
console.log(elem.parentElement)

const elem2 = document.querySelector("img")
console.log(elem2.getAttribute("src"))
elem2.setAttribute("src", "https://placehold.it/400x200")

const newItem = document.createElement("li")
newItem.textContent = "新しいアイテム"

list.appendChild(newItem)
list.removeChild(list.firstChild)


//イベント
//要素に、クリックされた・入力された・スクロールしたなどのタイミングでイベントを発生させる

const addButton = document.getElementById("add")
const removeButton = document.getElementById("remove")

addButton.addEventListener("click", (event) => {
    const newItem = document.createElement("li")
    newItem.textContent = "転スラ"
    list.appendChild(newItem)
})

removeButton.addEventListener("click", (event) => {
    list.removeChild(list.lastElementChild)
})


//課題→main4.js
