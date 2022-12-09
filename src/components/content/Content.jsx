import './style.scss';
import { TodoList } from './components/todo-list/TodoList';
import { TaskForm } from '../task-form/Task-form';

export function Content() {
    return (
        <div className="content">
            {/* <TodoList>
            </TodoList> */}
            <TaskForm/>
            
        </div>
    )
}