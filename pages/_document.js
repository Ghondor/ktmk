import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/kmc4qll.css" />
      </Head>
      <body className="h-full w-full" style={{ backgroundColor: '#182030' }}>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
      </body>
    </Html>
  );
}
