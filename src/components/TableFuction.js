import RowItem from "./RowItem"

export function TableFuction({ todoList, deleteTodo }) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assigned</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {todoList.map(todo =>
                    <RowItem
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={deleteTodo}
                    />
                )}
            </tbody>

        </table>
    );
}