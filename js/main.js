var result = `
/*
动画开始啦，
哈哈
*/

*{
  transition: all 1s;
}
body{
  background-color: #ddd;
}
#sourceCode{
    padding:16px;
}
/*加点样式*/
`

var n = 0
var id = setInterval(function () {
    n++
    sourceStyle.innerHTML = result.slice(0, n)
    sourceCode.innerHTML = result.slice(0, n)
    sourceCode.innerHTML = Prism.highlight(sourceStyle.innerHTML, Prism.languages.css);
    if (n >= result.length) {
        window.clearInterval(id)
    }
}, 100)