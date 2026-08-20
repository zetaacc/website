---
slug: a2a-join-aaif
title: A2A 入列 AAIF：五个开源项目，如何拼出 Agent 时代的"操作系统"
authors: [node,]
tags: [A2A,AAIF,Agent,Agentic,AI,opensource,开源,协议,基金会]
---

> 2026 年 8 月 17 日，Agentic AI Foundation（AAIF）官方博客宣布：Agent2Agent（A2A）协议正式成为该基金会托管的第五个开源项目。至此，AAIF 的"开放智能体技术栈"五层拼图全部就位——从上下文、运行时、工具连接、流量管控到 Agent 间互操作，每个关键环节都有了中立治理的开源底座。

---

## 一、新闻背后："迟来却必然"的官宣

A2A 加入 AAIF 的新闻，表面看是一次项目归属的变更，实质上是整个 Agent 生态从"百花齐放的发明期"走向"标准收敛的生产期"的标志性事件。

回顾时间线，这条路的每一步都有迹可循：

- **2025 年 4 月**：Google 在 Cloud Next 上发布 A2A 协议，提出"Agent 之间如何发现、委派与协作"这一命题；
- **2025 年 6 月**：Google 将 A2A 捐赠给 Linux Foundation，AWS、Cisco、Microsoft、Salesforce、SAP、ServiceNow 等成为创始组织；
- **2025 年 8 月**：IBM 的 Agent Communication Protocol（ACP）正式并入 A2A，两大厂商标准走向合并，行业明确押注"单一共享标准"而非"多协议竞争"；
- **2025 年 12 月**：Linux Foundation 宣布成立 AAIF，以 MCP、AGENTS.md、goose 为创始项目；
- **2026 年 3 月 12 日**：A2A **v1.0 正式发布**，成为首个稳定版规范——新增多协议绑定、版本协商、多租户与签名 Agent Card，标志着协议从实验走向生产就绪；
- **2026 年 5 月**：v1.0.1 补丁发布，修正 HTTP 绑定与 TaskStatus 规范；
- **2026 年 8 月 17 日**：A2A 正式成为 AAIF 托管项目，补齐了技术栈最后一块拼图。

150+ 组织、超过 22,000 的 GitHub Star、三大公有云全面接入——A2A 用一年时间从"Google 的实验"长成了"生产级行业标准"。而入列 AAIF，则是给这套标准找到了一个"没有单一参与者能控制"的中立之家。

---

## 二、AAIF：为 Agent 生态造一个"中立之家"

在展开五个项目之前，有必要先理解 AAIF 本身。

Agentic AI Foundation 于 2025 年 12 月由 Linux Foundation 发起，创始参与方包括 OpenAI、Anthropic、Block、AWS、Google、Microsoft、Bloomberg、Cloudflare 等。它的定位是：**开放标准智能体 AI 技术栈的中立家园**。

几个关键数据可以说明它的份量：

- 截至 2026 年 8 月 13 日，AAIF 成员总数已达 **247 家**，仅当季度就新增 57 家（3 家 Gold、33 家 Silver、21 家 Associate）；
- 新增 Gold 成员包括 **阿里巴巴** 和 **Visa**，支付、银行、供应链等合规敏感行业正在加速入场；
- 基金会发布的《Agentic AI Momentum Report》已跟踪 **116 个开源项目**，覆盖智能体技术栈的五个层次。

这里的核心逻辑，是 Linux Foundation 几十年验证过的模型：**当基础设施组件被单一厂商持有，下游团队就要承受该厂商的路线图与发布节奏；当它被开放治理，社区才能决定"构建什么、何时构建"。** A2A 的 150+ 合作组织里包含大量直接竞争对手，这种广度只有在无人能单方面掌控的治理结构下才能维持。

---

## 三、核心主角：A2A 协议到底解决什么问题？

### 3.1 痛点：集成成本不在 Agent 本身，而在 Agent 之间

供应链与金融行业的工程师在把多智能体系统部署到生产时，反复遇到同一个问题：**基于不同框架构建的 Agent 无法直接交接任务**。每一次新增厂商关系，都要从零编写一份点对点的定制集成代码。真正的成本不是 Agent 本身，而是 Agent 之间的集成。

### 3.2 机制：Agent Card + JSON-RPC + Task 生命周期

A2A 的解法是一套轻量、框架无关的通信契约：

- **Agent Card（Agent 名片）**：每个 Agent 发布一份结构化描述，声明"我能做什么、如何触达我"。其他 Agent 读取名片即可完成能力发现，无需人类居中牵线；
- **JSON-RPC 2.0 over HTTP(S)**：同步请求、SSE 流式、异步推送三种交互模式，支持长时任务与人机协作；
- **Task 对象**：标准化的任务生命周期跟踪，让协作过程结构化、可观测；
- **Opaque Execution（不透明执行）**：协作双方无需暴露内部思维链、执行计划或工具实现，只交换公共契约——Agent 是"不透明服务"，而非简单的工具集成。

这组设计让 A2A 与 MCP 形成清晰分工：**MCP 解决"Agent 如何用工具"（纵向），A2A 解决"Agent 如何与 Agent 协作"（横向）**。一个生产环境里往往两者并用：MCP Server 向单个 Agent 暴露工具，A2A 把多个 Agent 编组成系统。

### 3.3 生产实践：已经从 PPT 走到了操作系统

A2A 的价值不止于规范，它已经在移动平台、云 AI 基础设施、金融、供应链和企业 IT 中大规模落地：

| 场景 | 落地形态 |
| --- | --- |
| **华为 HarmonyOS** | 将 A2A 标准化为 OS 级助手 **Celia** 与 App 内 Agent 之间的通信协议，支持长任务交接、UI 控制、上下文推荐 |
| **腾讯微信** | 成为首批与华为等 Android OEM 助手通过 A2A 对接的主流 App，实现经 AI 助手的消息、语音与视频通话（双授权流程） |
| **Google Cloud** | ADK、Agent Engine、Cloud Run、GKE 全面支持开发与部署 A2A Agent |
| **Microsoft Azure** | AI Foundry 支持 Agent 暴露 A2A 端点并通过标准发现机制寻找外部 Agent |
| **AWS** | Bedrock AgentCore 可托管与运行 A2A Server，跨框架、跨云互通 |
| **代理支付（AP2）** | Google Cloud 与 PayPal 在 A2A 之上扩展 Agent Payments Protocol，购物与商家 Agent 贯穿商品发现、定价、履约，AP2 提供支付授权层 |

---

## 四、核心分析：AAIF 五个开源项目现状

AAIF 的技术栈设计精妙之处在于——它不是五个无关项目的堆叠，而是**对"一个 Agent 从思考到执行到协作"全过程的分层抽象**。以下按技术栈自底向上逐层拆解。

### 4.1 第一层 · 指令与上下文：AGENTS.md

- **定位**：标准化项目如何向 AI Agent 传达期望、约定与操作指令。
- **一句话概括**：**"给机器读的 README"**。
- **现状要点**：
  - 由 OpenAI 于 2025 年 8 月提出，现由 AAIF 托管；
  - 采用纯 Markdown、命名固定为 `AGENTS.md`、位于仓库根目录，规则极度简单——"简洁即是设计"；
  - 支持 monorepo 嵌套、closest-file-wins 解析，帮助 Agent 在有限的上下文窗口里快速找到高优先级信息；
  - 已被超过 6 万个开源项目采用，Claude Code、Cursor、GitHub Copilot、OpenAI Codex、Windsurf 等主流编码工具均原生支持或通过 symlink 读取。
- **生态观察**：这是五层中"最轻"的一层，却承担了**语境标准化**的职能。当大量 LLM 工具各自发明配置文件格式（CLAUDE.md、.cursor/rules、copilot-instructions）时，AGENTS.md 正在成为那个"单一事实来源"（single source of truth）。有意思的是，研究也提醒：上下文文件并非越详细越好——不必要的约束反而会拉低 Agent 任务成功率、抬高推理成本。**"最少必要指令"是这个标准的哲学。**

### 4.2 第二层 · Agent 运行时：goose

- **定位**：Agent 推理、规划、调用能力、执行任务的运行环境。
- **一句话概括**：Agent 的"身体"，承载思考与行动。
- **现状要点**：
  - 由 Block 贡献的本地优先（local-first）Agent 运行时；
  - 是 AAIF 创始项目之一，也是 MCP Dev Summit 上重点教学的三项技术之一；
  - 与 agentgateway 有原生集成，可为其提供治理与控制能力。
- **生态观察**：相比 MCP 和 A2A 的话题热度，goose 属于"闷声做事"的一层。它把"Agent 到底跑在哪个环境里"这个问题具体化——本地、容器、云上皆可。**它和 agentgateway 的联动值得关注**：运行时 + 网关，构成了"执行 + 治理"的闭环。

### 4.3 第三层 · Agent 到工具的连接：MCP

- **定位**：标准化 Agent 如何连接和交互工具、数据源、应用与服务。
- **一句话概括**：**"给 AI 的一双手"**，Agent 获取外部能力的标准通道。
- **现状要点**：
  - 由 Anthropic 于 2024 年底提出，是 AAIF 三大创始项目之首；
  - 已形成围绕 MCP 的完整生态：MCP Server 暴露工具、MCP Client 消费工具；
  - AAIF 以 MCP 命名了旗舰会议品牌 MCPCon，2026 年全球活动（AGNTCon + MCPCon）覆盖北美、欧洲、亚洲、印度与非洲十余城；
  - 与 A2A 形成互补双协议：MCP 管"纵向"（Agent→工具），A2A 管"横向"（Agent→Agent）。
- **生态观察**：MCP 是整个 AAIF 生态中**采纳度最高、商业转化最成熟**的一层。它定义了"工具"这个基本单元，几乎所有 Agent 框架和云平台都已兼容。某种意义上，**MCP 是 AAIF 生态的"价值锚点"**——其它四层都在围绕"Agent 获取能力、Agent 交付协作"这条主线展开。

### 4.4 第四层 · 流量中介与管控：agentgateway

- **定位**：位于 Agent 系统与其运行基础设施之间的边界，管理路由、策略与可观测性。
- **一句话概括**：**Agent 世界的"服务网格 + API 网关"**。
- **现状要点**：
  - 由 Solo.io 于 2025 年 3 月创建，2025 年 8 月 25 日捐赠 Linux Foundation，2026 年 6 月 4 日正式成为 AAIF 第四大托管项目（Growth 阶段）；
  - **统一数据面**：单一 Rust 二进制同时处理 MCP、A2A、LLM 推理、HTTP、gRPC 流量——"三种合一"（LLM + MCP + A2A）；
  - **安全控制**：JWT、API Key、RBAC、外部授权、mTLS、CORS，以及恶意工具行为防护；
  - **可观测性**：面向 AI/Agent 工作流的指标、追踪、访问日志，可对接 SIEM；
  - **治理能力**：CEL 声明式策略、限流、提示词护栏、预算控制、模型别名，MCP 虚拟化（多 MCP Server 联邦为单一接入点）；
  - **部署形态**：裸机、VM、容器、Kubernetes 均可，完整兼容 Gateway API，支持 xDS 无中断热更新；
  - **社区规模**：周下载量从约 10 万增长至 **100 万+**，总下载量突破 **700 万**；300+ 活跃贡献者，来自 60+ 组织（含 CoreWeave、Red Hat、Adobe、Salesforce、Microsoft 等）；
  - 已被 **Istio** 采纳为 AI 网关场景的数据面选项。
- **生态观察**：这是五层中**最具"基础设施"气质**的项目，也是把传统云原生经验（服务网格、API 网关、零信任）迁移到 Agent 时代的关键桥梁。平台团队终于可以用熟悉的运维原语（安全、可观测、路由、治理、可靠性）管理 Agent 流量，而无需另起炉灶。**agentgateway 的存在，让"Agent 流量"第一次获得了与 HTTP 流量同等的可治理性。**

### 4.5 第五层 · Agent 间互操作：A2A

- **定位**：标准化独立 Agent 如何跨系统、跨组织边界相互发现、通信、委派任务与交换结果。
- **一句话概括**：**"给 AI 的同事关系"**，让不同厂商、不同框架的 Agent 能够对话。
- **现状要点**：
  - 2026 年 8 月 17 日成为 AAIF 第五个托管项目，补上技术栈最后一块拼图；
  - 150+ 组织支持，技术指导委员会（TSC）覆盖 Google、Microsoft、AWS、Cisco、Salesforce、ServiceNow、SAP、IBM 八家厂商；
  - 2026 年 3 月 v1.0 稳定版：多协议绑定、版本协商、多租户、签名 Agent Card（密码学身份验证）；
  - 生产落地横跨移动 OS（华为 Celia）、超级 App（微信）、三大云（Google/Azure/AWS）、支付（AP2）；
  - 设计核心：Agent Card 发现 + JSON-RPC 交互 + Task 生命周期 + 不透明执行。
- **生态观察**：A2A 是 AAIF 五层中**"叙事天花板"最高**的一层——它直接指向"Cisco 工程师所说的 Internet of Agents（Agent 互联网）"这一远景。当单个 Agent 的能力被 MCP 放大、被 goose 承载、被 AGENTS.md 规约、被 agentgateway 治理，最后真正让它们"成为社会"的，正是 A2A 这层互操作协议。

---

## 五、开源生态视角：五个项目，一个战略意图

把五层放在一起看，AAIF 的布局逻辑非常清晰：

| 技术栈层级 | 项目 | 核心贡献方 | 一句话职责 | 关键状态 |
| --- | --- | --- | --- | --- |
| 指令与上下文 | **AGENTS.md** | OpenAI | 告诉 Agent"项目怎么干活" | 6万+ 项目采用，主流工具原生支持 |
| Agent 运行时 | **goose** | Block | Agent 思考与执行的环境 | 创始项目，本地优先 |
| Agent→工具 | **MCP** | Anthropic | Agent 如何用工具/数据 | 生态最成熟，旗舰会议品牌 |
| 流量管控 | **agentgateway** | Solo.io | Agent 流量的安全/治理/可观测 | Rust 统一数据面，周下载 100万+ |
| Agent→Agent | **A2A** | Google | Agent 之间发现/委派/协作 | v1.0 生产就绪，150+ 组织 |

几点值得深挖的观察：

**1. 五层恰好对应"人 + 工具 + 团队 + 治理"的软件工程隐喻。**
AGENTS.md 是团队的"工作手册"，goose 是"执行者"，MCP 是"工具箱"，agentgateway 是"信息安全部 + 网关"，A2A 是"跨部门协作协议"。AAIF 实际上是在用三十年企业软件工程的经验，为 Agent 文明铺设基础设施。

**2. 三大创始项目分属三家竞争巨头（OpenAI、Anthropic、Block），这本身就是中立治理的最大证明。**
如果 AAIF 只是某一家厂商的"后花园"，这些项目根本不可能共存。它能同时容纳 OpenAI 的 AGENTS.md 与 Anthropic 的 MCP，说明"无人能控制"不是口号，而是生态得以成立的前提。

**3. 时间线揭示了一个清晰的"标准收敛"规律。**
2025 年是"多协议混战"：A2A 与 IBM ACP 竞争、各家自造配置文件。2026 年则是"单一标准收敛"：ACP 并入 A2A，AGENTS.md 统一配置格式，AAIF 成为共同归宿。**历史经验表明，当标准涉及跨厂商协作时，市场最终会向"单一、开放、中立"收敛——就像当年 TCP/IP 和 HTTP 的结局。**

**4. 商业化路径已经隐现：协议层免费，基础设施层收费。**
协议与规范（AGENTS.md、MCP、A2A）是开放的、中立的，它们负责"定义语言"；而真正产生商业价值的是运行它们的"基础设施"——agentgateway 的治理能力、云平台的原生托管、AP2 的支付授权。这与 Linux 生态"内核免费、企业发行版付费"的商业模式一脉相承。

**5. 亚太力量正在上升。**
阿里巴巴成为 AAIF 新 Gold 成员；华为将 A2A 落地为 OS 级标准、腾讯微信完成 A2A 对接；MCP Dev Summit 首站选在首尔。**亚太厂商正在从"标准接受者"变成"标准共建者"**——这对中国开发者既是机遇也是提醒：要参与标准、影响标准，而不是等待标准。

---

## 六、结语：Agent 的"HTTP 时刻"已到来

A2A 加入 AAIF，宣告了 Agent 通信协议的"HTTP 时刻"：**未来，Agent 之间能否对话，不再取决于它们由谁构建、用什么框架，而取决于它们是否遵守同一份开放契约。**

对于开发者，这意味着两件事：

1. **学习曲线应聚焦"标准"而非"框架"**。框架会过时，而 AGENTS.md、MCP、A2A 这类协议是跨代际的资产；
2. **选择基础设施时，优先考虑"中立治理"的项目**。当你的系统依赖某个协议时，它不应该受制于任何单一厂商的产品决策——这正是 AAIF 存在的全部意义。

从上下文（AGENTS.md）到运行时（goose），从工具连接（MCP）到流量治理（agentgateway），再到 Agent 互操作（A2A）——五个开源项目拼出的，是一张完整的 Agent 时代"操作系统"蓝图。而这套系统最了不起的地方，在于它是**开放的**。

*参考来源：AAIF 官方博客《A2A joins AAIF's open agentic stack》（2026-08-17）、Linux Foundation 官方新闻、agentgateway.dev、a2a-protocol.org、AAIF Momentum Report 等。*

---
