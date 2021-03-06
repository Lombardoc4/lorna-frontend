import Records from "../components/records"
import Seo from "../components/seo"
import NextImage from "../components/image"
import Link from "next/link"
import { fetchAPI } from "../lib/api"
import { motion } from "framer-motion"

const FadeInX = ({  direction, children, ...rest }) => {
  console.log(rest);
  return <motion.div
    initial={{ opacity: 0, x: direction ? parseInt(direction + 50) : 0}}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3 }}
    {...rest}
  >{children}</motion.div>
}


const Home = ({ homepage, latestAlbum }) => {
  latestAlbum = latestAlbum[0];
  return (
    <>
      <Seo seo={homepage.seo} />

      <div className="section">
            <div className="homepage-final py-5 position-relative " style={{backgroundImage: `url(${homepage.tour[homepage.tour.length-1].url})`}}>
              <FadeInX viewport={{ once: true }}>
                <div className="container py-5 display-3 position-absolute top-50 start-50 translate-middle">
                  <img src="lorna-logo-w.png" className="col-12 col-md-6 py-3" alt="Lorna Shore"/>
                  <div className="d-flex flex-wrap justify-content-around mx-auto mx-md-0 col-9 col-md-6">
                    <Link href="/shows">
                      <a className="text-uppercase fw-bold mb-3 btn btn-outline-light fs-4">
                        Upcoming Shows
                      </a>
                    </Link>
                    <div className="mb-3 dropdown fs-4">
                      <button className="text-uppercase fw-bold fs-4 btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Shops
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="https://lornashorestore.com/">US Store</a></li>
                        <li><a className="dropdown-item" href="https://www.impericon.com/de/lorna-shore.html?sort=online%3Adesc">EU Store</a></li>
                        <li><a className="dropdown-item" href="https://www.indiemerchstore.com/collections/vendors?q=Lorna%20Shore">Indiemerch</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInX>
            </div>
      </div>

      <div className="bg-black overflow-hidden section pt-md-0 row g-0 row-cols-md-2" >
        {homepage.tour.map((tourImg, i) => {
          if (i + 1 !== homepage.tour.length){
            return (
              <FadeInX direction={i % 2 === 0 ? '-' : '+'}  key={tourImg.name}>
              <Link href="/shows">
              <a className="g-0 flex-grow-1 " >
                <NextImage image={tourImg}/>
                <span className="position-absolute opacity-0 top-0 start-0">Shows</span>

              </a>
              </Link>
              </FadeInX>
            )
          }
        })}
      </div>

      <div className="section pt-md-0">

        <div className="row g-0 position-relative">
          <div className="py-5" style={{backgroundImage: `url(${homepage.seo.shareImage.url})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: "#000 0px 5px 20px -10px inset, #000 0px -5px 20px -10px inset"}}>
            <div className="py-5 text-center" >
              {latestAlbum.songList.map(song => {
                return (
                  <h1 key={song} className="display-3" style={{WebkitTextStroke: '2px black', WebkitTextFillColor: 'transparent'}}>
                     {song}
                  </h1>
                )
                })}
            </div>
          <div className="container text-center">

                <div className="d-flex justify-content-around my-5 row-cols-3 row-cols-md-4">
                <Link href="/releases/and-i-return-to-nothingness">
                      <a className="text-reset">
                      <span className="position-absolute opacity-0 top-0 start-0">And I Return To Nothingness</span>

                  <div className="rotateCD-CW">
                    <div className="rotateCD-front">
                      <NextImage image={latestAlbum.cover} />
                    </div>
                    <div className="rotateCD-left"></div>
                    <div className="rotateCD-right"></div>
                    <div className="rotateCD-back d-flex flex-column align-items-center justify-content-center list-unstyled text-white font-cinzel">
                      <img src="/favicon.png" alt="" style={{width: '100%', height: '100%', filter: 'invert(1)'}} width='30px' height='30px'/>
                    </div>
                  </div>
                      </a>
                    </Link>
                    <Link href="/releases/and-i-return-to-nothingness">
                      <a className=" text-reset">
                      <span className="position-absolute opacity-0 top-0 start-0">And I Return To Nothingness</span>

                  <div className="rotateCD-CCW">
                    <div className="rotateCD-front">
                      <NextImage image={latestAlbum.cover} />
                    </div>
                    <div className="rotateCD-left"></div>
                    <div className="rotateCD-right"></div>
                    <div className="rotateCD-back d-flex flex-column align-items-center justify-content-center list-unstyled text-white font-cinzel">
                      <img src="/favicon.png" alt="" style={{width: '100%', height: '100%', filter: 'invert(1)'}} width='30px' height='30px'/>
                    </div>
                  </div>

                  </a>
                    </Link>
                </div>
              </div>
          </div>

            <div className="d-none position-absolute top-50 start-50 translate-middle text-center text-reset text-decoration-none">

              <div className="container py-5">
                <div className="w-25 mx-auto">

                <NextImage image={latestAlbum.cover} />
                </div>
                <h1 className="display-1 fw-bolder text-white text-reset" style={{textShadow: "1px 1px white"}}>
                  ...And I Return To<br/>Nothingness
                </h1>
              </div>
            </div>
        </div>
      </div>
      <div className="section container pt-md-0" >
      <div className="row g-0 py-md-3 justify-content-around align-items-center">
              <a className="col-md-5 p-3 order-2 order-md-1 position-relative blank" href="https://www.youtube.com/watch?v=qyYmS_iBcy4" target="_blank" rel="noreferrer">
                  <img className="rounded w-100" src="to-the-hellfire.webp" alt="To The Hellfire"/>
                  <h2 className="fs-2 w-75 position-absolute top-50 start-50 translate-middle text-center" style={{color: 'white', textShadow: '1px 1px black'}}>To the Hellfire</h2>
              </a>

              <h3 className="video-header col text-center mt-3 mt-md-0 mb-0 order-1 order-md-2">Videos</h3>

              <a className="position-relative col-md-5 p-3 order-3 blank" href="https://www.youtube.com/watch?v=xHE5g9YgkFg" target="_blank" rel="noreferrer">
                <img className="rounded w-100" src="and-i-return-to-nothingness.webp" alt="And I Return to Nothingness"/>
                <h2 className="fs-2 w-75 position-absolute top-50 start-50 translate-middle text-center" style={{color: 'white', textShadow: '1px 1px black'}}>And I Return To Nothingness</h2>
              </a>
            </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage, latestAlbum] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI(`/records?slug=and-i-return-to-nothingness`),
  ])

  return {
    props: { homepage, latestAlbum },
    revalidate: 1,
  }
}

export default Home
