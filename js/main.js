var cmd1 = `/*Microsoft Windows [版本 10.0.17134.706]
 (c) 2018 Microsoft Corporation。保留所有权利。
 
 C:\\Users\\范培超>Welcome to my rscard!

 我来介绍一下我自己吧！
 让我们先做一些准备工作，先固定一下终端窗口的高度：
*/
#sourceCode {
  // overflow: auto;
  height: 180px;
}
 `
var move = `
/*给桌面添加一个背景颜色*/
  body{
    background-color: #EAEAEA;
  }
/*添加一个侧边栏*/
  .aside aside{
    display: block;
    width: 300px;
    height: inherit;
    border: none;
  }

/*添加一个画布*/
.shortcut .header a{
  display: inline-block;
  width: 128px;
  height: 128px;
  background-color: #88acdb;
}
/*加上我的头像*/
#myportrait{
  width: 114px;
  height: 114px;
}
/*变成圆形吧！*/
.shortcut .header a{
  border-radius: 50%;
  border: 5px solid #fff;
}
/*添加一个蒙版*/
.existBlock{
  background-color: #4D4D4D;
}
/*上移我的头像*/
.shortcut{
  margin-top: -68px;
}
/*写下我的名字*/
.shortcut h1.myname{
  display: block;
  color: #696969;
  font-size: 30px;
  font-family: Roboto,serif;
  font-weight: lighter;
  margin: 25px 0 29px;
  
}
/*这是我最喜欢的一句话*/
.shortcut .mybelief{
  display: block;
  color: #999;
  font-size: 14px;
  line-height: 25px;
}
/*有空可以来我的博客看一下*/
.shortcut .myhome{
  display: block;
}
.shortcut .myhome a{
  color: #8b8888;
  text-decoration: none;
}
.shortcut .myhome{
  padding: 65px;
}
/*添加我的社交账号*/
.shortcut .social{
  display: block;
  opacity: 1;
  margin-top: 50px;
}
.shortcut .social a{
  margin: 0 6px;
}
/*终端好碍事，把它挪走*/
#sourceCode {
  top: 0;
  left: 0;
  opacity: 0.6;
}
`

// 模仿 windows cmd 80 100 500 100
writeCode(cmd1, 50, () => {
      //正式开始
      writeCode(move, 70, () => {

      })
})

function writeCode(add_code, speed, callBack) {
  let n = 0
  let write_timer = setInterval(function () {
    n++
    sourceStyle.innerHTML += add_code.slice(n - 1, n)
    sourceCode.innerHTML = Prism.highlight(sourceStyle.innerHTML, Prism.languages.css)
    sourceCode.scrollTop = sourceCode.scrollHeight
    if (n >= add_code.length) {
      window.clearInterval(write_timer)
      callBack.call()
    }
  }, speed)
}

function creatPaper(callBack) {
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
  callBack.call()
}
// var n = 0
// var id = setInterval(function () {
//   n++
//   sourceStyle.innerHTML += result.slice(n - 1, n)
//   // sourceCode.innerHTML += result.slice(n - 1, n)
//   sourceCode.innerHTML = Prism.highlight(sourceStyle.innerHTML, Prism.languages.css);
//   if (n >= result.length) {
//     window.clearInterval(id)
//     creatPaper()
//     fn3()
//   }
// }, 100)



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