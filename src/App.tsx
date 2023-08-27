import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { navlinks } from "constants"
import Section from "layout/Section"
import { useDarkTheme } from "@context/DarkTheme"

function App() {
  const { dark } = useDarkTheme()
  return (
    <BrowserRouter>
      <main className={`h-full w-full relative z-0 ${dark ? "dark" : ""}`}>
        <Navbar />
        <Hero />
        {navlinks.map((link) => (
          <Section id={link.id}>{link.element}</Section>
        ))}
      </main>
    </BrowserRouter>
  )
}

export default App
