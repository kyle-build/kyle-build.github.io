---
title: React 调度为什么不用微任务
date: 2026-08-19
categories:
  - React
---

这条笔记从 `react-core-learning` 迁入，只保留结论。完整实验在仓库的 `mini-react`。

React 的 Scheduler 不用 `Promise` 微任务，也不把 `requestIdleCallback` 当主路径，而是用 `MessageChannel` 这类**宏任务**来推进工作循环。

原因很直接：

- 微任务队列会一直清空到空。如果调度自己不断产生新的微任务，渲染和输入会被饿死。
- `requestIdleCallback` 空闲时机不稳定，Safari 支持也不完整。
- `MessageChannel` 能给出跨浏览器更一致的宏任务节拍，方便按优先级让出主线程。

这也是 Fiber 要把工作切成小单元的前提：单次占用主线程超过约 50ms 就会变成 Long Task，点击和滚动会卡住。
