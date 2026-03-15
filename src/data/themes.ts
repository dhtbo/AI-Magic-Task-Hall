import { 
  LucideIcon, Heart, Lightbulb, BookOpen, Globe, Music, Rocket, 
  Gamepad2, Activity, Feather, ShieldCheck 
} from 'lucide-react';

export type CategoryId = 
  | 'charity' 
  | 'life' 
  | 'learning' 
  | 'exploration' 
  | 'art' 
  | 'future'
  | 'game'
  | 'health'
  | 'story'
  | 'safety';

export interface Theme {
  id: string;
  title: string;
  categoryId: CategoryId;
  iconName: string; 
  description: string;
  coreSkills: string[];
  challengeTask: string;
  requiredBlocks: string[];
  highlight: string;
  creationTips: string[];
  taskSteps: string[];
}

export interface Category {
  id: CategoryId;
  name: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'charity',
    name: '爱心公益学院',
    icon: Heart,
    color: 'bg-rose-500',
    description: '关注社会弱势群体与现实痛点，培养社会责任感。'
  },
  {
    id: 'life',
    name: '生活奇思妙想',
    icon: Lightbulb,
    color: 'bg-amber-500',
    description: '解决生活小烦恼，发挥无边际的想象力。'
  },
  {
    id: 'learning',
    name: '超级学习神器',
    icon: BookOpen,
    color: 'bg-blue-500',
    description: '语数外跨学科融合，把死记硬背变成互动探究。'
  },
  {
    id: 'exploration',
    name: '大千世界探索',
    icon: Globe,
    color: 'bg-emerald-500',
    description: '走出家门，传播文化与自然科普。'
  },
  {
    id: 'art',
    name: '艺术音乐殿堂',
    icon: Music,
    color: 'bg-purple-500',
    description: '用AI创造美妙的旋律与画作，探索科技与艺术的边界。'
  },
  {
    id: 'future',
    name: '未来科技前沿',
    icon: Rocket,
    color: 'bg-cyan-500',
    description: '探索宇宙与未来生活，设计智能化的生存空间。'
  },
  {
    id: 'game',
    name: '游戏开发工坊',
    icon: Gamepad2,
    color: 'bg-indigo-500',
    description: '结合AI技术，创造新一代智能互动游戏。'
  },
  {
    id: 'health',
    name: '健康运动俱乐部',
    icon: Activity,
    color: 'bg-teal-500',
    description: '关注身心健康，用科技养成良好的生活习惯。'
  },
  {
    id: 'story',
    name: '故事创作中心',
    icon: Feather,
    color: 'bg-pink-500',
    description: '释放文学才华，让人工智能成为你的创作助手。'
  },
  {
    id: 'safety',
    name: '安全守护联盟',
    icon: ShieldCheck,
    color: 'bg-red-500',
    description: '学习安全知识，用技术构建安全的成长环境。'
  }
];

export const THEMES: Theme[] = [
  // ❤️ 爱心公益学院 (6 themes)
  {
    id: 'c1',
    title: '视障生活助手',
    categoryId: 'charity',
    iconName: '👁️',
    description: '通过摄像头帮助视障人士“看”和“理解”世界，识别药盒、路牌等信息。',
    coreSkills: ['文本识别', '图像分类'],
    challengeTask: '利用文本识别帮助爷爷奶奶读药盒说明书！',
    requiredBlocks: ['文本识别', 'AI对话', 'TTS朗读'],
    highlight: '体现科技向善，结合OCR与大模型摘要。',
    creationTips: [
      '可以添加一个“大字体模式”，方便视力不好的老年人阅读。',
      '尝试用不同的音效区分“识别成功”和“识别失败”。'
    ],
    taskSteps: [
      '1. 添加“文本识别”扩展积木。',
      '2. 创建一个按钮，点击时调用摄像头拍照。',
      '3. 将识别到的文字结果发送给AI进行简化。',
      '4. 使用“文本朗读”积木读出AI的回答。'
    ]
  },
  {
    id: 'c2',
    title: '智能垃圾分类',
    categoryId: 'charity',
    iconName: '♻️',
    description: '不仅能识别垃圾，还能教你如何把这个垃圾变成手工作品！',
    coreSkills: ['图像分类', 'AI对话'],
    challengeTask: '识别垃圾并给出变废为宝的手工教程。',
    requiredBlocks: ['分类AI', 'AI对话'],
    highlight: '完整的AI落地流程，变废为宝更有创意。',
    creationTips: [
      '提前收集好不同种类的垃圾图片进行模型训练。',
      '可以设计一个积分系统，分类正确加分。'
    ],
    taskSteps: [
      '1. 训练图像分类模型（可回收、有害、厨余、其他）。',
      '2. 编写程序调用模型识别摄像头画面。',
      '3. 识别成功后，向AI询问该物品的手工制作教程。',
      '4. 展示AI生成的教程步骤。'
    ]
  },
  {
    id: 'c3',
    title: '防骗防霸凌演练',
    categoryId: 'charity',
    iconName: '🛡️',
    description: '沉浸式的“防骗防欺凌模拟器”，AI扮演反派陪你演练。',
    coreSkills: ['AI对话', '文本/情绪分类'],
    challengeTask: '与AI扮演的骗子过招，保护个人隐私。',
    requiredBlocks: ['AI对话', '条件判断'],
    highlight: '切中网络安全热点，把AI当作陪练。',
    creationTips: [
      '给AI设定不同的性格，比如“狡猾的骗子”或“凶恶的霸凌者”。',
      '设置一个“求助按钮”，点击可以获得老师的建议。'
    ],
    taskSteps: [
      '1. 设置AI的角色Prompt，让它扮演坏人。',
      '2. 创建对话界面，允许用户输入回答。',
      '3. 使用另一个AI助手判断用户的回答是否安全。',
      '4. 根据判断结果给出反馈（成功/失败）。'
    ]
  },
  {
    id: 'c4',
    title: '孤寡老人陪伴',
    categoryId: 'charity',
    iconName: '👵',
    description: '为独居老人设计的智能聊天机器人，能提醒吃药、陪聊解闷。',
    coreSkills: ['语音识别', '情感计算'],
    challengeTask: '设计一个能听懂方言并讲笑话的陪伴助手。',
    requiredBlocks: ['语音识别', 'AI对话'],
    highlight: '关注老龄化社会问题，传递温暖。',
    creationTips: [
      '界面设计要简洁，按钮要大，适合老人操作。',
      '加入定时提醒功能，按时提醒吃药。'
    ],
    taskSteps: [
      '1. 添加语音识别积木，让老人可以直接说话。',
      '2. 设置AI为温柔耐心的陪伴者角色。',
      '3. 编写逻辑，当识别到“无聊”等关键词时讲笑话。',
      '4. 加入背景轻音乐，营造放松氛围。'
    ]
  },
  {
    id: 'c5',
    title: '听障手语翻译',
    categoryId: 'charity',
    iconName: '🤟',
    description: '利用摄像头识别手势，将其翻译成文字或语音，帮助听障人士沟通。',
    coreSkills: ['手势识别', 'TTS朗读'],
    challengeTask: '识别基础手语动作并大声朗读出来。',
    requiredBlocks: ['人体姿态', '文本朗读'],
    highlight: '消除沟通障碍，技术赋能无障碍交流。',
    creationTips: [
      '先从简单的数字或“你好”、“谢谢”等手势开始训练。',
      '确保摄像头光线充足，提高识别率。'
    ],
    taskSteps: [
      '1. 训练或定义手势模型（如检测手指位置）。',
      '2. 实时检测摄像头画面中的手势。',
      '3. 将识别到的手势转换为对应的文字。',
      '4. 使用TTS积木朗读文字。'
    ]
  },
  {
    id: 'c6',
    title: '走失儿童寻回',
    categoryId: 'charity',
    iconName: '🔍',
    description: '模拟智能监控系统，通过人脸特征比对帮助寻找走失儿童。',
    coreSkills: ['人脸识别', '特征比对'],
    challengeTask: '在人群中快速锁定目标人物的特征。',
    requiredBlocks: ['人脸检测', '列表操作'],
    highlight: '模拟真实安防场景，培养公共安全意识。',
    creationTips: [
      '可以使用多张照片模拟“人群”。',
      '当匹配成功时，添加警报音效。'
    ],
    taskSteps: [
      '1. 建立一个“走失儿童数据库”（列表）。',
      '2. 开启摄像头检测画面中的人脸。',
      '3. 比对检测到的人脸与数据库中的特征。',
      '4. 如果匹配度高，显示“找到啦”并报警。'
    ]
  },

  // 💡 生活奇思妙想 (6 themes)
  {
    id: 'l1',
    title: '情绪疗愈宠物',
    categoryId: 'life',
    iconName: '🐱',
    description: '一个懂心理学的电子宠物，专门倾听烦恼并给予鼓励。',
    coreSkills: ['AI对话', '情绪识别'],
    challengeTask: '制作一个能听懂烦恼并给与安慰的电子宠物。',
    requiredBlocks: ['AI对话', '情感分类'],
    highlight: '关注心理健康，展示Prompt工程妙用。',
    creationTips: [
      '为宠物设计多种表情造型（开心、难过、惊讶）。',
      'AI的回复要简短温暖，像朋友一样。'
    ],
    taskSteps: [
      '1. 绘制或上传宠物的不同表情造型。',
      '2. 接收用户的语音或文字输入。',
      '3. 使用AI分析用户的情绪（正向/负向）。',
      '4. 切换宠物造型并生成安慰的话语。'
    ]
  },
  {
    id: 'l2',
    title: '冰箱剩菜魔法师',
    categoryId: 'life',
    iconName: '🥦',
    description: '通过AI将家里剩下的零散食材，变成一道有趣的创意菜。',
    coreSkills: ['文本识别', 'AI对话'],
    challengeTask: '扫描食材，让AI生成创意食谱。',
    requiredBlocks: ['文本识别', 'AI对话'],
    highlight: '极具生活气息，倡导节约粮食。',
    creationTips: [
      '可以增加“口味选择”（辣、甜、清淡）。',
      '生成的食谱最好包含步骤图（可以用AI绘画生成）。'
    ],
    taskSteps: [
      '1. 拍照识别食材，或手动输入食材列表。',
      '2. 将食材列表发送给AI大厨。',
      '3. 要求AI生成菜名、食材用量和制作步骤。',
      '4. 将结果清晰地展示在屏幕上。'
    ]
  },
  {
    id: 'l3',
    title: '神笔马良涂鸦机',
    categoryId: 'life',
    iconName: '🎨',
    description: '把自己随手涂鸦的物品变成一个童话故事。',
    coreSkills: ['图像分类', 'AI对话'],
    challengeTask: '识别涂鸦画作，自动生成童话故事。',
    requiredBlocks: ['分类AI', 'AI对话'],
    highlight: '物理创作与数字生成结合，充满童趣。',
    creationTips: [
      '鼓励孩子画一些奇奇怪怪的组合。',
      '故事可以分段生成，增加悬念。'
    ],
    taskSteps: [
      '1. 训练模型识别几种简单的简笔画。',
      '2. 识别用户画在纸上的图案。',
      '3. 将识别到的物体名称作为关键词发给AI。',
      '4. 让AI编一个包含这些物品的短故事。'
    ]
  },
  {
    id: 'l4',
    title: '智能穿搭顾问',
    categoryId: 'life',
    iconName: '👗',
    description: '根据天气和场合，为你推荐今天的最佳穿搭方案。',
    coreSkills: ['天气API', '逻辑判断'],
    challengeTask: '获取实时天气，推荐舒适又时尚的衣服。',
    requiredBlocks: ['网络请求', '条件分支'],
    highlight: '解决“今天穿什么”的千古难题。',
    creationTips: [
      '可以加入“幸运色”功能，增加趣味性。',
      '建立一个“衣柜列表”存储可选的衣服。'
    ],
    taskSteps: [
      '1. 调用天气API获取当前温度和天气状况。',
      '2. 询问用户出席的场合（上学、运动、派对）。',
      '3. 根据条件筛选合适的衣服搭配。',
      '4. 展示搭配效果图。'
    ]
  },
  {
    id: 'l5',
    title: '懒人整理助手',
    categoryId: 'life',
    iconName: '🧹',
    description: '拍照识别凌乱的桌面，AI给出收纳整理的建议和步骤。',
    coreSkills: ['图像识别', '规划算法'],
    challengeTask: '识别桌面物品，生成分类收纳清单。',
    requiredBlocks: ['图像分类', '列表操作'],
    highlight: '培养良好的生活习惯和条理性。',
    creationTips: [
      '可以将整理过程设计成一个小游戏。',
      '每完成一项整理任务，给予奖励徽章。'
    ],
    taskSteps: [
      '1. 拍照识别桌面上的主要物品类别。',
      '2. AI分析物品属性（文具、玩具、垃圾）。',
      '3. 生成收纳建议（如：书本放左边，笔放笔筒）。',
      '4. 用户勾选完成任务。'
    ]
  },
  {
    id: 'l6',
    title: '专注力计时器',
    categoryId: 'life',
    iconName: '🍅',
    description: '结合番茄工作法，通过摄像头监测是否分心，提醒你保持专注。',
    coreSkills: ['人脸追踪', '计时逻辑'],
    challengeTask: '当你视线离开屏幕太久时，发出温柔提醒。',
    requiredBlocks: ['人脸检测', '计时器'],
    highlight: '科学提升学习效率，对抗拖延症。',
    creationTips: [
      '提醒的声音不要太刺耳，可以用自然音效。',
      '记录专注时长，生成周报表。'
    ],
    taskSteps: [
      '1. 开启摄像头追踪人脸位置。',
      '2. 设定专注倒计时（如25分钟）。',
      '3. 如果检测到人脸消失或偏转超过10秒，暂停计时并提醒。',
      '4. 完成计时后播放庆祝动画。'
    ]
  },

  // 📚 超级学习神器 (6 themes)
  {
    id: 'e1',
    title: '启发式错题管家',
    categoryId: 'learning',
    iconName: '📝',
    description: '绝不直接给答案，只会给提示的苏格拉底式AI老师。',
    coreSkills: ['文本识别', '定制Prompt'],
    challengeTask: '扫描错题，让AI给出解题思路而非答案。',
    requiredBlocks: ['文本识别', 'AI对话'],
    highlight: '直击教育痛点，反对应试教育。',
    creationTips: [
      'Prompt中要明确强调“不要直接给答案”。',
      '可以支持多轮对话，逐步引导。'
    ],
    taskSteps: [
      '1. 拍照识别题目文字。',
      '2. 构建Prompt：“你是一个引导者，请提供解题思路，不要给答案。”',
      '3. 展示AI的提示内容。',
      '4. 学生输入自己的答案，AI判断对错。'
    ]
  },
  {
    id: 'e2',
    title: '李白古诗辅导机',
    categoryId: 'learning',
    iconName: '📜',
    description: '结合语文学习，打造一个互动的古诗词辅导机。',
    coreSkills: ['文本识别', 'AI对话'],
    challengeTask: '扫描古诗，让“李白”亲自讲解创作背景。',
    requiredBlocks: ['文本识别', 'AI对话'],
    highlight: '跨学科融合，与历史人物有趣互动。',
    creationTips: [
      '给AI设定“李白”的语气，豪放、浪漫。',
      '可以加入“飞花令”小游戏环节。'
    ],
    taskSteps: [
      '1. 识别古诗标题或诗句。',
      '2. AI扮演李白，用第一人称讲述创作背景。',
      '3. 解释诗句中的生僻字或典故。',
      '4. 朗诵古诗，配上古风背景音乐。'
    ]
  },
  {
    id: 'e3',
    title: '英语口语陪练',
    categoryId: 'learning',
    iconName: '🗣️',
    description: '随时随地练习英语口语，AI纠正发音并进行情景对话。',
    coreSkills: ['语音识别', '语音合成'],
    challengeTask: '模拟餐厅点餐场景，用英语完成对话。',
    requiredBlocks: ['语音识别', 'AI对话'],
    highlight: '打破“哑巴英语”，创造语言环境。',
    creationTips: [
      '设置不同的难度等级（初级、中级、高级）。',
      'AI可以指出语法错误并给出正确示范。'
    ],
    taskSteps: [
      '1. 选择对话场景（购物、问路、点餐）。',
      '2. AI先说一句开场白。',
      '3. 用户语音回复，识别为文本。',
      '4. AI回复并继续对话，直到任务完成。'
    ]
  },
  {
    id: 'e4',
    title: '历史文物复活',
    categoryId: 'learning',
    iconName: '🏺',
    description: '让博物馆里的文物“开口说话”，讲述它们的前世今生。',
    coreSkills: ['图像识别', '角色扮演'],
    challengeTask: '识别兵马俑照片，听它讲述秦朝的故事。',
    requiredBlocks: ['图像分类', 'TTS朗读'],
    highlight: '让历史变得鲜活有趣，沉浸式学习。',
    creationTips: [
      '收集有代表性的文物图片（青铜鼎、瓷器）。',
      '文物的自述要生动有趣，符合时代特征。'
    ],
    taskSteps: [
      '1. 训练图像模型识别几种文物。',
      '2. 识别摄像头前的文物图片。',
      '3. 播放对应文物的语音讲解（第一人称）。',
      '4. 展示文物的详细资料卡片。'
    ]
  },
  {
    id: 'e5',
    title: '几何图形探秘',
    categoryId: 'learning',
    iconName: '📐',
    description: '通过画笔绘制图形，AI自动识别并计算面积周长。',
    coreSkills: ['手写识别', '数学计算'],
    challengeTask: '手绘一个三角形，自动计算它的面积。',
    requiredBlocks: ['画笔识别', '变量计算'],
    highlight: '将抽象的数学概念可视化。',
    creationTips: [
      '支持识别多种图形（圆、矩形、三角形）。',
      '可以动态调整参数，观察面积变化。'
    ],
    taskSteps: [
      '1. 使用画笔积木允许用户在屏幕上绘图。',
      '2. 识别绘制的图形形状。',
      '3. 询问必要的参数（如边长、半径）。',
      '4. 计算并显示周长和面积。'
    ]
  },
  {
    id: 'e6',
    title: '物理实验模拟器',
    categoryId: 'learning',
    iconName: '⚖️',
    description: '在虚拟环境中模拟物理实验，如杠杆平衡、电路连接。',
    coreSkills: ['物理引擎', '逻辑模拟'],
    challengeTask: '搭建一个串联电路，点亮小灯泡。',
    requiredBlocks: ['条件判断', '状态切换'],
    highlight: '安全、低成本地进行科学探究。',
    creationTips: [
      '元件可以拖拽连接。',
      '模拟短路等故障情况，并给出提示。'
    ],
    taskSteps: [
      '1. 创建电池、导线、开关、灯泡等角色。',
      '2. 编写逻辑判断电路是否闭合。',
      '3. 如果闭合，切换灯泡造型为“亮”。',
      '4. 如果断开，切换为“灭”。'
    ]
  },

  // 🌍 大千世界探索 (6 themes)
  {
    id: 'w1',
    title: '动植物科考图鉴',
    categoryId: 'exploration',
    iconName: '🌿',
    description: '模拟野外科考队，通过摄像头探索和记录身边的自然万物。',
    coreSkills: ['图像分类', 'AI对话'],
    challengeTask: '识别植物并生成儿童科普绘本介绍。',
    requiredBlocks: ['分类AI', 'AI对话'],
    highlight: '鼓励走出户外，精美的科考日记风格。',
    creationTips: [
      '设计一个“图鉴收集册”，点亮已发现的物种。',
      '生成的介绍要通俗易懂，适合儿童。'
    ],
    taskSteps: [
      '1. 识别植物或动物名称。',
      '2. 让AI生成关于它的3个趣味知识点。',
      '3. 将照片和知识点保存到列表中。',
      '4. 在“图鉴”页面展示收集成果。'
    ]
  },
  {
    id: 'w2',
    title: '家乡方言非遗导游',
    categoryId: 'exploration',
    iconName: '🏯',
    description: '为自己的家乡代言，做一个智能旅游导览系统。',
    coreSkills: ['图像/声音分类', 'AI对话'],
    challengeTask: '识别家乡地标，用方言或趣味语言介绍。',
    requiredBlocks: ['分类AI', 'AI对话'],
    highlight: '增强文化自信，弘扬本土文化。',
    creationTips: [
      '录制真实的方言音频作为素材。',
      '推荐当地的特色美食。'
    ],
    taskSteps: [
      '1. 训练模型识别家乡的景点图片。',
      '2. 识别成功后，播放对应的导游词。',
      '3. 加入方言教学小游戏。',
      '4. 生成旅游路线推荐。'
    ]
  },
  {
    id: 'w3',
    title: '星座观测指南',
    categoryId: 'exploration',
    iconName: '✨',
    description: '对着夜空（或星图）识别星座，了解背后的神话故事。',
    coreSkills: ['图像识别', 'AR增强'],
    challengeTask: '找到北斗七星，并听AI讲述它的传说。',
    requiredBlocks: ['图像分类', 'TTS朗读'],
    highlight: '仰望星空，激发对宇宙的好奇心。',
    creationTips: [
      '背景可以使用星空特效。',
      '用连线动画展示星座的形状。'
    ],
    taskSteps: [
      '1. 识别主要的星座图案。',
      '2. 在屏幕上画出星座连线。',
      '3. 讲述该星座的希腊神话故事。',
      '4. 指出寻找该星座的方法。'
    ]
  },
  {
    id: 'w4',
    title: '深海生物探秘',
    categoryId: 'exploration',
    iconName: '🐙',
    description: '驾驶虚拟潜水艇，识别深海中的奇特生物。',
    coreSkills: ['物体检测', '百科查询'],
    challengeTask: '在深海中发现并记录3种发光生物。',
    requiredBlocks: ['条件判断', '列表记录'],
    highlight: '探索未知的蓝色领域，关注海洋生态。',
    creationTips: [
      '模拟潜水艇的仪表盘界面。',
      '加入深海的水流声和气泡音效。'
    ],
    taskSteps: [
      '1. 控制潜水艇移动。',
      '2. 当遇到生物时，弹出扫描框。',
      '3. 显示生物名称和习性介绍。',
      '4. 记录潜水深度和发现物种。'
    ]
  },
  {
    id: 'w5',
    title: '恐龙化石复原',
    categoryId: 'exploration',
    iconName: '🦕',
    description: '通过扫描化石碎片，AI复原恐龙的真实面貌和生活习性。',
    coreSkills: ['图像拼接', '3D展示'],
    challengeTask: '拼凑霸王龙骨架，看它动起来。',
    requiredBlocks: ['造型切换', '动画控制'],
    highlight: '穿越时空，与史前巨兽亲密接触。',
    creationTips: [
      '设计一个拼图小游戏来复原骨架。',
      '复原后播放恐龙的吼叫声。'
    ],
    taskSteps: [
      '1. 识别化石碎片的位置。',
      '2. 拖拽碎片到正确位置进行拼合。',
      '3. 拼合成功后，切换为恐龙复原图。',
      '4. 播放恐龙行走或捕食的动画。'
    ]
  },
  {
    id: 'w6',
    title: '环球美食地图',
    categoryId: 'exploration',
    iconName: '🍕',
    description: '识别各国特色美食，了解当地的饮食文化和风俗。',
    coreSkills: ['图像分类', '地理知识'],
    challengeTask: '识别披萨，并在地图上找到它的发源地。',
    requiredBlocks: ['分类AI', '地图定位'],
    highlight: '舌尖上的世界，培养国际视野。',
    creationTips: [
      '点击地图上的国家，展示代表美食。',
      '加入简单的烹饪小游戏。'
    ],
    taskSteps: [
      '1. 识别美食图片（寿司、汉堡、饺子）。',
      '2. 在世界地图上高亮对应的国家。',
      '3. 介绍该美食的历史渊源。',
      '4. 播放当地的特色音乐。'
    ]
  },

  // 🎨 艺术音乐殿堂 (6 themes)
  {
    id: 'a1',
    title: 'AI 情绪作曲家',
    categoryId: 'art',
    iconName: '🎹',
    description: '通过识别你的面部表情或输入的文字，自动创作出符合当下心境的音乐旋律。',
    coreSkills: ['情绪识别', '音频生成'],
    challengeTask: '让AI识别你的心情，并演奏一首专属BGM。',
    requiredBlocks: ['情绪分类', 'AI音乐'],
    highlight: '将无形的情绪转化为有形的音乐，极具艺术感染力。',
    creationTips: [
      '不同的情绪对应不同的乐器（开心-钢琴，悲伤-大提琴）。',
      '生成的旋律可以保存分享。'
    ],
    taskSteps: [
      '1. 识别用户的面部表情（开心、难过、生气）。',
      '2. 根据情绪选择对应的音阶和节奏。',
      '3. 组合音符生成旋律。',
      '4. 播放生成的音乐并展示可视化波形。'
    ]
  },
  {
    id: 'a2',
    title: '名画风格迁移师',
    categoryId: 'art',
    iconName: '🖼️',
    description: '上传一张普通照片，让AI模仿梵高或毕加索的笔触，将其变成世界名画。',
    coreSkills: ['风格迁移', '图像处理'],
    challengeTask: '把校园风景照变成“星空”风格的艺术画作。',
    requiredBlocks: ['风格迁移', '图像编辑'],
    highlight: '直观感受AI在视觉艺术领域的创造力。',
    creationTips: [
      '提供多种艺术风格供选择。',
      '对比展示原图和处理后的效果。'
    ],
    taskSteps: [
      '1. 上传或拍摄一张照片。',
      '2. 选择一种艺术风格（梵高、莫奈、毕加索）。',
      '3. 调用风格迁移API处理图片。',
      '4. 展示并保存艺术画作。'
    ]
  },
  {
    id: 'a3',
    title: '虚拟偶像练习生',
    categoryId: 'art',
    iconName: '💃',
    description: '设计一个虚拟数字人，通过编程控制它的舞蹈动作和歌声。',
    coreSkills: ['姿态识别', 'AI动画'],
    challengeTask: '编写程序让虚拟角色随着音乐节奏跳舞。',
    requiredBlocks: ['姿态检测', '动画控制'],
    highlight: '结合当下流行的元宇宙概念，趣味性极强。',
    creationTips: [
      '可以自定义角色的服装和发型。',
      '动作要卡在音乐的节拍上。'
    ],
    taskSteps: [
      '1. 选择一个虚拟角色模型。',
      '2. 编写代码控制角色的肢体动作。',
      '3. 导入背景音乐。',
      '4. 同步音乐和舞蹈动作进行表演。'
    ]
  },
  {
    id: 'a4',
    title: 'AI 编舞大师',
    categoryId: 'art',
    iconName: '👯',
    description: 'AI根据音乐节奏自动生成舞蹈动作，或者根据你的动作生成特效。',
    coreSkills: ['音频分析', '骨骼绑定'],
    challengeTask: '为一段流行音乐设计独特的舞蹈动作。',
    requiredBlocks: ['音乐检测', '动作列表'],
    highlight: '科技赋能舞蹈，激发身体的创造力。',
    creationTips: [
      '用粒子特效跟随手部动作。',
      '支持多人同时识别互动。'
    ],
    taskSteps: [
      '1. 分析音乐的节奏点（鼓点）。',
      '2. 在重音时切换舞蹈动作。',
      '3. 实时捕捉玩家的动作并评分。',
      '4. 生成舞蹈视频回放。'
    ]
  },
  {
    id: 'a5',
    title: '传统剪纸生成',
    categoryId: 'art',
    iconName: '✂️',
    description: '输入文字或简笔画，AI自动生成对称精美的剪纸图案。',
    coreSkills: ['图像生成', '几何变换'],
    challengeTask: '设计一个“福”字窗花，并打印出来。',
    requiredBlocks: ['画笔绘图', '克隆'],
    highlight: '弘扬传统非遗文化，体验对称之美。',
    creationTips: [
      '利用旋转和镜像功能实现对称效果。',
      '模拟剪纸的纹理质感。'
    ],
    taskSteps: [
      '1. 画出剪纸的1/4或1/8图案。',
      '2. 使用克隆和旋转积木生成完整图案。',
      '3. 添加红色背景和纸张纹理。',
      '4. 保存为图片或打印。'
    ]
  },
  {
    id: 'a6',
    title: '像素画生成器',
    categoryId: 'art',
    iconName: '👾',
    description: '将普通照片转化为复古风格的像素画，制作游戏素材。',
    coreSkills: ['图像处理', '色彩量化'],
    challengeTask: '把你的自拍照变成8-bit游戏角色风格。',
    requiredBlocks: ['像素特效', '颜色替换'],
    highlight: '重温经典游戏美学，理解数字图像原理。',
    creationTips: [
      '可以调节像素块的大小。',
      '限制颜色数量，模拟红白机效果。'
    ],
    taskSteps: [
      '1. 获取摄像头画面。',
      '2. 应用像素化滤镜。',
      '3. 减少色彩数量（如只用16色）。',
      '4. 生成游戏角色素材。'
    ]
  },

  // 🚀 未来科技前沿 (6 themes)
  {
    id: 'f1',
    title: '火星基地管家',
    categoryId: 'future',
    iconName: '🪐',
    description: '模拟火星生存环境，利用AI管理基地的氧气、能源和突发状况。',
    coreSkills: ['逻辑判断', '模拟仿真'],
    challengeTask: '编写AI算法，在沙尘暴来袭时自动关闭基地舱门。',
    requiredBlocks: ['条件判断', '变量计算'],
    highlight: '培养系统思维和应对复杂环境的逻辑能力。',
    creationTips: [
      '设计仪表盘显示氧气和电力数值。',
      '加入随机事件（如陨石撞击）。'
    ],
    taskSteps: [
      '1. 初始化基地资源变量（氧气=100，电力=100）。',
      '2. 循环监测环境状态。',
      '3. 当检测到沙尘暴信号，执行关闭舱门动作。',
      '4. 随时间消耗资源，需要太阳能补充。'
    ]
  },
  {
    id: 'f2',
    title: '智能家居设计师',
    categoryId: 'future',
    iconName: '🏠',
    description: '设计一套未来的智能家居系统，通过语音控制家里的灯光、窗帘和电器。',
    coreSkills: ['语音识别', 'IoT联动'],
    challengeTask: '对着麦克风说“我回来了”，让房间自动亮灯并播放音乐。',
    requiredBlocks: ['语音识别', '广播消息'],
    highlight: '将编程与生活场景紧密结合，体验万物互联。',
    creationTips: [
      '设计“离家模式”和“回家模式”一键切换。',
      '模拟手机APP控制界面。'
    ],
    taskSteps: [
      '1. 绘制房间平面图和电器角色。',
      '2. 监听语音指令（“开灯”、“关窗”）。',
      '3. 识别指令后切换电器造型。',
      '4. 反馈执行结果语音（“好的，已为您开灯”）。'
    ]
  },
  {
    id: 'f3',
    title: '自动驾驶调度',
    categoryId: 'future',
    iconName: '🚗',
    description: '设计城市交通大脑，调度自动驾驶汽车，避免拥堵和事故。',
    coreSkills: ['路径规划', '多智能体'],
    challengeTask: '规划最优路线，让救护车最快到达医院。',
    requiredBlocks: ['路径算法', '碰撞检测'],
    highlight: '思考未来交通形态，解决城市拥堵难题。',
    creationTips: [
      '使用红绿灯控制路口流量。',
      '优先处理紧急车辆（救护车、消防车）。'
    ],
    taskSteps: [
      '1. 绘制城市道路地图。',
      '2. 编写车辆自动沿道路移动的逻辑。',
      '3. 检测前方是否有障碍物或红灯。',
      '4. 遇到救护车时，其他车辆靠边避让。'
    ]
  },
  {
    id: 'f4',
    title: '机器人医生',
    categoryId: 'future',
    iconName: '🤖',
    description: '模拟纳米机器人进入人体，识别并消灭病毒，修复受损细胞。',
    coreSkills: ['图像识别', '微观模拟'],
    challengeTask: '操控机器人在血管中巡逻，清除流感病毒。',
    requiredBlocks: ['按键控制', '克隆体'],
    highlight: '探索微观世界，畅想未来医疗技术。',
    creationTips: [
      '设计不同种类的病毒和细胞。',
      '机器人可以升级装备。'
    ],
    taskSteps: [
      '1. 绘制血管背景和红细胞。',
      '2. 生成病毒克隆体。',
      '3. 控制机器人移动并发射药物。',
      '4. 碰到病毒时消除并加分。'
    ]
  },
  {
    id: 'f5',
    title: '太空垃圾清理',
    categoryId: 'future',
    iconName: '🛰️',
    description: '设计太空捕手卫星，识别并回收轨道上的太空垃圾。',
    coreSkills: ['物体追踪', '物理碰撞'],
    challengeTask: '发射抓捕网，成功回收废弃卫星碎片。',
    requiredBlocks: ['面向鼠标', '距离判断'],
    highlight: '关注太空环保，保护地球轨道安全。',
    creationTips: [
      '模拟失重环境下的惯性运动。',
      '不同垃圾有不同的回收价值。'
    ],
    taskSteps: [
      '1. 让太空垃圾在轨道上随机漂浮。',
      '2. 控制卫星调整角度和速度。',
      '3. 发射抓捕网接触垃圾。',
      '4. 将垃圾拖回回收站。'
    ]
  },
  {
    id: 'f6',
    title: '量子加密通信',
    categoryId: 'future',
    iconName: '🔐',
    description: '模拟量子密钥分发过程，发送绝对安全的情报信息。',
    coreSkills: ['加密算法', '逻辑推理'],
    challengeTask: '使用密钥加密一段文字，并成功解密。',
    requiredBlocks: ['字符串处理', '变量加密'],
    highlight: '接触前沿物理概念，理解信息安全重要性。',
    creationTips: [
      '用简单的替换密码（凯撒密码）演示原理。',
      '模拟黑客窃听失败的场景。'
    ],
    taskSteps: [
      '1. 输入明文信息。',
      '2. 生成随机密钥。',
      '3. 将明文转换为密文（加密）。',
      '4. 接收端使用密钥将密文还原（解密）。'
    ]
  },

  // 🎮 游戏开发工坊 (6 themes)
  {
    id: 'g1',
    title: '像素跑酷生成',
    categoryId: 'game',
    iconName: '🏃',
    description: '利用AI随机生成地形和障碍物，打造永远玩不腻的跑酷游戏。',
    coreSkills: ['随机算法', '物理运动'],
    challengeTask: '设计一个地图无限延伸的跑酷关卡。',
    requiredBlocks: ['随机数', '克隆体'],
    highlight: '理解程序生成内容(PCG)的魅力。',
    creationTips: [
      '随着分数增加，游戏速度加快。',
      '加入金币和道具奖励。'
    ],
    taskSteps: [
      '1. 创建地面和障碍物角色。',
      '2. 使用克隆体不断从右向左移动。',
      '3. 随机设置障碍物的高度和间隔。',
      '4. 编写角色跳跃和碰撞检测逻辑。'
    ]
  },
  {
    id: 'g2',
    title: '智能NPC对话',
    categoryId: 'game',
    iconName: '💬',
    description: '给游戏里的NPC装上“大脑”，让他们能根据你的回答做出不同反应。',
    coreSkills: ['AI对话', '状态机'],
    challengeTask: '与村长对话，根据你的回答触发不同任务。',
    requiredBlocks: ['AI对话', '条件分支'],
    highlight: '让游戏角色更有灵魂，提升沉浸感。',
    creationTips: [
      'NPC可以有情绪值，影响对话态度。',
      '设计多结局的任务线。'
    ],
    taskSteps: [
      '1. 设置NPC的初始状态和任务。',
      '2. 玩家接近时触发对话框。',
      '3. 将玩家的选择发送给AI生成回复。',
      '4. 根据回复内容改变游戏状态（如获得道具）。'
    ]
  },
  {
    id: 'g3',
    title: '语音控制闯关',
    categoryId: 'game',
    iconName: '🎤',
    description: '解放双手，用声音控制角色的跳跃、攻击和移动。',
    coreSkills: ['语音识别', '音量检测'],
    challengeTask: '大喊“跳”让角色跳过陷阱，小声说话潜行。',
    requiredBlocks: ['响度检测', '语音识别'],
    highlight: '探索新颖的人机交互方式。',
    creationTips: [
      '用音量大小控制跳跃高度。',
      '避免环境噪音干扰。'
    ],
    taskSteps: [
      '1. 开启麦克风检测响度。',
      '2. 当响度大于50时，执行跳跃动作。',
      '3. 识别特定指令（“攻击”、“冲刺”）。',
      '4. 设计关卡地形配合语音玩法。'
    ]
  },
  {
    id: 'g4',
    title: '手势体感格斗',
    categoryId: 'game',
    iconName: '🥊',
    description: '通过摄像头识别你的动作，控制游戏角色进行格斗对战。',
    coreSkills: ['姿态识别', '动作映射'],
    challengeTask: '对着摄像头挥拳，控制角色击碎岩石。',
    requiredBlocks: ['视频侦测', '人体姿态'],
    highlight: '将身体运动与游戏结合，健康娱乐。',
    creationTips: [
      '设计连招系统（如左拳+右拳=大招）。',
      '添加打击特效和震动反馈。'
    ],
    taskSteps: [
      '1. 识别手腕和肩膀的关键点位置。',
      '2. 判断挥拳动作（速度和位移）。',
      '3. 控制游戏角色播放攻击动画。',
      '4. 判定攻击是否击中敌人。'
    ]
  },
  {
    id: 'g5',
    title: '迷宫自动生成',
    categoryId: 'game',
    iconName: '🧩',
    description: '编写算法自动生成复杂的迷宫地图，并设计AI敌人追击玩家。',
    coreSkills: ['迷宫算法', '寻路AI'],
    challengeTask: '生成一个独一无二的迷宫，并成功逃脱。',
    requiredBlocks: ['画笔绘制', '距离检测'],
    highlight: '锻炼逻辑思维和算法设计能力。',
    creationTips: [
      '使用深度优先搜索(DFS)生成迷宫。',
      '加入迷雾模式，只能看到周围。'
    ],
    taskSteps: [
      '1. 定义网格地图数据结构。',
      '2. 编写算法打通墙壁生成路径。',
      '3. 放置玩家起点和终点。',
      '4. 编写敌人自动寻路的逻辑。'
    ]
  },
  {
    id: 'g6',
    title: '策略塔防AI',
    categoryId: 'game',
    iconName: '🏰',
    description: '设计防御塔的攻击逻辑，抵御一波又一波智能敌人的进攻。',
    coreSkills: ['列表管理', '策略逻辑'],
    challengeTask: '合理布置防御塔，阻止敌人到达终点。',
    requiredBlocks: ['列表操作', '面向对象'],
    highlight: '考验统筹规划和资源管理能力。',
    creationTips: [
      '设计不同类型的塔（减速、范围伤害）。',
      '敌人也会根据路线选择最优路径。'
    ],
    taskSteps: [
      '1. 绘制地图路径。',
      '2. 生成敌人沿路径移动。',
      '3. 放置防御塔并检测范围内敌人。',
      '4. 发射子弹并扣除敌人血量。'
    ]
  },

  // 🏥 健康运动俱乐部 (6 themes)
  {
    id: 'h1',
    title: '坐姿矫正提醒',
    categoryId: 'health',
    iconName: '🪑',
    description: '通过摄像头监测你的坐姿，当你弯腰驼背时发出提醒。',
    coreSkills: ['姿态识别', '角度计算'],
    challengeTask: '保持正确坐姿10分钟，获得“挺拔之星”勋章。',
    requiredBlocks: ['人体姿态', '几何计算'],
    highlight: '预防近视和脊柱侧弯，养成好习惯。',
    creationTips: [
      '计算肩膀和眼睛的相对位置。',
      '提醒方式可以是屏幕变暗或播放提示音。'
    ],
    taskSteps: [
      '1. 识别双肩和鼻子的关键点。',
      '2. 计算肩膀是否水平，鼻子是否太低。',
      '3. 如果姿态不标准持续5秒，触发提醒。',
      '4. 记录保持良好坐姿的时间。'
    ]
  },
  {
    id: 'h2',
    title: '视力保护卫士',
    categoryId: 'health',
    iconName: '👓',
    description: '监测眼睛与屏幕的距离，以及用眼时长，保护视力健康。',
    coreSkills: ['人脸检测', '距离估算'],
    challengeTask: '当眼睛离屏幕太近时，屏幕自动变模糊。',
    requiredBlocks: ['人脸识别', '特效滤镜'],
    highlight: '科技护眼，远离近视烦恼。',
    creationTips: [
      '利用双眼间距估算距离。',
      '强制休息模式（锁屏1分钟）。'
    ],
    taskSteps: [
      '1. 识别人脸双眼位置。',
      '2. 根据双眼间距像素值推算距离。',
      '3. 如果距离过近，增加虚像特效。',
      '4. 计时每30分钟提醒远眺。'
    ]
  },
  {
    id: 'h3',
    title: '每日膳食分析',
    categoryId: 'health',
    iconName: '🥗',
    description: '拍照识别一日三餐，AI分析营养成分并给出建议。',
    coreSkills: ['图像分类', '数据分析'],
    challengeTask: '记录今天的午餐，看看蛋白质和蔬菜够不够。',
    requiredBlocks: ['图像识别', '变量统计'],
    highlight: '关注饮食健康，培养科学饮食观念。',
    creationTips: [
      '建立常见食物热量数据库。',
      '生成可视化的营养雷达图。'
    ],
    taskSteps: [
      '1. 识别餐盘中的食物种类。',
      '2. 估算每种食物的份量。',
      '3. 累加计算热量、蛋白质、脂肪。',
      '4. 给出饮食建议（如“多吃蔬菜”）。'
    ]
  },
  {
    id: 'h4',
    title: '运动姿态纠正',
    categoryId: 'health',
    iconName: '🧘',
    description: '像私人教练一样，通过摄像头指导你的深蹲、跳绳动作是否标准。',
    coreSkills: ['骨骼识别', '动作比对'],
    challengeTask: '完成10个标准的开合跳，AI自动计数。',
    requiredBlocks: ['人体姿态', '条件判断'],
    highlight: '科学运动，避免运动损伤。',
    creationTips: [
      '在屏幕上画出标准骨架辅助线。',
      '动作达标时有特效反馈。'
    ],
    taskSteps: [
      '1. 识别身体关键节点。',
      '2. 定义标准动作的角度范围。',
      '3. 实时比对用户动作与标准动作。',
      '4. 计数并语音鼓励。'
    ]
  },
  {
    id: 'h5',
    title: '睡眠质量监测',
    categoryId: 'health',
    iconName: '💤',
    description: '利用声音传感器监测睡眠环境噪音，或记录梦话（趣味）。',
    coreSkills: ['声音检测', '波形分析'],
    challengeTask: '记录晚上的环境噪音，生成睡眠报告。',
    requiredBlocks: ['响度检测', '列表记录'],
    highlight: '关注睡眠质量，保证充足精力。',
    creationTips: [
      '绘制噪音变化曲线图。',
      '检测到鼾声时轻微震动提醒（配合手环）。'
    ],
    taskSteps: [
      '1. 持续监测麦克风音量。',
      '2. 将每分钟的平均音量存入列表。',
      '3. 如果音量突增，记录为“干扰事件”。',
      '4. 早晨生成昨晚的睡眠环境报告。'
    ]
  },
  {
    id: 'h6',
    title: '心理压力测试',
    categoryId: 'health',
    iconName: '❤️',
    description: '通过问卷或微表情分析，评估你的压力指数，并提供放松建议。',
    coreSkills: ['问卷逻辑', '表情识别'],
    challengeTask: '完成心理小测试，获得专属的减压音乐。',
    requiredBlocks: ['询问回答', '音乐播放'],
    highlight: '关注心理健康，学会自我调节。',
    creationTips: [
      '设计舒缓的UI配色。',
      '提供深呼吸引导动画。'
    ],
    taskSteps: [
      '1. 设计几道心理评估题目。',
      '2. 根据用户选项计算压力分值。',
      '3. 结合面部表情分析辅助判断。',
      '4. 推荐适合的放松音乐或冥想引导。'
    ]
  },

  // ✒️ 故事创作中心 (6 themes)
  {
    id: 's1',
    title: '互动小说生成',
    categoryId: 'story',
    iconName: '📖',
    description: '你输入开头，AI续写剧情，每一次选择都通向不同的结局。',
    coreSkills: ['AI文本生成', '分支剧情'],
    challengeTask: '创作一个关于“时间旅行”的互动小说。',
    requiredBlocks: ['AI对话', '询问选择'],
    highlight: '体验人机共创文学的乐趣。',
    creationTips: [
      '保存用户的选择历史，影响后续剧情。',
      '为关键节点生成配图。'
    ],
    taskSteps: [
      '1. 设定故事背景和初始情节。',
      '2. 提供2-3个行动选项给玩家。',
      '3. 根据选择，让AI生成后续发展。',
      '4. 循环进行，直到达成结局。'
    ]
  },
  {
    id: 's2',
    title: '角色扮演剧本',
    categoryId: 'story',
    iconName: '🎭',
    description: '输入角色设定，AI自动生成剧本对话，甚至可以分角色朗读。',
    coreSkills: ['角色设定', 'TTS多角色'],
    challengeTask: '生成一段孙悟空大战外星人的爆笑剧本。',
    requiredBlocks: ['AI对话', '文本朗读'],
    highlight: '激发编剧潜能，排演创意短剧。',
    creationTips: [
      '设置不同角色的语音音色（男声、女声）。',
      '支持导出剧本为文本文件。'
    ],
    taskSteps: [
      '1. 输入角色A和角色B的性格特征。',
      '2. 设定冲突事件或话题。',
      '3. AI生成对话脚本。',
      '4. 分角色朗读对话内容。'
    ]
  },
  {
    id: 's3',
    title: '续写经典童话',
    categoryId: 'story',
    iconName: '🏰',
    description: '如果灰姑娘没有丢水晶鞋会怎样？让AI帮你脑洞大开续写经典。',
    coreSkills: ['创意写作', '逻辑推理'],
    challengeTask: '改写《龟兔赛跑》的结局，让乌龟用科技获胜。',
    requiredBlocks: ['AI对话', '文本拼接'],
    highlight: '打破思维定势，培养批判性思维。',
    creationTips: [
      '保留原著的核心人物，改变关键转折点。',
      '加入现代科技元素。'
    ],
    taskSteps: [
      '1. 选择一个经典童话故事。',
      '2. 设定一个“如果...”的假设条件。',
      '3. 让AI根据假设推演新的结局。',
      '4. 制作简单的动画演示新故事。'
    ]
  },
  {
    id: 's4',
    title: '漫画分镜助手',
    categoryId: 'story',
    iconName: '🗯️',
    description: '输入故事脚本，AI描述出每一格漫画应该画什么画面。',
    coreSkills: ['文本理解', '画面描述'],
    challengeTask: '把“小红帽”的故事通过4格漫画描述出来。',
    requiredBlocks: ['AI对话', '列表展示'],
    highlight: '辅助视觉叙事，从文字到图像的桥梁。',
    creationTips: [
      '提示AI包含镜头角度（特写、全景）。',
      '可以直接生成简单的示意图。'
    ],
    taskSteps: [
      '1. 输入一段故事文本。',
      '2. AI将其拆分为4个关键画面。',
      '3. 描述每个画面的构图和人物动作。',
      '4. 展示分镜描述列表。'
    ]
  },
  {
    id: 's5',
    title: '剧本杀推理',
    categoryId: 'story',
    iconName: '🕵️',
    description: 'AI出题生成一个悬疑案件，你来扮演侦探寻找线索破案。',
    coreSkills: ['逻辑推理', '线索管理'],
    challengeTask: '破解“消失的蛋糕”之谜，找出嫌疑人。',
    requiredBlocks: ['AI对话', '变量逻辑'],
    highlight: '锻炼逻辑推理和细节观察能力。',
    creationTips: [
      '线索要分散在不同的对话中。',
      '设置干扰项（错误的线索）。'
    ],
    taskSteps: [
      '1. AI生成案件背景、嫌疑人和线索。',
      '2. 玩家通过询问嫌疑人获取证词。',
      '3. 收集线索并进行推理。',
      '4. 指认凶手，AI揭晓真相。'
    ]
  },
  {
    id: 's6',
    title: '寓言故事新编',
    categoryId: 'story',
    iconName: '🦊',
    description: '将古代寓言故事赋予现代背景，用编程动画演绎出来。',
    coreSkills: ['故事改编', '动画编程'],
    challengeTask: '创作现代版《刻舟求剑》，讽刺僵化思维。',
    requiredBlocks: ['动画制作', '字幕同步'],
    highlight: '传承经典智慧，赋予时代新意。',
    creationTips: [
      '将剑换成手机，船换成地铁。',
      '用幽默的方式表达寓意。'
    ],
    taskSteps: [
      '1. 理解寓言的原始寓意。',
      '2. 设计现代场景和角色。',
      '3. 编写动画脚本和角色动作。',
      '4. 配上字幕和旁白。'
    ]
  },

  // 🛡️ 安全守护联盟 (6 themes)
  {
    id: 'sa1',
    title: '地震预警模拟',
    categoryId: 'safety',
    iconName: '🌋',
    description: '模拟地震发生时的P波和S波传播，演示正确的避险动作。',
    coreSkills: ['物理模拟', '科普演示'],
    challengeTask: '当警报响起时，控制角色迅速躲到桌子下。',
    requiredBlocks: ['广播消息', '按键交互'],
    highlight: '掌握防灾减灾知识，关键时刻能救命。',
    creationTips: [
      '加入倒计时，增加紧张感。',
      '错误动作（如跳楼）会导致游戏失败。'
    ],
    taskSteps: [
      '1. 模拟地震波到达的时间差。',
      '2. 播放警报声和屏幕震动特效。',
      '3. 玩家按下按键控制角色躲避。',
      '4. 判定躲避位置是否安全。'
    ]
  },
  {
    id: 'sa2',
    title: '交通安全问答',
    categoryId: 'safety',
    iconName: '🚦',
    description: '设计一个交通规则闯关游戏，识别红绿灯和交通标志。',
    coreSkills: ['图像识别', '规则判断'],
    challengeTask: '识别路牌，正确回答含义才能过马路。',
    requiredBlocks: ['分类AI', '询问回答'],
    highlight: '遵守交通规则，文明出行。',
    creationTips: [
      '设计真实的马路场景背景。',
      '加入交警角色进行引导。'
    ],
    taskSteps: [
      '1. 随机出现交通标志图片。',
      '2. 玩家选择或输入标志含义。',
      '3. 答对则角色前进一步。',
      '4. 答错则显示正确解释并扣分。'
    ]
  },
  {
    id: 'sa3',
    title: '溺水急救演示',
    categoryId: 'safety',
    iconName: '🏊',
    description: '通过动画演示溺水时的自救和他救方法，普及急救知识。',
    coreSkills: ['动画演示', '步骤引导'],
    challengeTask: '按正确顺序排列心肺复苏(CPR)的步骤。',
    requiredBlocks: ['鼠标拖拽', '列表排序'],
    highlight: '珍爱生命，预防溺水事故。',
    creationTips: [
      '用动画细节展示按压位置和频率。',
      '加入“呼叫120”的模拟环节。'
    ],
    taskSteps: [
      '1. 演示发现溺水者的处理流程。',
      '2. 制作CPR按压的交互动画。',
      '3. 玩家拖拽步骤卡片进行排序。',
      '4. 播放完整的急救演示视频。'
    ]
  },
  {
    id: 'sa4',
    title: '食品安全检测',
    categoryId: 'safety',
    iconName: '🍎',
    description: '模拟食品检测仪，识别变质食物或查看配料表中的添加剂。',
    coreSkills: ['图像识别', '数据库查询'],
    challengeTask: '扫描零食包装，找出其中的反式脂肪酸。',
    requiredBlocks: ['文本识别', '列表查询'],
    highlight: '关注舌尖上的安全，健康饮食。',
    creationTips: [
      '建立有害添加剂的关键词列表。',
      '变质食物可以用颜色识别（发霉）。'
    ],
    taskSteps: [
      '1. 识别食品包装上的配料表文字。',
      '2. 在列表中查找有害成分关键词。',
      '3. 如果发现，发出红色警报。',
      '4. 给出健康饮食建议。'
    ]
  },
  {
    id: 'sa5',
    title: '网络防火墙',
    categoryId: 'safety',
    iconName: '💻',
    description: '模拟黑客攻击，你需要编写防火墙规则来拦截恶意病毒。',
    coreSkills: ['条件判断', '反应速度'],
    challengeTask: '点击拦截所有红色的病毒数据包，放行绿色的。',
    requiredBlocks: ['克隆体', '碰撞检测'],
    highlight: '了解网络安全基础，提高防范意识。',
    creationTips: [
      '病毒移动速度越来越快。',
      '加入“杀毒软件”大招。'
    ],
    taskSteps: [
      '1. 生成正常数据包和病毒数据包。',
      '2. 数据包从屏幕上方落下。',
      '3. 玩家点击病毒进行消除。',
      '4. 漏掉病毒会扣除系统健康值。'
    ]
  },
  {
    id: 'sa6',
    title: '校园暴力求助',
    categoryId: 'safety',
    iconName: '🆘',
    description: '设计一个隐蔽的求助装置，当遇到危险时快速发送位置给老师家长。',
    coreSkills: ['信号发送', '界面设计'],
    challengeTask: '设计一个“紧急按钮”，按下后屏幕变红并发出警报。',
    requiredBlocks: ['按钮交互', '广播消息'],
    highlight: '反对校园霸凌，学会自我保护。',
    creationTips: [
      '设计伪装界面（如计算器），暗藏求助功能。',
      '加入录音取证功能。'
    ],
    taskSteps: [
      '1. 设计一个看似普通的APP界面。',
      '2. 设定特定的触发手势（如长按）。',
      '3. 触发后发送求助信号（模拟）。',
      '4. 开启麦克风录音并黑屏省电。'
    ]
  }
];


