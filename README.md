# pic-scale
> 基于vue2.x的图片放大镜插件

## 使用步骤

``` bash
# 安装
npm install pic-scale --save

```

``` bash
# 引入
import Vue from 'vue'
import picScale from 'pic-scale'
Vue.use(picScale)

# 在模板中使用
<pic-scale :url="图片地址" :scale="2">

```

## 参数
|  参数名   | 描述  | 默认值
|  :----  | :----  | :--- |
| url  | 图片地址 | 必填 |
| scale  | 方大倍数 | 默认2 放大两倍 |
