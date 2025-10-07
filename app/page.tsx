import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Hero } from "../components/home/hero"
import { Features } from "../components/home/features"
import { HowItWorks } from "../components/home/how-it-works"
import { CallToAction } from "../components/home/call-to-action"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-40">
        <Hero />
        <Features />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
