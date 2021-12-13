import App from "next/app"
import Head from "next/head"
import "../assets/css/style.css"
import { createContext, useEffect } from "react"
import { fetchAPI } from "../lib/api"
import { getStrapiMedia } from "../lib/media"
import Layout from "../components/layout"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  useEffect(() => {
    // fetchAPI('/analytics', {
    //   method:  'POST',
    //   body: JSON.stringify({
    //     "data": {
    //       "action": "load",
    //       "event": ,
    //     }
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // })
    if (!window.location.href.includes('localhost')){

      fetchAPI('/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: window.location.href,
          action: 'load'
        }),
      })
      // .then(response => response.json())
      // .then(data => console.log(data));
      // You now have access to `window`
      const buttons = document.getElementsByTagName('a');
      let i = 0;
      while(i <= buttons.length - 1 ) {
        buttons[i].addEventListener('click touchstart', () => {
          fetchAPI('/analytics', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              base: window.location.href,
              action: 'click/touch',
              event: buttons[i].href,
            })
          })
        })
        i++;
      }
    }
  }, [])

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
