import Link from "next/link"

const NotFound = () => {

  return (
    <div className="not-found">
      <h2>No Page Here</h2>
      <h1>You&apos;re lost to the depths</h1>
      <h3>
        Return to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </h3>
    </div>
  )
}

export default NotFound
