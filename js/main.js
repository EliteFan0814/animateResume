var cmd1 = `/*Microsoft Windows [版本 10.0.17134.706]
 (c) 2018 Microsoft Corporation。保留所有权利。
 
 C:\\Users\\范培超>_烫烫烫烫烫烫烫烫烫烫烫烫...
 `
var re_message2 = `
 不步部布不好好好意思思，
 您的ai爱机死死死死机了，
 冲虫充崇宠铳重重重启中`
var suspension3 = `. . . . . .`
var start4 = `

 Welcome to windows 10
 
 不黑 windows 了，现在正式开始！

 我来介绍一下我自己吧！
 让我们先做一些准备工作，固定一下终端的位置：
*/
 `
var codeslide = `#sourceCode {
  // overflow: auto;
  height: 180px;
  
}
`
var code_noslide = `
}
`
var move = `
/*放在这里太碍事了，把它挪到旁边*/
  #sourceCode{
    padding: 0 10px;
    transition: top 1s, left 1.8s;
    top: 0;
    left: 0;
  }
/*给桌面添加一个背景颜色*/
  body{
    background-color: #EAEAEA;
  }
/*添加一个侧边栏*/
  aside{
    display: block;
    overflow: hidden;
    width: 300px;
    height: inherit;
  }
/*终端窗口好碍眼，把它变透明*/
#sourceCode{
  background-color: rgba(77,77,77,0.6);
}
/*开始画头像*/
.shortcut .header a{
  display: inline-block;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;
  background-color: #88acdb;
}
/*签上我的名字，哈哈！*/
.shortcut h1.myname{
  display: block;
  font-family: Roboto,serif;
  font-size: 30px;
  font-weight: lighter;
  color: #696969;
  padding: 4px;
  margin: 25px 0 29px;
}
/*写下我最喜欢的一句话*/
.shortcut .mybelief{
  display: block;
  font-family: lucida sans unicode,sans-serif;
  text-align: center;
  color: #999;
  font-size: 14px;
  line-height: 25px;
}
/*有空来我的博客看一下吧*/
.shortcut .myhome{
  display: block;
  padding: 65px;
}
.shortcut .myhome a{
  font-size: 14px;
  color: #8b8888;
  text-decoration: none;
}
`
/*
// 模仿 windows cmd 80 100 500 100
writeCode(cmd1, 10, () => {
  //死机了
  writeCode(re_message2, 10, () => {
    // 重启中
    writeCode(suspension3, 50, () => {
      //正式开始
      writeCode(start4, 10, () => {
        // 是否需要滚动条
        if (true) {
          writeCode(codeslide, 10, () => {
            writeCode(move,10,()=>{})
          })
        } else {
          writeCode(code_noslide, 100, () => {

          })
        }
      })
    })
  })
})
*/
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