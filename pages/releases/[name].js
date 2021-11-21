import Records from "../../components/records"
import { fetchAPI } from "../../lib/api"
import NextImage from "../../components/image"
import Seo from "../../components/seo"


const albumDetails = ({ record, records }) => {
  const metaDescription = `Lorna Shora's ${record.name} ${record.albumType.charAt(0).toUpperCase() + record.albumType.slice(1)} released on ${record.releaseDate}`
  return (
    <>
      <Seo metaTitle={record.name} metaDescription={metaDescription} shareImage={record.cover}/>
      <div className="container section">
        <div className="row g-0">
          <div className="col-md-6 order-2 order-md-1">
            <div className="albumType mb-3">
              <p className="mb-0" style={{ paddingTop: "2px" }}>
                {record.albumType === 'studio' ? 'Full Length' : record.albumType }
              </p>
            </div>
            <h2>{record.name}</h2>
            <p>{record.releaseDate}</p>
            <div className="dropdown mb-3">
              <a
                className="dropdown-toggle p-2"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
              >
                <span className="text-underline">Stream</span>
              </a>
              <div
                style={{ minWidth: "unset" }}
                className="dropdown-menu"
                aria-labelledby="dropdownMenuLink"
              >
                <div className="d-flex flex-column px-3">
                  {record.streamLinks.map((link) => {
                    return (
                      <a key={link.link} href={link.link} className="my-2">
                        {link.service}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            <p>
              {record.songList.map((song, i) => {
                return (
                  <span key={song}>
                    {i + 1}. {song}
                    <br />
                  </span>
                )
              })}
            </p>
          </div>
          <div className="col-md-5 order-1 order-md-2">
            <NextImage image={record.cover} />
          </div>
        </div>
      </div>
      {record.video && (
        <div className="video-section">
          <p>Video</p>
          <a href={record.video.src} target="_blank" rel="noreferrer">
            <NextImage image={record.video.img} />
          </a>
        </div>
      )}
      <Records records={records} />
    </>
  )
}

export async function getStaticPaths() {
  const records = await fetchAPI("/records")

  // Get the paths we want to pre-render based on posts
  const paths = records.map((record) => ({
    params: { name: record.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const records = await fetchAPI("/records?_sort=email:ASC")
  // Run API calls in parallel
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const record = await fetchAPI(`/records?slug=${params.name}`)

  return {
    props: {
      record: record[0],
      records,
    },
    revalidate: 1,
  }
}

export default albumDetails
