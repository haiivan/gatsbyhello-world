import React from 'react'
import {Link, graphql,useStaticQuery} from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {

    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
        <h1>
            <Link to="/" className={headerStyles.title}>
                {data.site.siteMetadata.title}
            </Link>
        </h1>
        <nav>
            <ul activeClassName={headerStyles.activeNavItem} className={headerStyles.navList}>
                <li><Link activeClassName={headerStyles.activeNavItem} className={headerStyles.navItem} to="/contact" className={headerStyles.navItem}>Contact</Link></li>
                <li><Link activeClassName={headerStyles.activeNavItem} to="/about" className={headerStyles.navItem}>About</Link></li>
                <li><Link activeClassName={headerStyles.activeNavItem}
                to="/blog" className={headerStyles.navItem}>Blog</Link></li>
                
            </ul>
        </nav>
        </header>
    )
}

export default Header
