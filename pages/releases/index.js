import Records from "../../components/records"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"

const Home = ({ records, releases }) => {
  return (
    <div id="releases">
      <Seo seo={releases.seo} />
      <div className="section px-3">
        <Records records={records} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [records, releases] = await Promise.all([
    fetchAPI("/records?_sort=releaseDate:DESC"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { records, releases },
    revalidate: 1,
  }
}

export default Home
