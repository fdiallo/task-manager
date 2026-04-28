import { useState } from "react";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskList from "./components/TaskList/TaskList";
import type { Task } from "./types/index";

function App() {

  const [taskList, setTaskList] = useState<Task[]>([
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
  ]
  )

  const [filter, setFilter] = useState<{ status?: Task['status']; priority?: Task['priority'] }>({})

  const [currentTaskList, setCurrentTaskList] = useState<Task[]>([])

  return (
    <div>
      <br />
      <h2>Welcome to the Task Manager App! </h2>
      <br />

      {/* <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: .2 }}>
          <p>Status</p>
          <select>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div style={{ flex: .2 }}>
          <p>Priority</p>
          <select>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div><br /> */}





      {/* <TaskFilter onFilterChange={(filters) => console.log('Filters changed:', filters)} /> */}

      <TaskFilter onFilterChange={(filters) => {
        console.log('Filters changed:', filters)
      }
      } />


      <br />
      <TaskList tasks={taskList}
        onStatusChange={(taskId, newStatus) => {
          console.log(`Status of task ${taskId} changed to ${newStatus}`)
        }
        }
        onDelete={(taskId) => {
          console.log(`Task ${taskId} deleted`)
        }
        }
      />

    </div>
  )
}

export default App
