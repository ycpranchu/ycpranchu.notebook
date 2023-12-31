import { useRouter } from 'next/router'

export default {
    logo: (
        <>
            <span style={{ marginLeft: '.0em', fontWeight: 800 }}>
                ycpin & ranchu's Notebook 🎃
            </span>
        </>
    ),
    project: {
        link: 'https://github.com/ycpranchu'
    },
    docsRepositoryBase: 'https://github.com/ycpranchu/ycpranchu.notebook/tree/main',
    useNextSeoProps() {
        const { asPath } = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s 🎃'
            }
        }
        else {
            return {
                titleTemplate: 'ycpin & ranchu\'s Notebook 🎃'
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
    navigation: {
        prev: true,
        next: true
    },
    footer: {
        text: (
            <span>
                MIT {new Date().getFullYear()} ©{' '}
                <a href="https://ycpranchu.com" target="_blank">
                    ycpin & ranchu, National Yang Ming Chiao Tung University
                </a>
            </span>
        )
    },
}