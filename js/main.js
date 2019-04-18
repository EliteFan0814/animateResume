var cmd = `/*Microsoft Windows [版本 10.0.17134.706]
 (c) 2018 Microsoft Corporation。保留所有权利。
 
 C:\\Users\\范培超>Make my RScard

 固定终端高度：
*/
#sourceCode {
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
    height: inherit;
  }
/*添加一个画布*/
.shortcut .header a{
  display: inline-block;
  background-color: #88acdb;  
}
/*加上我的头像*/
#myportrait{
  height: 114px;
}
/*变成圆形吧！*/
.shortcut .header a{
  border-radius: 50%;
  border-width: 5px;
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
  color: #696969;
  font-size: 30px;
}
/*写下我最喜欢的一句话*/
.shortcut .mybelief{
  color: #999;
}
/*有空可以来我的博客看一下*/
.shortcut .myhome a{
  color: #8b8888;
  text-decoration: none;
}
.shortcut .myhome{
  padding: 65px;
}
/*添加我的社交账号*/
.shortcut .social{
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
/*创建一个 markdown 画布*/
.main .myrscard{
  display: block;
  margin: 30px;
  height: 92%;
}
/*现在请看右边的自我介绍*/
`
var mdCode = `
  # 自我介绍
  我叫范培超，自学前端半年，希望应聘前端开发岗位的工作
  ## 技能介绍
  HTML CSS javaScript 
  ## 项目介绍
  1. canvas 画板
  2. 键盘导航
  3. 无缝轮播
  4. 动态简历
  ## 联系方式
  - qq
  - email
  - 微信
  ## 联系方式
  - qq
  - email
  - 微信
  ## 联系方式
  - qq
  - email
  - 微信
  ## 联系方式
  - qq
  - email
  - 微信
  ## 联系方式
  - qq
  - email
  - 微信
  ## 联系方式
  - qq
  - email
  - 微信
  ## 联系方式
  - qq
  - email
  - 微信
  ## 联系方式
  - qq
  - email
  - 微信
  ## 联系方式
  - qq
  - email
  - 微信
  ## 联系方式
  - qq
  - email
  - 微信
  ## 联系方式
  - qq
  - email
  - 微信
  ## 联系方式
  - qq
  - email
  - 微信
  ## 联系方式
  - qq
  - email
  - 微信
`
var toHTML = `
md 文件写好了，但是并不好看
给它加一些 css 样式
`
var end = `
现在终于完成了动态简历，
谢谢您的观看！
`
// 模仿 windows cmd 80 100 500 100
writeCode(cmd, 0, () => {
  //正式开始
  writeCode(move, 0, () => {
    writeMarkDown(mdCode, 50,()=>{
      writeCode(toHTML,100,()=>{
        mdToHtml(mdCode,()=>{
          writeCode(end,100)
        })
      })
    })
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
      callBack && callBack.call()
    }
  }, speed)
}

function writeMarkDown(md_code, speed, callBack) {
  let n = 0;
  let md_timer = setInterval(function () {
    n++
    markdownRs.innerHTML += md_code.slice(n - 1, n)
    markdownRs.scrollTop = markdownRs.scrollHeight
    if (n >= md_code.length) {
      window.clearInterval(md_timer)
      callBack && callBack.call()
    }
  }, speed)
}

function mdToHtml(md_text,callBack){
  let md = window.markdownit()
  markdownRs.innerHTML = md.render(md_text)
  markdownRs.scrollTop = 0
  callBack && callBack.call()
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