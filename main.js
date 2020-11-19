//htmlの特定のタグの中身を変える
const title = document.getElementById("title")
console.log(`h1の中身は${title.textContent}です`)
console.log("h1の中身は" + title.textContent + "です")

const body =document.body
const list = document.querySelector(".list")
console.log(`ulのタグの二つ目のテキストは${list.children[1].textContent}です`)

//htmlの特定のulタグにliを追加する
const newItem = document.createElement("li")//ここで新しいliタグを作る事を指定
newItem.textContent = "けいおん"//ここでliの中身を指定
list.appendChild(newItem)//ここでnewItemで指定した要素の最後に追加する

//htmlのボタンがクリックされたときにアラートを表示
const button = document.getElementById("#button")
document.addEventListener("click", event => {
    confirm("削除してもイイかい？")
})

//
//課題8-1
//

const task1 = document.getElementsByTagName("a")
const task11 =task1[0].getAttribute('href')//↓と同じでインデックスつけないとダメ
console.log(task1[0].textContent)//インデックスつけないとだめ（迷子になるから？）
console.log(task11)
const task2 = document.getElementById("todo")
console.log(task2.children[0].textContent)
const task3 = document.getElementById("todo").querySelector(".list")
console.log(task3.children[1].textContent)

//
//課題8-2
//→main2.js




//
//
//後半→main3.js
//
//

