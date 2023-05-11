import Script from 'next/script'

export default function JsScript() {
  return (
    <>
        <Script async src={`/js/vendor/jquery-3.6.0.min.js`} />
        <Script async src={`/js/vendor/waypoints.min.js`}/>
        <Script async src={`/js/bootstrap.bundle.min.js`}/>
        <Script async src={`/js/meanmenu.js`}/>
        <Script async src={`/js/swiper-bundle.min.js`}/>
        <Script async src={`/js/magnific-popup.min.js`}/>
        <Script async src={`/js/parallax.min.js`}/>
        <Script async src={`/js/backToTop.js`}/>
        <Script async src={`/js/jquery-ui-slider-range.js`}/>
        <Script async src={`/js/nice-select.min.js`}/>
        <Script async src={`/js/counterup.min.js`}/>
        <Script async src={`/js/ajax-form.js`}/>
        <Script async src={`/js/wow.min.js`}/>
        <Script async src={`/js/beforeafter.jquery-1.0.0.js`}/>
        <Script async src={`/js/isotope.pkgd.min.js`}/>
        <Script async src={`/js/imagesloaded.pkgd.min.js`}/>
        <Script async src={`/js/jquery.ez-plus.js`}/>
        <Script async src={`/js/tilt.jquery.min.js`}/>
        <Script async src={`/js/hover-reveal.js`}/>
        <Script async src={`/js/tween-max.js`}/> 
        <Script async  src= {`/js/main.js`} />  
    </>
  )
}