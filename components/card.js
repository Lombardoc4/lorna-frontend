import React from "react"
import Link from "next/link"
import NextImage from "./image"

const EventCard = ({ event }) => {
  return (
    <Link as={`/event/${event.slug}`} href={`/event/${event.slug}.html`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={event.eventArt} />
          </div>
          <div className="uk-card-body">
            <p id="band" className="uk-text-uppercase">
              {/* {[event.bands]} */}
            </p>
            <p id="title" className="uk-text-large">
              {event.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

const RecordCard = ({ record }) => {
  return (
    <Link as={`/releases/${record.slug}`} href={`/releases/${record.slug}.html`}>
      <a className="d-flex flex-wrap text-decoration-none" id={record.slug}>
        <div className="custom-card">
          <NextImage image={record.cover} />
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
  if (props.event) return <EventCard event={props.event} />

  if (props.record) {
    return <RecordCard record={props.record} />
  }
  // console.log(event);
  // return (
  //   <Link href={`/event/${event.slug}`}>
  //     <a className="uk-link-reset">
  //       <div className="uk-card uk-card-muted">
  //         <div className="uk-card-media-top">
  //           <NextImage image={event.eventArt} />
  //         </div>
  //         <div className="uk-card-body">
  //           <p id="band" className="uk-text-uppercase">
  //             {/* {[event.bands]} */}
  //           </p>
  //           <p id="title" className="uk-text-large">
  //             {event.title}
  //           </p>
  //         </div>
  //       </div>
  //     </a>
  //   </Link>
  // )
}

export default Card
