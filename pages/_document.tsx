import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700;900&family=Roboto+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:bg-neutral-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
