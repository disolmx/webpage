export function gtag1(){
  return(
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
    `,
      }}
    />
  )
}
