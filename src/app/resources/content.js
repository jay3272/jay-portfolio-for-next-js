import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Jay',
    lastName:  'Wu',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/jaywu.jpg',
    location:  'Asia/Taipei',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Chinese']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>喜歡研究新技術的打雜工程師.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/jay3272',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/jay-wu-5a4b761a3/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:jaywu3272@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `作品集 - ${person.role}`,
    headline: <>程式語言職擔當</>,
    subline: <>I'm Jay, 聽說周杰倫是一個種族，我是軟體工程界的 <InlineCode>杰倫</InlineCode>, 專研多種程式<br/> 工作經歷在OT與IT都有涉略, PLC、軟體自動化測試、網頁、、APP</>
}

const about = {
    label: 'Resume',
    title: 'Resume',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: ''
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>我是吳介,宜蘭人現居桃園,雲科大電子工程、中央大學網路學習科技研究所,擅長軟體工程.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: '工作經驗',
        experiences: [
            {
                company: '展達通訊-群光集團',
                timeframe: '2024 - Present',
                role: 'Software Engineer',
                achievements: [
                    <>負責wifi、Gpon產品產測程式.</>,
                    <>主要開發產測程式，網通儀器程控與DUT環境架設、ThroughtPut測試.</>,
                    <>使用iTest儀器RF測試.</>,
                    <>相關技能C#,Python、信而泰、iTest、TestCenter</>
                ],
                images: [ ]
            },
            {
                company: '日月光',
                timeframe: '2022',
                role: 'CMES工程師SD',
                achievements: [
                    <>負責CP、FT DownTime系統.</>,
                    <>熟悉軟體開發的生命週期，包括需求分析、設計、開發、測試與部署，提升跨部門溝通與協作能力.</>,
                     <>相關技能vb,c#,gitlab,oracle sql</>
                ],
                images: [ ]
            },
            {
                company: 'Tailyn',
                timeframe: '2018 - 2021、2022 - 2023',
                role: '自動化軟體工程師',
                achievements: [
                    <>Wifi、車用產品、工廠自動化.</>,
                    <>Wifi: Throught Test. iperf測試</>,
                    <>車用產品: 整合Chroma Hipot、Relay、PowerSupply等、CANBus測試電路板充放電.</>,
                    <>透過Mobus擷取變頻器、扭力把手、台達PLC.</>,
                    <>協助RD開發FPGA資料驗證，透過UART傳送資料驗證.</>,
                    <>開發倉儲系統替公司節省百萬元委外開發，且客製化功能設計..</>,
                     <>相關技能vb,c# mvc,python,Auto it,JavaScript,MS SQL</>,
                     <>GPIB,CAN bus,Modbus,RS232</>
                ],
                images: [ ]
            },
            {
                company: '宜碩自動化',
                timeframe: '2014 - 2018',
                role: 'PLC系統工程師',
                achievements: [
                    <>美國、德國出差負責紙模型機台與製漿系、長春化工定時除塵環境監控系統.</>,
                     <>AB PLC,三菱PLC、HMI</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: '中央大學',
                description: <>專注於AI模型訓練，GPT應用於倉儲系統、設計開發遊戲程式輔助英語學習.</>,
            },
            {
                name: '雲林科技大學',
                description: <>電子工程系，學習MCU、太陽能薄膜製程.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: '點餐網站',
                description: <>Link:這個專案上發想是想設計一個餐廳線上點餐的網站，主要功能為顧客查看菜單，並在手機上點選餐點後送出至後端資料庫，使用React與SQlite撰寫.</>,
                link: 'https://yellow-bay-07b2d5310.4.azurestaticapps.net/',
                images: [
                    {
                        src: '/images/projects/project-01/posnext.jpg',
                        alt: '點餐網站',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: '倉儲系統',
                description: <>Link:論文專題結合GPT於倉儲系統，使用C# MVC、JavaScript、JQuery、MS SQL Server、Azure WebApi、Openai api撰寫的倉儲管理系統.</>,
                link: 'https://github.com/jay3272/TE_ManagementSystem',
                images: [
                    {
                        src: '/images/projects/project-01/warehouse1.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Test Platform',
                description: <>Link:系統測試平台:主要用於整合儀器(示波器、Led分析儀...).Winform，主要改用SQL改善flow文字檔不易維護與索引，順便練習C# MVP架構</>,
                link: 'https://github.com/jay3272/TE_ManagementSystem',
                images: [
                    {
                        src: '/images/projects/project-01/testplatform.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: '英文學習小鴨遊戲',
                description: <>Link:使用Unity C#開發，中央大學課程專題開發輔助小學生透過遊戲學習英文.</>,
                link: 'https://github.com/jay3272/SuperDuck',
                images: [
                    
                ]
            },
            {
                title: '英文口說語音辨識學習',
                description: <>Link:使用Unity C#開發，中央大學課程專題開發輔助小學生透過遊戲學習英文.</>,
                link: 'https://www.youtube.com/watch?v=qWvyJl9Gpn0',
                images: [
                    
                ]
            },
            {
                title: '三菱PLC與Winform串接',
                description: <>Link:使用Vb與三菱PLC串接做HMI.</>,
                link: 'https://www.youtube.com/watch?v=xBkBo7X4sH0&list=PLaT5nNKtahpElHbAHM6RxwDg3OKxJF1La',
                images: [
                    
                ]
            },
            {
                title: '紙模裁邊機',
                description: <>Link:使用AB PLC 、HMI、Demo kit，控制伺服馬達定位裁邊，在這專案學習PLC系統設計，IO點位檢測、步進馬達控制氣壓手臂與Loadcell判斷</>,
                link: 'https://www.youtube.com/watch?v=Xaq_zIgBMKo&list=PLaT5nNKtahpElHbAHM6RxwDg3OKxJF1La&index=10',
                images: [
                    
                ]
            },
            {
                title: 'freecodecamp認證',
                description: <>網頁開發300hr認證</>,
                link: 'https://www.freecodecamp.org/certification/jaywu77/responsive-web-design',
                images: [
                    
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
