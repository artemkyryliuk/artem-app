import { Header } from './layout/Header'
import { Hero } from './layout/Hero'
import { Newway } from './layout/Newway'
import { Destinations } from './layout/Destinations'
import { Guides } from './layout/Guides'
import { Testimonials } from './layout/Testimonials'
import { Stories } from './layout/Stories'
import { Footer } from './layout/Footer'

import './main.css'

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Newway />
      <Destinations />
      <Guides />
      <Testimonials />
      <Stories />
      <Footer />
    </>
  )
}
