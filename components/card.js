import React from "react"
import Link from "next/link"
import NextImage from "./image"


const RecordCard = ({ record }) => {
  return (
    <Link href={`/releases/${record.slug}.html`}>
      <a className="d-flex flex-wrap text-decoration-none" id={record.slug}>
        <div className="custom-card">
          <div className="custom-card-img">
            <NextImage image={record.cover} />
          </div>
          <h5 id="title" className="mt-3">
            {record.name}
          </h5>
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
