
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
            <div>
                 <header className="top-0 z-50 h-16 lg:sticky" role="banner">
                    <Navbar />
                </header>
                <main role="main">{children}</main>
                <footer role="footer">
                    <Footer />
                </footer>
            </div>
        </>
  )
}

export default Layout
