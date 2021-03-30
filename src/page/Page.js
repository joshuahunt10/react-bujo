import React from "react";
import "./Page.css";
import List from "../list/List";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskInput: "",
            taskList: ["task 1"],
        };
    }

    handleTaskInputChange = (event) => {
        this.setState({ taskInput: event.target.value });
    };

    handleTaskAdd = (event) => {
        event.preventDefault();
        this.setState({
            taskList: [...this.state.taskList, this.state.taskInput],
            taskInput: "",
        });
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
                <List tasks={this.state.taskList} />
            </div>
        );
    }
}

export default Page;
