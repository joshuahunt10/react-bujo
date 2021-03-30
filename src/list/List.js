import React from "react";

function List(props) {
    return (
        <ul>
            {props.tasks.map((task, i) => {
                return (
                    <li
                        key={task.taskId}
                        onClick={() => props.markComplete(task.id)}
                        className={task.isComplete ? "done" : ""}
                    >
                        {task.task}
                    </li>
                );
            })}
        </ul>
    );
}

export default List;
