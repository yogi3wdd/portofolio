import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'en' | 'zh-CN' | 'ja'

const english = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.certificates': 'Certificates',
  'nav.contact': 'Contact',
  'language.label': 'Choose language',
  'home.title': 'WHO AM I?',
  'home.role.web': 'Mobile & Web Developer',
  'home.role.electrical': 'Electrical Engineer',
  'home.role.design': 'UI/UX Designer',
  'home.role.iot': 'IoT & AI Engineer',
  'about.file': 'PERSONAL CASE FILE / 01',
  'about.title': 'UNDER THE HOOD',
  'about.profile': 'SUBJECT PROFILE',
  'about.greeting': "Hello, I'm Yogi.",
  'about.intro': "I'm a developer from Cilacap, Indonesia, interested in creating digital experiences and solutions that interact with the real world.",
  'about.detail': 'My interests span web and app development, UI/UX, embedded systems, and IoT. I enjoy the full process, from shaping an interface to writing code and connecting devices and sensors to make something useful.',
  'about.focus': 'Areas of interest',
  'skills.kicker': 'A few things I work with',
  'skills.title': 'MY SKILLS',
  'category.web': 'Web & App',
  'category.electrical': 'Electrical & IoT',
  'category.design': 'Design',
  'certificates.title': 'CERTIFICATES',
  'certificates.loading': 'Loading certificates...',
  'certificates.error': 'Could not load certificates. Please try again later.',
  'certificates.empty': 'No certificates have been added yet.',
  'contact.tab': 'CONTACT',
  'contact.title': 'GET IN TOUCH',
  'contact.description': 'Have questions or want to collaborate? Send a message using the form or contact me through one of the apps below.',
  'contact.name': 'Name',
  'contact.email': 'Email',
  'contact.message': 'Message',
  'contact.sending': 'SENDING...',
  'contact.send': 'SEND MESSAGE',
  'contact.sentTitle': 'Message sent',
  'contact.sentMessage': 'Your message was sent. Thank you for reaching out!',
  'contact.failedTitle': 'Message not sent',
  'contact.failedMessage': 'Your message could not be sent. Try again or contact me on WhatsApp.',
  'contact.closeNotice': 'Close notification',
  'projects.directory': 'YOGI / PROJECT ARCHIVE',
  'projects.kicker': 'DIRECTORY / 01',
  'projects.title': 'Project Archive',
  'projects.description': 'A collection of projects and experiments I have worked on.',
  'projects.loading': 'Loading projects...',
  'projects.error': 'Could not load projects from Supabase.',
  'projects.empty': 'No projects have been added yet.',
  'projects.viewDetails': 'View project details:',
  'projects.follow': 'Follow for more',
  'projects.index': 'PROJECT INDEX / 06',
  'list.directory': 'YOGI / PROJECT DIRECTORY',
  'list.back': 'Back to portfolio',
  'list.kicker': 'DIRECTORY / ALL',
  'list.title': 'All Projects',
  'list.description': 'Every project I have worked on.',
  'list.year': 'Year',
  'list.allYears': 'All years',
  'list.category': 'Category',
  'list.allCategories': 'All categories',
  'list.project': 'project',
  'list.projects': 'projects',
  'list.empty': 'No projects match these filters.',
  'modal.case': 'CASE FILE / PROJECT',
  'modal.close': 'Close project details',
  'modal.category': 'Category',
  'modal.created': 'Created at',
  'modal.description': 'Description',
  'modal.stack': 'Stack',
  'modal.url': 'URL',
  'common.na': 'N/A',
  'footer.rights': 'All Rights Reserved.',
} as const

type TranslationKey = keyof typeof english

const dictionaries: Record<Language, Record<TranslationKey, string>> = {
  en: english,
  'zh-CN': {
    'nav.home': '首页',
    'nav.about': '关于我',
    'nav.skills': '技能',
    'nav.projects': '项目',
    'nav.certificates': '证书',
    'nav.contact': '联系',
    'language.label': '选择语言',
    'home.title': '我是谁？',
    'home.role.web': '移动端与网页开发者',
    'home.role.electrical': '电气工程师',
    'home.role.design': 'UI/UX 设计师',
    'home.role.iot': '物联网与人工智能工程师',
    'about.file': '个人档案 / 01',
    'about.title': '了解我的内在',
    'about.profile': '人物简介',
    'about.greeting': '你好，我是 Yogi。',
    'about.intro': '我是一名来自印度尼西亚 Cilacap 的开发者，热衷于创造能够与现实世界互动的数字体验与解决方案。',
    'about.detail': '我的兴趣包括网页与应用开发、UI/UX、嵌入式系统和物联网。我喜欢完整的创作过程，从设计界面、编写代码，到连接设备与传感器，打造实用的成果。',
    'about.focus': '兴趣领域',
    'skills.kicker': '我常用的技术',
    'skills.title': '我的技能',
    'category.web': '网页与应用',
    'category.electrical': '电气与物联网',
    'category.design': '设计',
    'certificates.title': '证书',
    'certificates.loading': '正在加载证书...',
    'certificates.error': '无法加载证书，请稍后重试。',
    'certificates.empty': '暂时还没有添加证书。',
    'contact.tab': '联系',
    'contact.title': '保持联系',
    'contact.description': '有问题或想要合作？请填写表单，或通过下方应用联系我。',
    'contact.name': '姓名',
    'contact.email': '电子邮箱',
    'contact.message': '消息',
    'contact.sending': '正在发送...',
    'contact.send': '发送消息',
    'contact.sentTitle': '消息已发送',
    'contact.sentMessage': '消息已发送，感谢联系！',
    'contact.failedTitle': '消息未发送',
    'contact.failedMessage': '消息发送失败，请重试或通过 WhatsApp 联系我。',
    'contact.closeNotice': '关闭通知',
    'projects.directory': 'YOGI / 项目档案',
    'projects.kicker': '目录 / 01',
    'projects.title': '项目档案',
    'projects.description': '我完成的项目与实验作品。',
    'projects.loading': '正在加载项目...',
    'projects.error': '无法从 Supabase 加载项目。',
    'projects.empty': '暂时还没有添加项目。',
    'projects.viewDetails': '查看项目详情：',
    'projects.follow': '查看更多项目',
    'projects.index': '项目索引 / 06',
    'list.directory': 'YOGI / 项目目录',
    'list.back': '返回作品集',
    'list.kicker': '完整目录',
    'list.title': '所有项目',
    'list.description': '我完成的所有项目。',
    'list.year': '年份',
    'list.allYears': '所有年份',
    'list.category': '类别',
    'list.allCategories': '所有类别',
    'list.project': '个项目',
    'list.projects': '个项目',
    'list.empty': '没有符合这些筛选条件的项目。',
    'modal.case': '项目档案',
    'modal.close': '关闭项目详情',
    'modal.category': '类别',
    'modal.created': '创建时间',
    'modal.description': '项目说明',
    'modal.stack': '技术栈',
    'modal.url': '网址',
    'common.na': '无数据',
    'footer.rights': '保留所有权利。',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.about': 'プロフィール',
    'nav.skills': 'スキル',
    'nav.projects': 'プロジェクト',
    'nav.certificates': '資格',
    'nav.contact': 'お問い合わせ',
    'language.label': '言語を選択',
    'home.title': '私は誰？',
    'home.role.web': 'モバイル・Web開発者',
    'home.role.electrical': '電気エンジニア',
    'home.role.design': 'UI/UXデザイナー',
    'home.role.iot': 'IoT・AIエンジニア',
    'about.file': '個人ファイル / 01',
    'about.title': 'プロフィール',
    'about.profile': '人物紹介',
    'about.greeting': 'こんにちは、Yogiです。',
    'about.intro': 'インドネシアのチラチャプ出身の開発者です。現実世界とつながるデジタル体験やソリューションの制作に関心があります。',
    'about.detail': 'Web・アプリ開発、UI/UX、組み込みシステム、IoTに興味があります。インターフェースの設計からコーディング、デバイスやセンサーの接続まで、一連の制作工程を楽しんでいます。',
    'about.focus': '関心分野',
    'skills.kicker': '使用している技術',
    'skills.title': 'スキル',
    'category.web': 'Web・アプリ',
    'category.electrical': '電気・IoT',
    'category.design': 'デザイン',
    'certificates.title': '資格・証明書',
    'certificates.loading': '証明書を読み込み中...',
    'certificates.error': '証明書を読み込めませんでした。後でもう一度お試しください。',
    'certificates.empty': '証明書はまだ登録されていません。',
    'contact.tab': 'お問い合わせ',
    'contact.title': 'お気軽にご連絡ください',
    'contact.description': 'ご質問や協業のご相談は、フォームまたは下記のアプリからご連絡ください。',
    'contact.name': 'お名前',
    'contact.email': 'メールアドレス',
    'contact.message': 'メッセージ',
    'contact.sending': '送信中...',
    'contact.send': 'メッセージを送信',
    'contact.sentTitle': '送信しました',
    'contact.sentMessage': 'メッセージを送信しました。お問い合わせありがとうございます。',
    'contact.failedTitle': '送信できませんでした',
    'contact.failedMessage': '送信に失敗しました。再試行するか、WhatsAppからご連絡ください。',
    'contact.closeNotice': '通知を閉じる',
    'projects.directory': 'YOGI / プロジェクト記録',
    'projects.kicker': 'ディレクトリ / 01',
    'projects.title': 'プロジェクト記録',
    'projects.description': 'これまでに取り組んだプロジェクトと実験の一覧です。',
    'projects.loading': 'プロジェクトを読み込み中...',
    'projects.error': 'Supabaseからプロジェクトを読み込めませんでした。',
    'projects.empty': 'プロジェクトはまだ登録されていません。',
    'projects.viewDetails': 'プロジェクトの詳細を見る：',
    'projects.follow': 'もっと見る',
    'projects.index': 'プロジェクト一覧 / 06',
    'list.directory': 'YOGI / プロジェクト一覧',
    'list.back': 'ポートフォリオに戻る',
    'list.kicker': '全プロジェクト',
    'list.title': 'すべてのプロジェクト',
    'list.description': 'これまでに取り組んだすべてのプロジェクトです。',
    'list.year': '年',
    'list.allYears': 'すべての年',
    'list.category': 'カテゴリー',
    'list.allCategories': 'すべてのカテゴリー',
    'list.project': '件',
    'list.projects': '件',
    'list.empty': '条件に一致するプロジェクトはありません。',
    'modal.case': 'プロジェクト記録',
    'modal.close': '詳細を閉じる',
    'modal.category': 'カテゴリー',
    'modal.created': '作成日',
    'modal.description': '説明',
    'modal.stack': '使用技術',
    'modal.url': 'URL',
    'common.na': '該当なし',
    'footer.rights': '無断転載を禁じます。',
  },
}

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey | string) => string
  translateCategory: (category: string | null) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setCurrentLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language')
    return savedLanguage === 'zh-CN' || savedLanguage === 'ja' ? savedLanguage : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem('portfolio-language', nextLanguage)
    setCurrentLanguage(nextLanguage)
  }

  const t = (key: TranslationKey | string) => dictionaries[language][key as TranslationKey] ?? english[key as TranslationKey] ?? key

  const translateCategory = (category: string | null) => {
    const normalizedCategory = category?.trim().toLowerCase()
    if (normalizedCategory === 'web & app') return t('category.web')
    if (normalizedCategory === 'electrical & iot' || normalizedCategory === 'iot & electrical') return t('category.electrical')
    if (normalizedCategory === 'design') return t('category.design')
    return category || t('common.na')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translateCategory }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}