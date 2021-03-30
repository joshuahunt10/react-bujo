function List(props) {
    return (
        <ul>
            {props.tasks.map((task, i) => (
                <li key={i + task}>{task}</li>
            ))}
        </ul>
    );
}

export default List;
