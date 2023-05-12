// import './globals.css'
import '../../src/app/styles/css/preloader.css'
import '../../src/app/styles/css/bootstrap.css'
import '../../src/app/styles/css/meanmenu.css'
import '../../src/app/styles/css/animate.min.css'
import '../../src/app/styles/css/swiper-bundle.css'
import '../../src/app/styles/css/backToTop.css'
import '../../src/app/styles/css/magnific-popup.css'
import '../../src/app/styles/css/ui-range-slider.css'
import '../../src/app/styles/css/nice-select.css'
import '../../src/app/styles/css/fontAwesome5Pro.css'
import '../../src/app/styles/css/hover-reveal.css'
import '../../src/app/styles/css/default.css'
import '../../src/app/styles/css/custom.css'
import '../../src/app/styles/css/main.css'
import { Inter } from 'next/font/google'

import JsScript from './_document'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cios Tech',
  description: 'Cios Tech Consult is a technology company Specializes in providing solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/img/logo/logo.png' />
      </head>
      <body className={inter.className}>
        {children}
        <JsScript/>

      </body>
    </html>
  )
}
