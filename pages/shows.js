import Script from "next/script"

const Shows = () => {
  return (
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
  )
}

export default Shows
