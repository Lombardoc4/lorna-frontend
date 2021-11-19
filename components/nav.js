import React, { useState } from "react"
import Link from "next/link"

const Nav = () => {
  const [collapse, setCollapse] = useState(false)

  const toggleNav = (open) => {
    setCollapse(open || !collapse)
  }

  return (
    <header>
      <nav className="container navbar navbar-expand-lg navbar-light w-100 py-3">
        <a
          className="navbar-brand d-lg-none m-0 w-100"
          onClick={() => toggleNav()}
        >
          <h1 className="mb-0 text-center">Lorna Shore</h1>
        </a>
        <div
          className={`collapse navbar-collapse ${collapse && "show"}`}
          id="navbarNav"
        >
          <div className="navbar-nav px-3 px-lg-0 align-items-lg-baseline">
            <Link href="/">
              <a
                onClick={() => toggleNav()}
                className="text-reset text-decoration-none d-none d-lg-block m-0"
              >
                <h1 className="mb-0 me-lg-3">Lorna Shore</h1>
              </a>
            </Link>
            <Link href="/">
              <a
                onClick={() => toggleNav()}
                className="text-reset d-lg-none fs-5 my-2 my-lg-0"
              >
                Home
              </a>
            </Link>
            <Link href="/shows">
              <a
                onClick={() => toggleNav()}
                className="text-reset fs-5 my-2 my-lg-0"
              >
                Shows
              </a>
            </Link>
            <Link href="/releases">
              <a
                onClick={() => toggleNav()}
                className="text-reset fs-5 my-2 my-lg-0"
              >
                Releases
              </a>
            </Link>
            <a
              onClick={() => toggleNav()}
              href="https://www.youtube.com/channel/UC0nS0FSoouwc_Nm8g6DnH8w"
              target="_blank"
              className="text-reset fs-5 my-2 my-lg-0"
              rel="noreferrer"
            >
              Videos
            </a>
            <a
              onClick={() => toggleNav()}
              href="https://lornashorestore.com/"
              target="_blank"
              className="text-reset fs-5 my-2 my-lg-0"
              rel="noreferrer"
            >
              Shop
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
