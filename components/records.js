import React, { useEffect } from 'react'
import Card from "./card"

const Records = ({ records }) => {
  const studioAlbums = records.filter((r) => r.albumType === "studio")
  const epAlbums = records.filter((r) => r.albumType === "ep")
  const singles = records.filter((r) => r.albumType === "single")


  useEffect(() => {
    // You now have access to `window`
    document.body.id='releases'
  }, [])


  useEffect( () => () => document.body.id="", [] );


  return (
      <div className="py-3 pt-md-5 pb-md-0">
        <h1 className="container pt-5 pt-lg-3 mb-0">Releases</h1>
        <div className="container section pt-3 py-lg-0">
          <h2>Full Length</h2>
          <div className="row row-cols-sm-2 row-cols-md-3 g-0 pb-5">
            {studioAlbums.map((record) => {
              return <Card record={record} key={`full__length__${record.slug}`} />
            })}
          </div>
          <h2>EPs</h2>
          <div className="row row-cols-sm-2 row-cols-md-3 g-0 pb-5">
            {epAlbums.map((record) => {
              return <Card record={record} key={`ep__${record.slug}`} />
            })}
          </div>
          <h2>Singles</h2>
          <div className="row row-cols-sm-2 row-cols-md-3 g-0 pb-5">
            {singles.map((record) => {
              return <Card record={record} key={`single__${record.slug}`} />
            })}
          </div>
        </div>
    </div>
  )
}

export default Records
