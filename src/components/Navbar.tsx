import { navlinks } from "../constants"
import { useState } from "react"
import { Menu as MenuIcon, Close, Moon, Sun, LogoDark, LogoLight } from "../assets"
import { useDarkTheme } from "@context/DarkTheme"

type MenuProps = {
  mobile?: boolean
  setToggle?: React.Dispatch<React.SetStateAction<Boolean>>
}

export default function Navbar() {
  const [toggle, setToggle] = useState<Boolean>(false)
  const { dark, setDark } = useDarkTheme()

  function setDarkMode(mode: "dark" | "light") {
    setDark(mode === "dark")
    if (mode === "dark") document.getElementsByTagName("main")[0].classList.add("dark")
    else document.getElementsByTagName("main")[0].classList.remove("dark")
  }

  function Menu({ mobile, setToggle = () => {} }: MenuProps) {
    return (
      <ul
        className={`${
          mobile ? "md:hidden flex flex-col" : "hidden md:flex flex-row"
        } gap-3 items-center`}
      >
        {navlinks.map((link) => (
          <li
            id={`${mobile ? "m-" : ""}link.id`}
            className={`text-[18px] hover:text-sky-300 hover:drop-shadow-dark dark:hover:drop-shadow-light`}
            onClick={() => {
              if (mobile) setToggle(!toggle)
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <nav
      className={`min-w-[375px] px-4 pt-2 pb-12 flex flex-col fixed w-full top-0 z-20 bg-gradient-to-b from-slate-200 dark:from-slate-800 from-25%`}
    >
      <div className="text-dark dark:text-light flex flex-row justify-between w-full">
        <div
          className="flex flex-row gap-2 justify-center items-center cursor-pointer"
          onClick={() => scrollTo(0, 0)}
        >
          <img src={dark ? LogoLight : LogoDark} alt="" className="w-8 h-8 md:w-12 md:h-12" />
          <p className="text-[16px] md:text-[24px]">Bruno | Developer Junior</p>
        </div>
        <div className="flex items-center">
          <Menu />
          {/* <ul className="hidden md:flex flex-row gap-3 items-center">
            {navlinks.map((link) => (
              <li
                id={`${link.id}`}
                className={`text-[18px] hover:text-sky-300 hover:drop-shadow-dark dark:hover:drop-shadow-light`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul> */}
          <div className="rounded-full bg-dark dark:bg-light mx-3 p-1">
            <img
              src={dark ? Sun : Moon}
              alt="darkMode"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setDarkMode(dark ? "light" : "dark")}
            />
          </div>
          <img
            src={toggle ? Close : MenuIcon}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            className="w-6 h-6 md:hidden"
          />
        </div>
      </div>
      {toggle && <Menu mobile setToggle={setToggle} />}
      {/* {toggle && (
        <ul className="md:hidden flex flex-col gap-3 items-center">
          {navlinks.map((link) => (
            <li
              id={`m-${link.id}`}
              className={`text-[18px] hover:text-sky-300 hover:drop-shadow-dark dark:hover:drop-shadow-light`}
              onClick={() => setToggle(!toggle)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      )} */}
    </nav>
  )
}
