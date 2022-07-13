import Container from "@components/Container"
import AddNew from "@components/Task/AddNew"
import TaskList from "@components/TaskList"

export default function Home() {
  return (
    <Container>
      <div className="flex-1 w-full p-4 relative">
        <h1 className="h2">Welcome!</h1>
        <div className="h3 rounded-md p-4 flex justify-center items-center">
          {new Date().toLocaleString("en-US", {
            dateStyle: "medium",
          })}
        </div>
        <TaskList />
        <AddNew />
      </div>
    </Container>
  )
}
