//課題


const body =document.body
const h1 = document.createElement("h1")
h1.textContent="DOM"

const p = document.createElement("p")
p.textContent="JavaScriptからHTMLを扱うための仕組み"

const h2 = document.createElement("h2")
h2.textContent="印象に残っているトピック"

const ul = document.createElement("ul")

const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")

li1.textContent = "documentオブジェクト"
li2.textContent = "getElementById"
li3.textContent="イベントリスナ"
//ノードの追加

body.appendChild(h1)
body.appendChild(p)
body.appendChild(h2)
body.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)



//
//
//後半
//
//
