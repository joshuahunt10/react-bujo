import React from "react";
import "./Page.css";
import List from "../list/List";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskInput: "",
            taskId: 0,
            taskList: [
                {
                    id: 100,
                    task: "first one",
                    isComplete: true,
                },
            ],
        };
    }

    handleTaskInputChange = (event) => {
        this.setState({ taskInput: event.target.value });
    };

    handleTaskAdd = (event) => {
        event.preventDefault();
        this.setState({
            taskList: [
                ...this.state.taskList,
                {
                    id: this.state.taskId,
                    task: this.state.taskInput,
                    isComplete: false,
                },
            ],
            taskInput: "",
            taskId: this.state.taskId + 1,
        });
    };

    markComplete = (completedTaskId) => {
        const updatedTaskList = this.state.taskList.map((task) => {
            if (task.id === completedTaskId) {
                return { ...task, isComplete: true };
            }
            return task;
        });
        this.setState({ taskList: updatedTaskList });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleTaskAdd}>
                    <label>
                        Task:
                        <input
                            type="text"
                            value={this.state.taskInput}
                            onChange={this.handleTaskInputChange}
                        />
                    </label>
                </form>
                <List
                    tasks={this.state.taskList}
                    markComplete={(taskId) =>
                        this.markComplete(taskId)
                    }
                />
            </div>
        );
    }
}

export default Page;
