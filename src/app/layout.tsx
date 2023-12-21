import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../../public/css/final-custom.css"; 

import "../../public/css/about-us-styles.css"; 
import "../../public/css/healthcare-styles.css";
import "../../public/css/normalize.css";
import "../../public/css/webflow.css";
import "../../public/css/app-dev-health-website-v1.webflow.css"; 



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="./images/favicon.png"
        />
         <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=IBM Plex Sans:wght@300;400;500;600&display=swap"
    />
      </head>
      <body>
        <Header />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
        <Script
          src="./js/jquery-3.5.1.min.appdev.js"
        />
        <Script
          src="./js/webflow.js"
        />
      </body>
    </html>
  );
}
