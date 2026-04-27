import TaskList from "./components/TaskList/TaskList";
import type { Task} from "./types/index";

function App() {

  const taskList: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description for Task 1',
      status: 'pending',
      priority: 'medium',
      dueDate: '2024-12-31'
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Description for Task 2',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-11-30'
    },
    {
      id: '3',
      title: 'Task 3',
      description: 'Description for Task 3',
      status: 'completed',
      priority: 'low',
      dueDate: '2024-10-31'
    }
  ];

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList tasks = {taskList} onStatusChange={() => {}} onDelete={() => {}} />
    </div>    
  )
}

export default App
