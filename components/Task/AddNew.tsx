import React, { useState } from "react"

import { useAppDispatch, useAppSelector } from "@store/hooks"
import { addTask } from "@store/slice/task-list"
import { Plus } from "@components/icons"
import Modal from "@components/Modal"
import Button from "@components/Button"

const AddNew = () => {
  const dispatch = useAppDispatch()
  const taskList = useAppSelector((state) => state.TaskReducer.taskList)
  const [showAdd, setShowAdd] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit() {
    if (title !== "") {
      dispatch(
        addTask({
          id: Math.random().toString(36).substring(2, 6),
          title,
          description,
          completed: false,
        })
      )

      setTitle("")
      setDescription("")
      setShowAdd(!showAdd)
    }
  }

  return (
    <>
      <Modal
        title="Add New Task"
        opened={showAdd}
        onClose={() => setShowAdd(false)}
        key="add-modal"
      >
        <div className="space-y-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="Task title here..."
            className="block w-full px-3 py-2 sm:text-sm rounded-md border border-gray-300 placeholder-gray-400 focus:border-sky-300 focus:outline-none"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            id="description"
            className="block w-full px-3 py-2 sm:text-sm rounded-md border border-gray-300 placeholder-gray-400 focus:border-sky-300 focus:outline-none min-h-[120px]"
            placeholder="Task description here..."
          ></textarea>

          <Button onClick={handleSubmit}>Add New Task</Button>
        </div>
      </Modal>

      <Button
        onClick={() => setShowAdd(!showAdd)}
        className="rounded-full flex justify-center items-center absolute right-4 bottom-4 w-12 h-12"
        disabled={taskList.length >= 6}
        aria-label="add new task"
      >
        <Plus />
      </Button>
    </>
  )
}

export default AddNew
