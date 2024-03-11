import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "廖章盛",
  initials: "LZS",
  location: "广西南宁市",
  locationLink: "https://www.google.com/maps/place/Nanning",
  about:
    "无所事事的小混混",
  summary:
    "性别男，爱好女",
  avatarUrl: "https://telegraph-image-5m5.pages.dev/file/54214ec94d78d0498e813.jpg",
  personalWebsiteUrl: "https://www.liaozhangsheng.icu",
  contact: {
    email: "liaozhangsheng@163.com",
    tel: "+8618176958069",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/liaozhangsheng",
        icon: GitHubIcon,
      },
    ],
  }, 
  education: [
    {
      school: "东华大学（211）",
      degree: "自动化专业本科学历",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "腾讯游戏",
      link: "https://game.qq.com/",
      badges: ["Remote"],
      title: "王者荣耀战术策略优化",
      logo: ParabolLogo,
      start: "2015",
      end: "2025",
      description:
        "该项目深入研究王者荣耀以提高游戏技术和竞争力，涵盖战术策略制定、团队协作提升以及个人技能优化。作为核心成员，我分析英雄和技能以制订对抗策略，协调成员配合以增强团队效能，并通过练习提高操作技巧。项目成就包括制定有效战术、提升团队整体战斗力并多次助力逆转比赛结果，个人也常获“MVP”荣誉。",
    },
    {
      company: "Riot Games",
      link: "https://www.riotgames.com/zh-cn",
      badges: ["Remote"],
      title: "英雄联盟战术性打野策略实施",
      logo: ParabolLogo,
      start: "2015",
      end: "2025",
      description:
        "该项目在英雄联盟游戏中探索了深层次的战术性打野策略与团队领导力，涵盖了游戏地图、资源分配、英雄互动分析等方面，同时着重于优化团队协作和执行战术。我担任核心角色，在制定打野路线、资源管理、突击时机等方面负责战略规划，并领导团队作战，调整战术以适应游戏的不断变化。项目成果表现在成功引入有效策略，确保了早期游戏阶段的优势，提升了团队协作效率，并能在比赛中实现局势逆转。个人在局势掌控能力上获得了显著提升，成了团队的骨干力量。",
    },
    {
      company: "游卡网络",
      link: "https://yokagames.com/",
      badges: ["Remote"],
      title: "三国杀高级策略卡牌游戏运营",
      logo: ParabolLogo,
      start: "2015",
      end: "2025",
      description:
        "通过在三国杀卡牌游戏平台上的项目，我深化了对卡牌策略的理解，并以此提升了在复杂情境下的决策能力和心理素质。我的主要职责包括研究不同卡牌组合与角色的战术策略，实施心理战术来影响对手决策，并准确掌握游戏局势以调整策略，确保游戏的胜利。在项目过程中，我成功地运用了多种卡牌策略，有效地利用心理战术误导对手，这不仅反映了我对游戏规则的深入理解，也显示了我的局势掌控能力。通过这些体验，增强了我的游戏技巧，更提升了决策能力、心理调节和团队合作能力。",
    },
  ],
  skills: [
    "C/C++",
    "Python",
    "OpenCV",
    "Git",
    "Linux",
  ],
  projects: [
    {
      title: "C++ / OpenCV 魔方识别并还原",
      techStack: [
        "C++",
        "OpenCV",
      ],
      description: "使用 OpenCV 对魔方进行识别，并使用 Kociemba 算法（C++实现）做到10 ms 还原魔方",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://www.bilibili.com/video/BV1sS421P78z",
      },
    },
  ],
} as const;
