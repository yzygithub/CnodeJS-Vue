`vue init webpack CnodeJS-Vue`

```
? Project name cnodejs-vue
? Project description rebuild CnodeJS by Vue
? Author yzygithub <yzyjs2012@gmail.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? No
```
```
cd CnodeJS-Vue
npm install
npm run dev
```

config/index.js 里的 build: { assetsPublicPath: '/', 改为 assetsPublicPath: './'

解释：1.将 build 的路径前缀修改为 ' ./ '（原本为 ' / '），是因为打包之后，外部引入 js 和 css 文件时，如果路径以 ' / ' 开头，那么在本地是无法找到对应文件。所以如果需要在本地打开打包后的文件，就得修改文件路径。

安装 element-ui
`npm i element-ui -S `

顺便安装了sublime 的vue插件。command+shift+p =>Install Package=> vue syntax highlight

main.js里添加
```
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
```

因为改了config/index.js里的dev: {assetsPublicPath: '/',}改成了assetsPublicPath: './' 。

