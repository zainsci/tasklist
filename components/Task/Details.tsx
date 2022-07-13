import React from "react"

import { Task } from "@utils/types"
// import Modal from "@components/Modal"
import { Trash } from "@components/icons"
import { useAppDispatch } from "@store/hooks"
import { removeTask } from "@store/slice/task-list"
import Modal from "@components/Modal"
import Button from "@components/Button"

interface Props {
  task: Task
  showDetail: boolean
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>
}

const Detail = ({ task, showDetail, setShowDetail }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <Modal
      title={task.title}
      opened={showDetail}
      onClose={() => setShowDetail(!showDetail)}
    >
      <p className="mb-4 whitespace-pre-line">{task.description}</p>

      <div className="flex justify-end items-center space-x-2">
        <Button
          variant="light"
          color="red"
          onClick={() => dispatch(removeTask(task.id))}
          className="w-min px-3"
        >
          <Trash />
        </Button>
      </div>
    </Modal>
  )
}

export default Detail
