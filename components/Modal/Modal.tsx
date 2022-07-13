import React from "react"
import { AnimatePresence, motion } from "framer-motion"

import { X } from "@components/icons"

interface IProps {
  children: React.ReactNode
  title: string
  opened: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

const backdropVariants = {
  closed: { opacity: 0 },
  opened: { opacity: 1 },
  onexit: { opacity: 0 },
}

const modalVariants = {
  closed: {
    opacity: 0,
    scale: 0.95,
  },
  opened: {
    opacity: 1,
    scale: 1,
  },
  onexit: {
    opacity: 0,
    scale: 0.95,
  },
}

const Modal = ({ children, title, opened, onClose }: IProps) => {
  const closeModal = () => onClose(!opened)

  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      {opened && (
        <motion.div
          variants={backdropVariants}
          initial="closed"
          animate="opened"
          exit="onexit"
          onClick={closeModal}
          className="absolute top-0 left-0 p-8 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50"
        >
          <motion.div
            variants={modalVariants}
            initial="closed"
            animate="opened"
            exit="onexit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full bg-white p-5 flex flex-col rounded-md drop-shadow-md"
          >
            <div
              className="absolute top-4 right-4 p-0 cursor-pointer rounded-sm hover:bg-slate-100"
              onClick={closeModal}
            >
              <X />
            </div>

            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
