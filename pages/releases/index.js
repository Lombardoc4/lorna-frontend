import Records from "../../components/records"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"

const Home = ({ records, homepage }) => {
  return (
    <div id="releases">
      <Seo seo={homepage.seo} />
      <div className="section px-3">
        <Records records={records} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [records, homepage] = await Promise.all([
    fetchAPI("/records"),
    fetchAPI("/homepage"),
  ])

  return {
    props: { records, homepage },
    revalidate: 1,
  }
}

export default Home
