import Records from "../../components/records"
import { fetchAPI } from "../../lib/api"
import NextImage from "../../components/image"

const DetailedAlbum = () => {
  ;<div className="container section">
    <div className="uk-border uk-text-center uk-text-uppercase">
      record.albumType
    </div>
    <h2>record.title</h2>
  </div>
}

const albumDetails = ({ record, records }) => {
  console.log(record)
  return (
    <>
      <div className="container section">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="albumType mb-3">
              <p className="mb-0" style={{ paddingTop: "2px" }}>
                {record.albumType}
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
                  {record.albumLinks.map((link) => {
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
          <div className="col-md-5">
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
  const records = await fetchAPI("/records")
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
