import Script from "next/script";

// Scripts de terceiros ativados por variável de ambiente no build.
// Sem a variável configurada, nada é renderizado nem carregado.
//
// NEXT_PUBLIC_CLARITY_PROJECT_ID  → Microsoft Clarity (heatmaps, session recordings)
// NEXT_PUBLIC_HUBSPOT_PORTAL_ID   → HubSpot tracking (jornada do visitante, chat, atribuição)

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim();
const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID?.trim();

export function ThirdPartyScripts() {
  return (
    <>
      {CLARITY_PROJECT_ID ? (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
        </Script>
      ) : null}
      {HUBSPOT_PORTAL_ID ? (
        <Script
          id="hs-script-loader"
          src={`https://js.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
