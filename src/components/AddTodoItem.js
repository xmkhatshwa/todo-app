import { useState } from "react";


function AddTodoItem({ addTodo, showAddTodoForm }) {

    const [description, setDescription] = useState("");
    const [assigned, setAssigned] = useState("");

    const descriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const submitTodo = () => {
        if (description !== "" && assigned !== "") {
            addTodo(description, assigned, !showAddTodoForm);
            setAssigned("");
            setDescription("");

        }
    }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        rows={3}
                        required
                        onChange={descriptionChange}
                        value={description}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        onChange={event => setAssigned(event.target.value)}
                        value={assigned}
                    ></input>
                </div>
                <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={submitTodo}
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddTodoItem;
