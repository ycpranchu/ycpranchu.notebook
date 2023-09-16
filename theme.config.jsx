import { useRouter } from 'next/router'

export default {
    logo: (
        <>
            <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
                ycpin's Notebook 🎃
            </span>
        </>
    ),
    project: {
        link: 'https://github.com/ycpranchu'
    },
    docsRepositoryBase: 'https://github.com/ycpranchu/ycpranchu.github.io',
    useNextSeoProps() {
        const { asPath } = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s - SWR'
            }
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </>
    ),
    // chat: {
    //     link: 'https://twitter.com/shuding_'
    // },
    sidebar: {
        defaultMenuCollapseLevel: 1,
        autoCollapse: true,
    },
    sidebar: {
        titleComponent({ title }) {
            if (title === 'About') {
                return <>{title}</>
            }
            return <>{title}</>
        }
    },
    editLink: {
        text: 'Edit this page on GitHub →',
    },
    feedback: {
        content: 'Question? Give us feedback →',
        labels: 'feedback'
    },
    primary_navigation: [
        {
            route: "/",
            name: "Home",
        },
        {
            route: "/posts",
            name: "Blog",
        },
        {
            route: "/about",
            name: "About",
        },
        {
            route: "/contact",
            name: "Contact",
        },
    ],
    secondary_navigation: [
        {
            route: "/disclaimer",
            name: "Disclaimer",
        },
        {
            route: "/privacy-policy",
            name: "Privacy policy",
        },
    ],
    social_links: [
        {
            name: "Twitter",
            url: "https://facebook.com/officialrajdeepsingh",
        },
        {
            name: "Github",
            url: "https://facebook.com/officialrajdeepsingh",
        },
    ],
    footer: {
        text: '2023 © Made by ycpin & ycpranchu'
    },
}