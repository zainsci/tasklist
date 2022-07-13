import React from "react"
import classNames from "classnames"

import Header from "@components/Header"
import Footer from "@components/Footer"

interface Props {
  children?: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div className="w-full min-h-screen max-w-[420px] max-h-screen overflow-hidden relative flex flex-col bg-center">
      <Header />

      <main
        className={classNames(
          className,
          "flex-1 flex flex-col overflow-hidden"
        )}
      >
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Container
