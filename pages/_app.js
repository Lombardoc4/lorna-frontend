import App from "next/app"
import Head from "next/head"
import "../assets/css/style.css"
import { createContext, useEffect } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import Layout from "../components/layout"
import { useRouter } from "next/router"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps
  const router = useRouter();
  const partPoints = async (e) => {
    e.preventDefault();
    try {
      let response = await fetchAPI('/participations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          path: window.location.pathname,
          action: 'click/touch',
          event: e.target.href,
        })
      })
    } catch(err) {
      console.log('adBlocker', err); // TypeError: failed to fetch
    }

    let i = 0;
    let el = e.target;
    while (i <= 3) {
      if (el.href && el.classList.contains('blank')) {
        return window.open(el.href, '_blank');
      } else if (el.href) {
        return router.push(el.href);
      } else {
        el = el.parentNode;
        i++;
      }
    }

  }

  useEffect(() => {

      fetchAPI('/participations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: window.location.pathname,
          action: 'load'
        }),
      })

      // You now have access to `window`
      const buttons = document.getElementsByTagName('a');


      let i = 0;
      while(i <= buttons.length - 1 ) {
        buttons[i].addEventListener('click', partPoints)
        i++;
      }
    // }
  }, [])

  useEffect( () => () => {
    const buttons = document.getElementsByTagName('a');
      let i = 0;
      while(i <= buttons.length - 1 ) {
        buttons[i].removeEventListener('click', partPoints)
        i++;
      }
    }, [] );

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global")
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } }
}

export default MyApp
