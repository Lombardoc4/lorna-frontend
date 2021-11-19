import React from "react"
import Card from "./card"

const Records = ({ records }) => {
  const studioAlbums = records.filter((r) => r.albumType === "studio")
  const epAlbums = records.filter((r) => r.albumType === "ep")
  const singles = records.filter((r) => r.albumType === "single")

  return (
    <div className="container section pt-5 pt-lg-0">
      <h2>Studio</h2>
      <div className="row row-cols-sm-2 row-cols-lg-3 g-0 mb-5">
        {studioAlbums.map((record) => {
          return <Card record={record} key={`studio__album__${record.slug}`} />
        })}
      </div>
      <h2>EPs</h2>
      <div className="row row-cols-sm-2 row-cols-lg-3 g-0 mb-5">
        {epAlbums.map((record) => {
          return <Card record={record} key={`ep__${record.slug}`} />
        })}
      </div>
      <h2>Singles</h2>
      <div className="row row-cols-sm-2 row-cols-lg-3 g-0 mb-5">
        {singles.map((record) => {
          return <Card record={record} key={`single__${record.slug}`} />
        })}
      </div>
    </div>
  )
}

export default Records
