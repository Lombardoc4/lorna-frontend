import Records from "../../components/records"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"

const Home = ({ records, releases }) => {
  return (
    <div>
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
    fetchAPI("/releases"),
  ])

  return {
    props: { records, releases },
    revalidate: 1,
  }
}

export default Home
