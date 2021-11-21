import Records from "../components/records"
import Seo from "../components/seo"
import NextImage from "../components/image"
import Link from "next/link"
import { fetchAPI } from "../lib/api"

const Home = ({ records, homepage, latestAlbum }) => {
  console.log(latestAlbum)
  return (
    <>
      <Seo seo={homepage.seo} />

      <div className="section pt-lg-0">
        <div className="d-lg-none my-3">
          <Link href="https://lornashorestore.com/products/lorna-shore-and-i-return-to-nothingness-cd-ep">
            <a className="text-center text-reset">
              {/* <div className="row row-cols-md-2"> */}
              {/* </div> */}

              <div className="w-50  mx-auto py-3 position-relative">
                <NextImage image={latestAlbum[0].cover} />
                <p className="pt-1 position-absolute top-0 start-100 translate-middle-x badge bg-danger fs-4 fw-bolder mb-0">
                  SOLD OUT
                </p>
              </div>
              <h1 className="fw-bolder">...And I Return To Nothingness</h1>
            </a>
          </Link>
        </div>

        <div className="row g-0 position-relative">
          <div>
            <NextImage image={homepage.seo.shareImage} />
          </div>
          <Link href="https://lornashorestore.com/">
            <a className="d-lg-none position-absolute top-50 start-50 translate-middle text-center display-1 fw-bolder text-white">
              <h1 className="mb-0">Store</h1>
            </a>
          </Link>

          <Link href="https://lornashorestore.com/products/lorna-shore-and-i-return-to-nothingness-cd-ep">
            <a className="d-none d-lg-block position-absolute bottom-0 start-50 translate-middle-x text-center text-reset">
              {/* <div className="row row-cols-md-2"> */}
              {/* </div> */}

              <div className="w-25 mx-auto py-3 position-relative">
                <NextImage image={latestAlbum[0].cover} />
                <p className="pt-1 position-absolute top-0 start-100 translate-middle-x badge bg-danger fs-4 fw-bolder mb-0">
                  SOLD OUT
                </p>
              </div>
              <h1 className=" fw-bolder pb-5 text-white">
                ...And I Return To Nothingness
              </h1>
            </a>
          </Link>
        </div>
      </div>

      {/* <Records records={records} /> */}
      {/* <Events events={events} /> */}
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [records, homepage, latestAlbum] = await Promise.all([
    fetchAPI("/records"),
    fetchAPI("/homepage"),
    fetchAPI(`/records?slug=and-i-return-to-nothingness`),
  ])

  return {
    props: { records, homepage, latestAlbum },
    revalidate: 1,
  }
}

export default Home
