import "../styles/globals.css";
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (<>
    <Script
      id="yandex-metrika"
      strategy="afterInteractive"
      src="https://mc.yandex.ru/metrika/tag.js"
    />
    <Script
      id="yandex-metrika-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            try {
              ym(101946293, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
              });
            } catch(e) {}
          `,
      }}
    />
    <Component {...pageProps} />
    <noscript>
      <div>
        <img
          src="https://mc.yandex.ru/watch/101946293"
          style={{ position: 'absolute', left: '-9999px' }}
          alt=""
        />
      </div>
    </noscript>
  </>)
}
