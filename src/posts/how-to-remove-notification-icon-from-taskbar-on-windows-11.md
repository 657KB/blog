---
title: 如何在 Windows 11 中移除任务栏上的通知图标
date: '2024-02-02'
updated: '2024-02-02'
tags: [技术, Windows 11]
excerpt: Windows 11 的界面设计就是一坨屎。
---

如果你不幸拥有一台 Windows 11 设备，且当看向屏幕右下角这个铃铛图标时感到头晕、恶心或者呼吸困难，那么这篇文章会帮助你解决这坨史一般的界面设计。

![windows 11 taskbar notification icon](/images/win11-notifi-icon-taskbar.jpg)

事先说明，这坨答辩和日历面板是绑定在一块的，如果删掉了这坨答辩，那么点击任务栏上的时间将不会再打开日历面板。Fuck you, Windows！

经过一番搜索，我在网上找到了这篇教程，里面详细叙述了如何移除该图标：  
[Enable or Disable Notification Center in Windows 11](https://www.elevenforum.com/t/enable-or-disable-notification-center-in-windows-11.6187/)

这篇文章提供了两种方案：

1. [使用本地策略组编辑器](https://www.elevenforum.com/t/enable-or-disable-notification-center-in-windows-11.6187/#One)；
2. [使用注册表](https://www.elevenforum.com/t/enable-or-disable-notification-center-in-windows-11.6187/#Two)。

因为我是家庭版，方案一并不适用（家庭版没有策略组编辑器），所以我选择了方案二，下载并使用了文章中提供的注册表，合并到系统注册表中后重启，烦人的通知图标就消失了。

这里备份一下注册表内容：

**Enable_Notification_Center_for_all_users.reg​**

```text
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\Explorer]
"DisableNotificationCenter"=-

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Explorer]
"DisableNotificationCenter"=-
```

**Enable_Notification_Center_for_all_users.reg​**
```text
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\Explorer]
"DisableNotificationCenter"=dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\Explorer]
"DisableNotificationCenter"=dword:00000001
```

修改后顺眼多了：

![windows 11 taskbar without notification icon](/images/win11-taskbar.png)
