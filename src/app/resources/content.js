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
    label: 'About',
    title: 'About me',
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
                    <>負責wifi、pon產品產測程式.</>,
                    <>主要開發產測程式，網通儀器程控與DUT環境架設、ThroughtPut測試.</>,
                    <>相關技能C#,Python.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '',
                        alt: '',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: '日月光',
                timeframe: '2022',
                role: 'CMES工程師SD',
                achievements: [
                    <>負責CP、FT DownTime系統.</>,
                    <>學習到大型系統的維運，軟體開發的生命週期，從需求分析、開發與測試，彈性的軟體架構提供多人維運.</>,
                     <>相關技能vb,c#,gitlab,oracle sql</>
                ],
                images: [ ]
            },
            {
                company: '台林電通',
                timeframe: '2018 - 2021、2022 - 2023',
                role: '自動化軟體工程師',
                achievements: [
                    <>Wifi、車用產品、工廠自動化.</>,
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
                     <>AB PLC,三菱PLC</>
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
                description: <>電子工程系，學習MCU、數位電路板、太陽能薄膜製程.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Web',
                description: <>點餐網站</>,
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
                title: 'Winform',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                link: 'https://yellow-bay-07b2d5310.4.azurestaticapps.net/',
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
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
