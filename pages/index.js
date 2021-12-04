import Records from "../components/records"
import Seo from "../components/seo"
import NextImage from "../components/image"
import Link from "next/link"
import { fetchAPI } from "../lib/api"

const Home = ({ homepage, latestAlbum }) => {
  latestAlbum = latestAlbum[0];
  console.log(homepage);
  return (
    <>
      <Seo seo={homepage.seo} />

      <div className="section pt-lg-0 row g-0 row-cols-md-2" >
        {homepage.tour.map((tourImg, i) => {
          if (i + 1 !== homepage.tour.length){
            return (
              <Link key={tourImg.name} href="/shows.html">
              <a className="g-0 flex-grow-1 " >
                <NextImage image={tourImg}/>
              </a>
              </Link>
            )
          }
        })}
      </div>


      <div className="section pt-lg-0">

        <div className="row g-0 position-relative">
          <div style={{backgroundImage: `url(${homepage.seo.shareImage.url})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: "#000 0px 5px 20px -10px inset, #000 0px -5px 20px -10px inset"}}>
            <div className="py-5 text-center" >
              {latestAlbum.songList.map(song => {
                console.log(song)
                return (
                  <h1 key={song} className="display-3" style={{WebkitTextStroke: '2px black', WebkitTextFillColor: 'transparent'}}>
                     {song}
                  </h1>
                )
                })}
            {/* <Link href="/releases/and-i-return-to-nothingness.html">
              <a className="text-reset"><h2 className="display-5">View Album Now</h2></a>
            </Link> */}
            </div>
          <div className="container text-center">
                {/* <div className="w-25 mx-auto">

                <NextImage image={latestAlbum[0].cover} />
                </div> */}



                {/* <p style={{paddingTop: '0.5em'}} className="position-absolute top-0 start-100 translate-middle-x badge bg-danger fs-4 fw-bolder mb-0">
                  SOLD OUT
                // </p> */}
                {/* // <h1 className="display-1 fw-bolder text-white text-reset" style={{textShadow: "1px 1px white"}}>
                //   ...And I Return To<br/>Nothingness
                // </h1> */}



                <div className="d-flex justify-content-around my-5 row-cols-3">
                <Link href="/releases/and-i-return-to-nothingness.html">
                      <a className="text-reset">

                  <div className="rotateCD-CW">
                    <div className="rotateCD-front">
                      <NextImage image={latestAlbum.cover} />
                    </div>
                    <div className="rotateCD-left"></div>
                    <div className="rotateCD-right"></div>
                    <div className="rotateCD-back">
                    </div>
                  </div>
                      </a>
                    </Link>
                    <Link href="/releases/and-i-return-to-nothingness.html">
                      <a className=" text-reset">

                  <div className="rotateCD-CCW">
                    <div className="rotateCD-front">
                      <NextImage image={latestAlbum.cover} />
                    </div>
                    <div className="rotateCD-left"></div>
                    <div className="rotateCD-right"></div>
                    <div className="rotateCD-back">
                    </div>
                  </div>

                  </a>
                    </Link>
                </div>
              </div>

          </div>

          {/* <Link href="https://lornashorestore.com/">
            <a className="d-lg-none position-absolute top-50 start-50 translate-middle text-center display-1 fw-bolder text-white">
              <h1 className="mb-0">Store</h1>
            </a>
          </Link> */}

          {/* <Link href="https://lornashorestore.com/products/lorna-shore-and-i-return-to-nothingness-cd-ep"> */}
            <div className="d-none position-absolute top-50 start-50 translate-middle text-center text-reset text-decoration-none">
              {/* <div className="row row-cols-md-2"> */}
              {/* </div> */}

              <div className="container py-5">
                <div className="w-25 mx-auto">

                <NextImage image={latestAlbum.cover} />
                </div>
                {/* <p style={{paddingTop: '0.5em'}} className="position-absolute top-0 start-100 translate-middle-x badge bg-danger fs-4 fw-bolder mb-0">
                  SOLD OUT
                </p> */}
                <h1 className="display-1 fw-bolder text-white text-reset" style={{textShadow: "1px 1px white"}}>
                  ...And I Return To<br/>Nothingness
                </h1>
              </div>
            </div>
          {/* </Link> */}
        </div>
      </div>
      <div className="section pt-lg-0" >
      <div className="row g-0 py-lg-3 justify-content-around">
                  <a className="col-md-5 p-3" href="https://www.youtube.com/watch?v=qyYmS_iBcy4" target="_blank" rel="noreferrer">

              <div className="position-relative">
                  {/* <NextImage image={latestAlbum.cover}/> */}
                  <img className=" rounded w-100" src="into-the-hellfire.webp"/>
                <h3 className="fs-2 w-75 position-absolute top-50 start-50 translate-middle text-center" style={{color: 'white', textShadow: '1px 1px black'}}>Into the Hellfire</h3>
              </div>
                  </a>

                  <a className="col-md-5 p-3" href="https://www.youtube.com/watch?v=xHE5g9YgkFg" target="_blank" rel="noreferrer">

              <div className="position-relative">
                {/* <NextImage image={latestAlbum.cover}/> */}
                <img className=" rounded w-100" src="and-i-return-to-nothingness.webp"/>

                <h3 className="fs-2 w-75 position-absolute top-50 start-50 translate-middle text-center" style={{color: 'white', textShadow: '1px 1px black'}}>And I Return To Nothingness</h3>
              </div>
              </a>
            </div>
              {/* <NextImage image={homepage.tour[homepage.tour.length-1]}/> */}
      </div>
      <div className="section">
            <div className="py-5 position-relative " style={{backgroundImage: `url(${homepage.tour[homepage.tour.length-1].url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center 25%', boxShadow: "#000 0px 5px 20px -10px inset, #000 0px -5px 20px -10px inset"}}>
            {/* <NextImage image={homepage.tour[homepage.tour.length-1]}/> */}
                <div className="py-3 py-lg-5"></div>
                <h3 className="w-75 py-5 display-3 position-absolute top-50 start-50 translate-middle">
                  It&apos;s me<br/>
                  Will Ramos
                  </h3>
                <div className="py-5"></div>
                <div className="py-3 py-lg-5"></div>
            </div>
      </div>

      {/* <Records records={records} /> */}
      {/* <Events events={events} /> */}
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
