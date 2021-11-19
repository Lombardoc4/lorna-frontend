import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.replace("/")
    }, 3000)
  }, [router])

  return (
    <div className="not-found">
      <h2>No Page Here</h2>
      <h1>You&apos;re lost to the depths</h1>
      <h3>
        Redirecting to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
        shortly
      </h3>
    </div>
  )
}

export default NotFound
