import Script from "next/script"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Shows = ({shows}) => {
  console.log(shows.seo);
  return (
    <Seo seo={shows.seo}>
      <div className="container">
        <a
          href="https://www.songkick.com/artists/3271811"
          className="songkick-widget"
          data-detect-style="true"
          data-background-color="transparent"
          data-locale="en"
          ></a>
        <Script src="//widget.songkick.com/3271811/widget.js" />
      </div>
    </Seo>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const shows = await fetchAPI("/shows");

  return {
    props: { shows },
    revalidate: 1,
  }
}

export default Shows
