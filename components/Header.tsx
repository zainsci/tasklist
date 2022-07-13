import React from "react"
import Image from "next/image"

const Header = () => {
  return (
    <header className="p-4 border-b-2 border-slate-700">
      <div className="flex justify-between text-blue-600">
        <h1 className="font-bold m-0 flex justify-start items-center gap-1">
          <Image
            src={"/tasklist/icon.png"}
            width={20}
            height={20}
            alt="tasklist logo"
          />
          <span>TaskList</span>
        </h1>
      </div>
    </header>
  )
}

export default Header
