import React from "react"
import Image from "next/image"

const Header = () => {
  return (
    <header className="p-4 border-b-2 border-slate-700">
      <ul className="flex justify-between text-blue-500">
        <h1 className="font-bold m-0 flex justify-start items-center gap-1">
          <Image src={"/icon.png"} width={20} height={20} />
          <span>TaskList</span>
        </h1>
      </ul>
    </header>
  )
}

export default Header
