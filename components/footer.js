import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div className="container section footer py-3 py-lg-5">
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
            <h4 className="">Listen Now</h4>
            <div className="row">
              <a className="text-reset col-2" href="https://open.spotify.com/artist/6vXYoy8ouRVib302zxaxFF?si=3leWUb0STYeByjH355o-7A" target="_blank" rel="noreferrer">
                <img className="w-75" src="/Spotify_Icon_RGB_Green.png"/><br/>
                {/* Spotify */}
                </a>
              <br className="d-md-none"/>
              <a className="text-reset col-2" href="https://music.apple.com/us/artist/lorna-shore/385220213?itsct=music_box_link&itscg=30200&ls=1&app=music" target="_blank" rel="noreferrer">
                <img className="w-75" src="/Apple_Music_Icon_RGB_sm_073120.svg"/><br/>
                {/* Apple Music */}
                </a>
            </div>
          </div>
        </div>
        <div className="mt-3 mb-5  mb-lg-0 pb-lg-0 ">
          <p className="mb-5 pb-3 mb-lg-0 pb-lg-0 copyright text-right">
            © Lorna Shore 2021<br/>
            Site by <a className="text-reset" href="https://crislombardo.com">Cris Lombardo</a><br/>
            Photo Credits to James Perry
          </p>
        </div>
        {/* <div
          id="mobile-spacer"
          className="d-lg-none"
          style={{ height: "75px" }}
        /> */}
      </div>
    </footer>
  )
}

export default Footer
