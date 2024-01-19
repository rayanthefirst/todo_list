export const TodoItem = ({id, title, completed, toggleTodo, deleteTodo}) => {
    return(
        <li>
      <label>
        <input checked={completed} onChange={e => toggleTodo(id, e.target.checked)} type="checkbox" />
          {title}
      </label>
      <button onClick={e => {deleteTodo(e, id)}} className="btn btn-danger">Delete</button>
    </li>

    )
}