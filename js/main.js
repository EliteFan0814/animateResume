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
/*在右边创建一张白纸*/
.main .myrscard{
  display: block;
  margin: 30px;
  height: 92%;
}
/*这样我就可以在白纸上写字了，
请看右边即将呈现的简历*/
`
var mdCode = `
  ## 1. 自我介绍
  姓名：范培超
  毕业院校：郑州航空工业管理学院
  联系电话：15099999999
  微    信：fpc552426811

  此前从事 搜索引擎优化 相关工作，有 网页制作 相关经验。
  自学前端超过半年，希望应聘前端开发岗位的工作。

  ## 2. 技能介绍
  熟练使用 **HTML** **CSS** **jQuery** 进行日常网页开发
  有较扎实的原生 **javaScript** 基础
  熟悉使用 **React** **Vue** 框架
  有 **Node.js** 相关经验
  有 **微信小程序** 相关开发经验

  ## 3. 项目介绍
  1. [在线 canvas 画板](https://elitefan0814.github.io/firstdemo/Canvas.html)
  2. [仿键盘导航页面](https://elitefan0814.github.io/firstdemo/kbd.html)
  3. [无缝轮播](https://elitefan0814.github.io/firstdemo/swiper_fifth_loop.html)
  4. [响应式商务通 未整理]()
  5. [动态简历制作 未整理]()
  6. [React]()
  7. [Vue]()
  8. [小程序]()
`
var toHTML = `
/*简历的 md 文件写好了，但是并不好看
那就给它加一些 css 样式吧！
3   
2   
1   
变！*/
`
var end = `
/*现在终于完成了动态简历，
感谢您耐心看完整个过程，
我也该消失了，
请您继续查看完整版的简历，
拜拜！*/
#sourceCode {
  display: none;
}
`
// 模仿 windows cmd 80 100 500 100
writeCode(cmd, 70, () => {
  writeCode(move, 70, () => {
    writeMarkDown(mdCode, 50, () => {
      writeCode(toHTML, 100, () => {
        mdToHtml(mdCode, () => {
          writeCode(end, 100,()=>{
            targetBlank()
          })
        })
      })
    })
  })
})

function writeCode(add_code, speed, callBack) {
  let n = 0
  let sourceStyle = document.querySelector('#sourceStyle')
  let sourceCode = document.querySelector('#sourceCode')
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
  let n = 0
  let markdownRs = document.querySelector('#markdownRs')
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

function mdToHtml(md_text, callBack) {
  let md = window.markdownit()
  let markdownRs = document.querySelector('#markdownRs')
  markdownRs.innerHTML = md.render(md_text)
  markdownRs.scrollTop = 0
  callBack && callBack.call()
}

function targetBlank(callBack){
  let allA = document.querySelectorAll('#markdownRs a')
  allA.forEach((item)=>{
    item.target = '_blank'
  })
  callBack && callBack.call()
}