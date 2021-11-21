import Link from "next/link"

const Footer = () => {
  return (
    <footer className="container section footer py-3 py-lg-5">
      <div className="row row-cols-2">
        <u className="d-flex flex-column">
          <a href="https://www.facebook.com/LornaShore" className="text-reset">
            Facebook
          </a>
          <a
            href="https://www.instagram.com/LornaShore/"
            className="text-reset"
          >
            Instagram
          </a>
          <a href="https://twitter.com/LornaShore" className="text-reset">
            Twitter
          </a>
          <a
            href="https://www.youtube.com/channel/UC0nS0FSoouwc_Nm8g6DnH8w"
            className="text-reset"
          >
            Youtube
          </a>
          <a
            href="https://lornashorestore.com/"
            target="_blank"
            className="text-reset"
            rel="noreferrer"
          >
            Shop
          </a>
        </u>
        <div className="d-flex flex-column">
          <h4 className="text-center">Listen Now</h4>
          <div className="d-md-flex justify-content-around">
            <a className="text-reset" href="https://open.spotify.com/artist/6vXYoy8ouRVib302zxaxFF?si=3leWUb0STYeByjH355o-7A" target="_blank" rel="noreferrer">Spotify</a>
            <br className="d-md-none"/>
            <a className="text-reset" href="https://music.apple.com/us/artist/lorna-shore/385220213" target="_blank" rel="noreferrer">Apple Music</a>
          </div>
          <div className="mt-auto">
            <p className="mb-0 copyright text-right">© Lorna Shore 2021</p>
          </div>
        </div>
      </div>
      <div
        id="mobile-spacer"
        className="d-lg-none"
        style={{ height: "75px" }}
      />
    </footer>
  )
}

export default Footer
