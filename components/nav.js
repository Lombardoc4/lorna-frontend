import React, { useState } from "react"
import Link from "next/link"

const Nav = () => {
  const [collapse, setCollapse] = useState(false)

  const toggleNav = (open) => {
    setCollapse(open || !collapse)
  }

  return (
    <header className="top-0 w-100">
      <nav className="container navbar navbar-expand-lg navbar-light w-100 py-md-3">
        <a
          className="navbar-brand d-flex d-lg-none m-0 w-100"
          onClick={() => toggleNav()}
        >

            <img className="col-1 mx-auto" src="/favicon.png" alt="Lorna Shore"/>
          <h1 className="mb-0 text-center fw-bolder">
          </h1>
        </a>
        <div
          className={`collapse navbar-collapse ${collapse && "show"}`}
          id="navbarNav"
        >
          <div className="navbar-nav px-3 px-lg-0 align-items-lg-baseline">
            <Link href="/">
              <a
                onClick={() => toggleNav()}
                className="nav-link text-decoration-underline text-reset text-decoration-none d-none  m-0"
              >
                <h1 className="mb-0 me-lg-3">Lorna Shore</h1>
              </a>
            </Link>
            <Link href="/">
              <a
                onClick={() => toggleNav()}
                className="nav-link text-decoration-underline text-reset  my-1 my-lg-0"
              >
                Home
              </a>
            </Link>
            <Link href="/shows.html">
              <a
                onClick={() => toggleNav()}
                className="nav-link text-decoration-underline text-reset my-1 my-lg-0"
              >
                Shows
              </a>
            </Link>
            <Link href="/releases.html">
              <a
                onClick={() => toggleNav()}
                className="nav-link text-decoration-underline text-reset my-1 my-lg-0"
              >
                Releases
              </a>
            </Link>
            <a
              onClick={() => toggleNav()}
              href="https://www.youtube.com/channel/UC0nS0FSoouwc_Nm8g6DnH8w"
              target="_blank"
              className="nav-link text-decoration-underline text-reset my-1 my-lg-0"
              rel="noreferrer"
            >
              Videos
            </a>
            {/* <a
              onClick={() => toggleNav()}
              href="https://lornashorestore.com/"
              target="_blank"
              className="nav-link text-decoration-underline text-reset my-1 my-lg-0"
              rel="noreferrer"
            >
              Shop
            </a> */}
            <div className="dropdown">
              <a href="#" className="nav-link text-decoration-underline text-reset dropdown-toggle" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                Shops
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="https://lornashorestore.com/">US Store</a></li>
                <li><a className="dropdown-item" href="https://www.impericon.com/de/lorna-shore.html?sort=online%3Adesc">EU Store</a></li>
                <li><a className="dropdown-item" href="https://www.indiemerchstore.com/collections/vendors?q=Lorna%20Shore">Indiemerch</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
