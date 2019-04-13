var result = `
/*
 * 3 2 1 开始！
 * 为了清楚表达，让我们显示代码的同时高亮代码。
*/

* {
    margin: 0;
    padding: 0;
    transition: all 1s;
}

body {
    background-color: #ddd;
}

#sourceCode {
    border: 1px solid red;
    padding: 16px;
    transform:rotate(360deg);
}

/*加点样式*/
`

var n = 0
var id = setInterval(function () {
  n++
  sourceStyle.innerHTML += result.slice(n - 1, n)
  // sourceCode.innerHTML += result.slice(n - 1, n)
  sourceCode.innerHTML = Prism.highlight(sourceStyle.innerHTML, Prism.languages.css);
  if (n >= result.length) {
    window.clearInterval(id)
    creatPaper()
    fn3()
  }
}, 100)

function creatPaper() {
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
}

function fn3() {
  var result = `
  #paper{
    width: 200px;
    height: 200px;
    border: 1px solid red;
  }
  `
  var n = 0
  var id = setInterval(function () {
    n++
    sourceStyle.innerHTML += result.slice(n - 1, n)
    // sourceCode.innerHTML += result.slice(n - 1, n)
    sourceCode.innerHTML = Prism.highlight(sourceStyle.innerHTML, Prism.languages.css);
    if (n >= result.length) {
      window.clearInterval(id)
    }
  }, 100)
}