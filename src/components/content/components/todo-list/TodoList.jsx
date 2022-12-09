import './style.scss';
import { TodoItem } from '../todo-list/components/todo-item/TodoItem';
import { Pagination} from './components/pagination/Pagination';
const descriptionData =
  "This is a task, This is a task, This is a task, This is a task, This is a task.";

const todoList = [
  {
    title: "Task 1",
    creator: "Loc",
    status: "NEW",
    description: descriptionData,
  },
  {
    title: "Task 2",
    creator: "Loc",
    status: "DOING",
    description: descriptionData,
  },
  {
    title: "Task 3",
    creator: "Loc",
    status: "DONE",
  },
  {
    title: "Task 4",
    creator: "Loc",
    status: "NEW",
    description: descriptionData,
  },
  {
    title: "Task 5",
    creator: "Loc",
    status: "DOING",
    description: descriptionData,
  },
  {
    title: "Task 6",
    creator: "Loc",
    status: "NEW",
    description: descriptionData,
  },
  {
    title: "Task 7",
    creator: "Loc",
    status: "NEW",
    description: descriptionData,
  },
  {
    title: "Task 8",
    creator: "Loc",
    status: "DOING",
    description: descriptionData,
  },
];

export function TodoList() {
    return (
        <div className="todo-list-container">
            <div className="todo-list">
                {todoList.map((item) => (
                <TodoItem
                title={item.title}
                creator={item.creator}
                status={item.status}
                description={item.description}
                />
                ))}
            </div>
            <Pagination></Pagination>
    </div>

        
    );
}