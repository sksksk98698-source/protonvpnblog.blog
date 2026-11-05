/**
 * 2026 全平台第三方代理客户端数据大库
 * 基于《第三方代理客户端.txt》整理
 */

export interface ProxyClient {
  name: string;
  platform: "Windows" | "Android" | "iOS" | "macOS" | "Linux" | "OpenWrt";
  features: string;
  kernel: string;
  downloadType: "GitHub" | "App Store" | "官方文档" | "官网";
  downloadUrl: string;
  recommended: boolean;
  description: string;
}

export const PROXY_CLIENTS: ProxyClient[] = [
  // Windows
  {
    name: "Clash Verge Rev",
    platform: "Windows",
    features: "Mihomo 内核、规则分流、TUN 模式、中文界面友好",
    kernel: "Mihomo (Clash.Meta)",
    downloadType: "GitHub",
    downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
    recommended: true,
    description: "当前 Windows 首选主力客户端，界面美观现代，原生内置 TUN 虚拟网卡模式，全面支持 VLESS、Hysteria2 等新协议。"
  },
  {
    name: "v2rayN",
    platform: "Windows",
    features: "Xray/sing-box 多核心支持，海量节点与协议深度调校",
    kernel: "Xray / sing-box",
    downloadType: "GitHub",
    downloadUrl: "https://github.com/2dust/v2rayN/releases",
    recommended: true,
    description: "老牌经典多协议客户端，支持自定义路由规则，适合有多协议节点混合管理与批量测速需求的高级用户。"
  },
  {
    name: "FlClash",
    platform: "Windows",
    features: "Flutter 打造、跨平台视觉统一、极致简洁轻快",
    kernel: "Mihomo",
    downloadType: "GitHub",
    downloadUrl: "https://github.com/chen08209/FlClash/releases",
    recommended: false,
    description: "基于 Flutter 框架开发的跨平台图形客户端，内存开销轻盈，UI 优雅流畅。"
  },
  {
    name: "Hiddify",
    platform: "Windows",
    features: "全协议自动智能优选、一键多平台通用",
    kernel: "sing-box",
    downloadType: "GitHub",
    downloadUrl: "https://github.com/hiddify/hiddify-next/releases",
    recommended: true,
    description: "全自动根据连接质量筛选节点的现代客户端，界面极简傻瓜化，适合纯新手。"
  },

  // Android
  {
    name: "v2rayNG",
    platform: "Android",
    features: "原生 Xray 协议支持，分应用代理，省电稳定",
    kernel: "Xray",
    downloadType: "GitHub",
    downloadUrl: "https://github.com/2dust/v2rayNG/releases",
    recommended: true,
    description: "安卓端安装量最高、历史最悠久的代理工具，支持分应用代理，后台待机极其省电。"
  },
  {
    name: "FlClash for Android",
    platform: "Android",
    features: "Mihomo 内核、分流策略组直观、 Material 风格",
    kernel: "Mihomo",
    downloadType: "GitHub",
    downloadUrl: "https://github.com/chen08209/FlClash/releases",
    recommended: true,
    description: "安卓端新一代极具设计感的 Clash 客户端，策略组切换与节点延迟对比直观清晰。"
  },
  {
    name: "Karing",
    platform: "Android",
    features: "基于 sing-box，规则分流完善，支持复杂订阅",
    kernel: "sing-box",
    downloadType: "GitHub",
    downloadUrl: "https://github.com/KaringX/karing/releases",
    recommended: true,
    description: "跨平台的新晋高好评客户端，配置直观，能优雅解析各类复杂格式订阅链接。"
  },

  // iOS
  {
    name: "Shadowrocket (小火箭)",
    platform: "iOS",
    features: "iOS 必备神器、全协议覆盖、分流规则丰富、扫码即连",
    kernel: "自研高性能核心",
    downloadType: "App Store",
    downloadUrl: "https://apps.apple.com/app/shadowrocket/id932747118",
    recommended: true,
    description: "iPhone/iPad 必备装机软件，售价 $2.99（需非国区 Apple ID），支持几乎全网所有协议与一键订阅扫码。"
  },
  {
    name: "Stash",
    platform: "iOS",
    features: "iOS 上的优质 Clash 替代方案，策略组覆写完善",
    kernel: "Clash 内核兼容",
    downloadType: "App Store",
    downloadUrl: "https://apps.apple.com/app/stash/id1596063349",
    recommended: true,
    description: "专为 iOS 深度定制的 Clash 风格高级规则代理，支持按需连接与自动化快捷指令。"
  },
  {
    name: "Quantumult X (圈 X)",
    platform: "iOS",
    features: "极客级请求重写、JS 脚本支持、深度网络分析",
    kernel: "自研网络引擎",
    downloadType: "App Store",
    downloadUrl: "https://apps.apple.com/app/quantumult-x/id1453926894",
    recommended: false,
    description: "针对高级玩家的硬核规则工具，具备强大的网络抓包、脚本重写与个性化策略管理能力。"
  },

  // macOS
  {
    name: "Clash Verge Rev for Mac",
    platform: "macOS",
    features: "原生适配 Apple Silicon (M1~M4) 与 Intel，TUN 系统全局代理",
    kernel: "Mihomo",
    downloadType: "GitHub",
    downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
    recommended: true,
    description: "Mac 平台体验绝佳的代理客户端，完美支持系统深色模式与原生通知，TUN 模式秒破终端代理难题。"
  },
  {
    name: "Surge Mac",
    platform: "macOS",
    features: "工业级高级网络调试与智能网关开发平台",
    kernel: "Surge 核心",
    downloadType: "官网",
    downloadUrl: "https://nssurge.com/",
    recommended: false,
    description: "Mac 平台旗舰级网络开发与代理神器，适合对网络有极致控制欲与高阶调试需求的极客与工程师。"
  },

  // Linux
  {
    name: "Clash Verge Rev (Linux)",
    platform: "Linux",
    features: "支持 AppImage, Deb, RPM 格式，桌面环境无缝集成",
    kernel: "Mihomo",
    downloadType: "GitHub",
    downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
    recommended: true,
    description: "Linux 桌面用户的最佳选择，免去了无图形界面手写配置文件的繁琐痛点。"
  },
  {
    name: "v2rayA",
    platform: "Linux",
    features: "WebUI 网页端控制面板、透明代理、适合软路由与服务器",
    kernel: "Xray",
    downloadType: "GitHub",
    downloadUrl: "https://github.com/v2rayA/v2rayA/releases",
    recommended: true,
    description: "通过浏览器 Web 界面进行节点管理与全局透明代理，非常适合 Linux 软路由与家庭服务器部署。"
  },

  // OpenWrt
  {
    name: "OpenClash",
    platform: "OpenWrt",
    features: "软路由全屋翻墙王牌、DNS 防污染、局域网全设备透明代理",
    kernel: "Mihomo",
    downloadType: "GitHub",
    downloadUrl: "https://github.com/vernesong/OpenClash/releases",
    recommended: true,
    description: "软路由常驻的首选插件，实现全屋电视、手机、电脑免装软件无感科学上网，杜绝 DNS 污染。"
  }
];
