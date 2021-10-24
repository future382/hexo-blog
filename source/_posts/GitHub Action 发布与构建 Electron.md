---
title: GitHub Action 构建并发布 Electron 应用
date: 2021-10-24
tags:
-  程序员节 1024
- Electron
- GitHub
- 持续集成
categories:
- 技术
---
白嫖 GitHub Action 的全平台无墙高速机器构建、发布 Electron 应用。
<!--more-->
呃，既然你点进来了，我就象征性地认为你已经懂得 GitHub Action 以及 Electron 是个什么东西了。

这里我们需要构建 Electron，所以使用 [Electron Builder](https://electron.build/)

总的来说，流程跟咱自己电脑上构建发布是一样的

- 进入代码文件夹（ Action 的流程是 Clone）
- 运行 `npm install`
- 运行 `npm install -g electron-builder`
- 运行 `electron-builder -win`
- 发布

很好的一点就是，国外electron builder的构建简单的很，下载那是快得很，electron的编译文件1秒就下完了

![](https://i.loli.net/2021/10/24/A91etv87S54GFJc.png)

这里直接贴出我的 action yml 文件

```yml
name: Build & Release

on:
  push:
    branches:
      - main
    tags:
      - v*
  pull_request:

jobs:
  build:
    name: Build Win
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v2.3.5
      - name: Setup Node.js
        uses: actions/setup-node@v2.4.1
        with:
          node-version: 16.x
          cache: npm
      - name: Install
        run: npm install
      - name: Install The Electron Builder
        run: npm install -g electron-builder
      - name: Make
        if: startsWith(github.ref, 'refs/tags/')
        run: electron-builder --win -p never
      - name: Release
        uses: softprops/action-gh-release@v1
        if: startsWith(github.ref, 'refs/tags/')
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          draft: true
          files: |
            build/*Setup*.exe
```
这里为了防止过多构建发布，只会在打tag的时候才会构建。

其中困扰我很久的地方就是这个make，老是自动publish。

然后你需要在 (GitHub Tokens)[https://github.com/settings/tokens] 新建一个token。注意保存，你关上页面再也看不到它了。

然后在 仓库的 `Settings=>secrets` 新建一个secrets，命名为TOKEN，内容就是你上一步的token.

然后随便打个tag，试试效果吧

当然tag的名称不能是`1.0.1`这种或者`1.01`这种，必须是`v1.0.1`这种用`v`开头的。