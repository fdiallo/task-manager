import type { TaskItemProps } from "../../types";


function TaskItem({ task: {id, title, description, status, priority, dueDate }, onStatusChange, onDelete }: TaskItemProps) {
    

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Status: {status}</p>
            <p>Priority: {priority}</p>
            <p>Due Date: {dueDate}</p>
            <button onClick={() => onStatusChange(id, 'in-progress')}>Start</button>
            <button onClick={() => onStatusChange(id, 'completed')}>Complete</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>      
    )
}

export default TaskItem;