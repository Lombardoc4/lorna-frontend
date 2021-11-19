import Footer from "./footer"
import Nav from "./nav"

const Layout = ({ children, bands, seo }) => (
  <>
    <Nav bands={bands} />
    {children}
    <Footer />
  </>
)

export default Layout
