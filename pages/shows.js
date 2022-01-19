import Script from "next/script"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import { useEffect, useState, createElement } from "react"

const Shows = ({shows}) => {
  const [widgetSrc, setWidgetSrc] = useState([<></>]);
  useEffect(() => {
    // You now have access to `window`
    document.body.id='shows';
    const anchor = (<a
      href="https://www.songkick.com/artists/3271811"
      className="songkick-widget"
      data-detect-style="true"
      data-background-color="transparent"
      data-locale="en"
    >Upcoming</a>);
    const dynScript = createElement(
      Script,
      {
        src: "//widget.songkick.com/3271811/widget.js",
        strategy: "lazyOnload"
      }
    )
      console.log(dynScript);
    setWidgetSrc([anchor, dynScript]);
  }, [])


  useEffect( () => () => {
    document.body.id="";
    setWidgetSrc([<></>]);
  }, [] );

  return (
    <>
      <p className="d-none"></p>
      <Seo seo={shows.seo} />
      <div className="container py-md-5">
        <h1 className="pt-3">Shows</h1>

        {widgetSrc.map(el => el)}
      </div>
    </>
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
