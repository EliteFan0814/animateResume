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

  此前就职于上海世邦工业科技集团，从事电商部门搜索引擎优化，网站制作和维护工作，为部门写过一些提高工作效率
  的 js 插件和基于 jQuery 的商务通留言应用，极大提高客户留存率。
  熟练使用 HTML DIV CSS 进行网页布局和制作，以及 HTML5 语义化 标签和 CSS3 动画
  熟练使用原生 JavaScript 和 jQuery 常用 API，熟练使用 ES6 语法，熟悉 ES6 的常用语法和新特性
  对前端工程化有一定理解，能够配置并使用 webpack 环境搭建工具
  有移动端和微信小程序开发经验，能够使用动态 rem 等响应式开发技术适配移动端 web 应用
  熟悉 Vue 框架，能够使用包括 vue-router vuex 在内的 Vue 全家桶开发 web 项目
  了解 node.js ，使用 node.js 写过简单的注册登陆服务器
  对 HTTP 请求响应等相关知识有系统理解，了解常用的 web 性能优化方案

  ## 2. 技能介绍
  熟练使用 **HTML** **CSS** **jQuery** 进行日常网页开发
  熟练使用 **ES6** 语法的常用 api ，以及一些新的语法特性
  有较扎实的原生 **javaScript** 基础
  熟悉使用 **Vue** 框架
  有 **Node.js** 相关经验
  有 **微信小程序** 相关开发经验

  ## 3. 项目介绍
  1. [思维共享平台](https://elitefan0814.github.io/sharing-blog/dist/index.html#/)
  2. [微信小程序](https://github.com/EliteFan0814/aifanyi-translate)
  3. [仿写 CNode 社区](https://elitefan0814.github.io/cnodeImitation/dist/index.html)
  4. [在线 canvas 画板](https://elitefan0814.github.io/firstdemo/Canvas.html)
  5. [仿键盘导航页面](https://elitefan0814.github.io/firstdemo/kbd.html)
  6. [无缝轮播](https://elitefan0814.github.io/firstdemo/swiper_fifth_loop.html)
  7. [响应式商务通](https://elitefan0814.github.io/businessSites/show.html)
  8. [动态简历制作](https://elitefan0814.github.io/animateResume/)
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