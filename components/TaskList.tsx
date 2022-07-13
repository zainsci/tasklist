import React from "react"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"

import store from "@store/index"
import { updateList } from "@store/slice/task-list"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { Task } from "@utils/types"
import Item from "@components/Task/Item"

const TaskList = () => {
  const taskList = useAppSelector((state) => state.TaskReducer.taskList)
  const dispatch = useAppDispatch()

  store.subscribe(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "task-list",
        JSON.stringify(store.getState().TaskReducer.taskList)
      )
    }
  })

  const reorder = (list: Task[], startIndex: number, endIndex: number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  function onDragEnd(result: DropResult) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = reorder(
      taskList,
      result.source.index,
      result.destination.index
    )

    dispatch(updateList(items))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex flex-col items-center rounded-md p-4 bg-gray-100"
          >
            {taskList.length === 0 ? (
              <span className="block w-full bg-white py-2 text-center rounded-lg border border-dashed border-blue-700">
                Nothing To Do! 🤪
              </span>
            ) : (
              taskList.map((task, index) => {
                return <Item key={task.id} task={task} index={index} />
              })
            )}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TaskList
