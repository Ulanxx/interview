# 个人信息

- **姓名**: 铉嘉伟
- **性别**: 男
- **年龄**: 31 岁
- **学历**: 本科/中北大学信息与通信工程学院
- **求职意向**: 大前端、全栈工程师
- **当前城市**: 杭州
- **电话**: 17666117715
- **Email**: [mifindxuan@gmail.com](mailto:mifindxuan@gmail.com)

# 个人优势

## 项目经验与执行能力

1. **全栈能力**: 可以独立完成前后端应用开发与部署、Android、iOS 应用上架。
2. **项目管理**: 丰富的项目管理经验，擅长技术驱动型项目，能够带领团队在技术方向上做出决策，推动团队技术能力的整体提升。
3. **执行力**: 优秀的项目执行力，成功驱动多项技术项目从概念到实际应用。

## 技术能力

1. **JavaScript 及浏览器机制**: 具备扎实的 JavaScript 基础，深入理解浏览器的运行机制，包括垃圾回收、闭包、原型、原型链等核心概念。
2. **小程序开发**: 全程深度参与小程序底层技术方案的调研、实现、落地、开发者社区建设，见证了从 0 到 1 和从 1 到 100 的过程，包括基础库、构建器、跨端 API 插件体系、低代码、组件库等。
3. **前端框架和工具**: 熟练掌握 React，能熟练使用市面上常见的各类框架。
4. **前端工程化**: 掌握 webpack、esbuild、vite、swc、rollup 等常见构建工具打包和前端应用优化经验，熟悉常见 CI/CD 工具配置和类 Unix 系统使用。
5. **跨端开发**: 理解市面上常见的跨端框架如 Rax、Taro、Remax 等实现原理，原生、类原生 React Native、Android 远程开发经验。
6. **后端开发**: 具备 Node.js、Express、 PostgreSQL、mongoDB、Docker、nginx 等后端、服务器端能力。

# 工作经历

## 涂鸦智能

- **时间**: 2020 年 11 月至今
- **职位**: 资深前端开发工程师
- **基础**: 负责小程序基建、跨端 API 插件体系、低代码平台、开发者平台及管理后台开发、构建涂鸦开发者生态。
- **业务**: 负责小程序 ToC 支付业务、开发智能生活 AI 助手。

### 主要项目

#### 小程序基础库

- 双线程模型：基于 ServiceJSBridge 和 RenderJSBridge 实现逻辑与渲染分离。
- 自定义 AMD 模块系统：实现 define/require 机制，支持运行时模块异步加载。
- Virtual DOM Renderer：自研虚拟 DOM 树和差异算法，实现高效渲染。
- 统一通信层：使用 MessageBridge 实现线程间通信，支持事件订阅、消息分发。
- 统一 API 层：封装原生 API，提供一致性接口。
- 能力扩展体系：支持云能力、原生路由、业务组件接入。
- 插件化设计：实现 AppPlugin 架构，支持 vConsole、IDE、审计工具等插件集成。
- 安全沙箱：实现 SafeScript 执行环境，防止 XSS 和代码注入。
- 质量与性能保障：Jest 单元测试覆盖、指标监控、性能评分工具等。

#### 小程序构建器

- template-compiler 负责模版解析（tyml 文件解析为结构化数据）、指令处理（条件渲染、列表渲染等各种指令）、表达式处理（数据绑定表达式）、代码生成（将解析结果整合转化为基础库可运行的 JS 代码）。
- style-compiler：负责样式解析、样式处理、样式生成，实现样式隔离、样式冲突检测、样式冲突解决。
- 使用 esbuild + swc 进行代码打包，实现代码 bundle 快速生成。

#### Studio 低代码平台

IoT 设备控制应用的低代码开发平台，帮助开发者快速验证设备控制，产品、运营可以快速拖拽出涂鸦官方的设备控制面板模板。

- studio（核心编辑器）- 主应用框架（react、zustand、antd）
- sandbox（沙箱环境）- 沙箱框架（小程序基础库、JSON-Renderer、应用模板）
- moveable（拖拽交互）- 无关框架的拖拽 SDK，负责组件的拖拽、排序、删除等
- ark-extension（组件属性编辑器）- 负责组件开发者开发状态的组件预览与属性编辑器及配置。
- ark-components（组件库）- 基础、业务组件。
- ai-plugin（AI 插件）- 负责 AI 模块的注入与配置（AI Chat 生成主题、模板、组件样式联动、多语言翻译等）
- packager（打包器）- 与云端交互负责派发打包状态与小程序的产码、打包、分发。

#### 跨端 API 插件体系

- 负责小程序、Android、iOS 的跨端 API 插件的开发与维护。
- 元编程：plugin.ts 通过 TS 元编程解析 API 插件的元信息，生成多端代码。
- 提供 CLI 工具与 CI 平台流程：自动化生成 API SDK、文档、测试用例、错误码、类型定义等，发布流程同步 npm、maven。
- 结合 Native App 构建流程，实现 APP 打包时对 API 的版本化依赖，以及开发态的代码提示。

### 主要业绩:

1. **小程序体系**: 作为主程完成了涂鸦自研小程序基础库与构建器的开发，实现了从 0 到 1 的突破，获得 2021 年涂鸦年度优秀员工。
2. **跨端 API 插件体系**: 主导并申请专利，支撑数千个 API，成为 Tuya API 构建的核心。
3. **低代码平台**: 成功上线小程序低代码平台，支持 50+ 组件，覆盖多个品类的 IoT 智能小程序低代码搭建。

### 体验项目

1. **涂鸦小程序官网**: [https://developer.tuya.com/cn/miniapp/](https://developer.tuya.com/cn/miniapp/)
2. **涂鸦小程序开发者平台**: [https://platform.tuya.com/miniapp](https://platform.tuya.com/miniapp)
3. **Studio 低代码平台**: [https://platform.tuya.com/mp-studio](https://platform.tuya.com/mp-studio)

## 趣头条

- **时间**: 2019 年 10 月 - 2020 年 11 月
- **职位**: 资深前端开发工程师

### 核心内容：

1. **萌推商家端 APP 开发**: 使用 React Native 进行开发，基础业务搭建，原生模块开发。
2. **RN 热更新平台搭建**: 为趣头条内部应用提供 RN 热更新方案，接入（趣头条客户端、米读的部分业务及萌推全量包），热更新资源包 95% 以上下达成功率。
3. **技术培训**: 对团队进行 RN、Flutter 技术培训，覆盖 RN、Flutter 等跨平台框架的业务开发/基础架构/热更新原理/Native bridge。
4. **客户端壳工具**: 客户端壳工具: 使用 Electron 开发客户端壳工具，提供 Electron 接入能力与客户端调用能力，完成萌推商家客服 IM PC 客户端的技术对接。

## Miraco.io

- **时间**: 2017 年 9 月 - 2019 年 10 月
- **职位**: 资深前端开发工程师

### 核心内容：

1. **社区电商 + NFT 发售平台**: 负责商品创建、商品 NFT 铸造、商品结合 NFC、二维码录入 NFT 信息、NFT 钱包（领取商品 NFT、交易）等功能。迭代开发了社区电商 + NFT 发售平台的业务，在有限的时间完成了网红 NFT 商品发布平台，包括商品上链、NFT 绑定实体商品、小程序、App 上线（帮助销售业务团队快速对接 GD 权志龙限量礼盒的发售，不到 10 分钟的时间里创造了超过 100 万美元的销售额）。
2. **WhatsmodePay 聚合支付**: 开发 PayPal、Asiabill、Stripe 等海外支付平台的聚合支付组件，负责组件 SDK 与 API SDK。
3. **电商独立站低代码搭建系统**: 负责低代码搭建系统的开发与维护。

## 平安科技

- **时间**: 2015 年 10 月 - 2017 年 9 月
- **职位**: 前端、Android 开发工程师

### 核心内容：

1. 平安信用卡: 负责主站 Android 版本的开发，包括卡片激活、密码管理、188 红包、云闪付（NFC）、用户登录、设置、小额免密等业务。
2. 平安口袋银行: 原有信用卡 App 主站业务进行 H5 迁移到口袋银行。

# 致谢

愿意承担前端、移动端、全栈工程师的工作，渴望加入一个优秀的团队并愿意与其共同成长。感谢您花时间阅读我的简历，期待能有机会和您共事。
