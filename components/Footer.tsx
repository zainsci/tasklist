import React, { useEffect, useState } from "react"
import Link from "next/link"

import { Github, Info, Home, HomeFill, InfoFill } from "@components/icons"

const Footer = () => {
  const [activePage, setActivePage] = useState("home")

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        setActivePage("home")
        break
      case "/about":
        setActivePage("about")
        break
    }
  }, [])

  return (
    <footer className="w-full mt-atuo border-t-2 border-slate-700 px-6 py-2 text-sm text-slate-700">
      <ul className="flex justify-evenly items-center">
        <li>
          <a
            className="p-2 fill-white rounded-md space-y-1 flex flex-col justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/zainsci/tasklist"
          >
            <Github />
          </a>
        </li>
        <li>
          <Link href="/">
            <a className="p-2 rounded-md space-y-1 flex flex-col justify-center items-center">
              {activePage === "home" ? <HomeFill /> : <Home />}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="p-2 rounded-md space-y-1 flex flex-col justify-center items-center">
              {activePage === "about" ? <InfoFill /> : <Info />}
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
