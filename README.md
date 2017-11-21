### Imitation_DisneyApp

### 目的和功能
一开始，为了完全掌握vue-cli全家桶的用法，将vue、vuex、vue-router、vue-axios、vue-swipe、autoprefixer-loader、css-loader、babel、eslint、express、webpack、npm、bower等技术整合使用，然后翻墙到迪士尼美国官网作为模仿的项目

### 项目功能：
网站是响应式网站，在屏幕小于一定宽度的时候，页面转换成移动端的页面，
网站可以注册，登录
网站也可以看视频，看资讯
网站应用了大量css3的新特性

### 技术选型
原因分析
父子组件，通过data属性进行状态管理；在一些兄弟组件上，通过vuex进行总的状态管理，
路由控制，通过vue-router进行，路由控制
vue只是提供view层的方法，无法进行请求，vue-axio为view提供向外发出请求
引入vue-swipe提供方法，制作轮播图
autoprefixer-loader会为css样式提供前缀
babel可以将.vue文件转为.js文件
eslint进行代码检查
express开启服务器
webpack打包文件
bower、npm下载项目所需模块

### 目录结构
bower_components/
使用bower下载模块
node_modules/
使用npm下载模块
build/
webpack开启服务器，打包文件的文件夹
config/
配置文件
src/
开发项目的文件夹
dist/
打包往后的文件所在的文件夹






