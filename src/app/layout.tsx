import type { Metadata } from "next";
import "./globals.css";
import "./font.css";
import Script from "next/script";


export const metadata: Metadata = {
  title: "SALES UP AI",
  description: "is a lively advergaming platform that links businesses and customers through fun interactive games.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>
) {

  return (
    <html>
      <body className="antialiased">
                {/* Google Ads / GTAG JS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17759902875"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'AW-17759902875');
          `}
        </Script>


       
<Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17759902875">
</Script>
<Script>
  {
    `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-17759902875');
    `
  }

</Script>
        <>


          {children}
        </>
      </body>
    </html>
  );
}