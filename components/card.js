import React from "react"
import Link from "next/link"
import NextImage from "./image"


const RecordCard = ({ record }) => {
  return (
    <Link href={`/releases/${record.slug}.html`} prefetch={false}>
      <a className="d-flex flex-wrap text-decoration-none" id={record.slug}>
        <div className="custom-card">
          <div className="custom-card-img">
            <NextImage image={record.cover} />
          </div>
          <h2 id="title" className="h5 mt-3">
            {record.name}
          </h2>
          <p id="release" className="mb-0">
            {record.releaseDate}
          </p>
        </div>
      </a>
    </Link>
  )
}

const Card = (props) => {

  if (props.record) {
    return <RecordCard record={props.record} />
  }
}

export default Card
