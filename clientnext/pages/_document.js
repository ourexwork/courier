import Document, { Html, Head, Main, NextScript } from 'next/document';
// import "semantic-ui-css/semantic.min.css";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://unpkg.com/element-ui/lib/theme-chalk/index.css'
          ></link>
          <link rel='stylesheet' href='/static/semantic/semantic.min.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
