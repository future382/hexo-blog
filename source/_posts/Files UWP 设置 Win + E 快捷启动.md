---
title: Files UWP 设置 Win + E 快捷启动
date: 2021-09-25
tags:
-  Windows
categories:
- 技术
---
是的，即便是 Win11，Explorer 仍然是如此的丑。

<!--more-->

Win11 Explorer，上图：

![啊这](https://cdn.jsdelivr.net/gh/adkinsmpage/ImgBed@main//img/20210925165054.png)

我就想知道微软搞了这么久 Explorer，除了把上面的 Ribbon 菜单改成了平铺 Fluent，还改了啥？？？

咱总不能就这么束手就擒了吧 ~~事实上只不过是做电脑前不知道干什么罢了 /doge~~

Store 里有个文件管理器，叫 `Files`，UI 很好看 ~~比屑微软搞的好多了~~

![舒适~](https://cdn.jsdelivr.net/gh/adkinsmpage/ImgBed@main//img/20210925165545.png)

然后，当我一开机熟练的按下 Win + E...

![啊这](https://cdn.jsdelivr.net/gh/adkinsmpage/ImgBed@main//img/20210925165054.png)

----

Store 里还有一个文件管理器，叫 `RX Explorer`。

他有个好功能，能替换掉 Explorer，注册成 Win + E 的程序。

---

首先打开注册表编辑器，定位到 `HKEY_CLASSES_ROOT\Folder\shell\opennewwindow\command`

有一个名字叫 `(默认)` 的项，先把他打开。

这里需要打开 `%LOCALAPPDATA%\Microsoft\WindowsApps` 文件夹，看看里面有没有 `files.exe`。

有，跳过接下来这一步。没有，好好看着。 ~~/doge~~

在 PowerShell 中输入：

```powershell
Get-Command files.exe
```

然后看看你的环境变量中没有没有 `%LOCALAPPDATA%\Microsoft\WindowsApps` 这个环境变量（注意，是转换后的目录，例如 `C:\Users\rafae\AppData\Local\Microsoft\WindowsApps\`）。

然后，一切妥当，重新来到注册表编辑器，在刚才我们打开的项里输入你的 `files.exe` 的 **绝对路径**，例如 `C:\Users\rafae\AppData\Local\Microsoft\WindowsApps\files.exe`。

保存，按下 `Win + E` 试试？