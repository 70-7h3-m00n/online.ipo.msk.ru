import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html lang='ru'>
        <Head>
          <meta name='theme-color' content='#0a8ed9'></meta>

          <script
            type='text/javascript'
            src='/assets/js/analitics/gtm.js'
          ></script>
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-WXKJ8ML'
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
          <script
            type='text/javascript'
            src='/assets/js/jquery-3.5.1.min.js'
          ></script>
          <script
            type='text/javascript'
            src='/assets/js/lazysizes.min.js'
          ></script>
          <script type='text/javascript' src='/assets/js/wow.min.js'></script>
          <script
            type='text/javascript'
            src='/assets/js/jquery.fancybox.min.js'
          ></script>
          <script type='text/javascript' src='/assets/js/myjs.js'></script>

          <script
            type='text/javascript'
            src='/assets/js/temp/submit.js'
          ></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
