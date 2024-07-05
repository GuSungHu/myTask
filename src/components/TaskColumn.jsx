import TaskCard from "./TaskCard";
import "./TaskColumn.css";

export default function TaskColumn(props) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={props.icon} alt="" />
        {props.title}
      </h2>

      {props.tasks.length > 0
        ? props.tasks.map(
            (task, i) =>
              task.status === props.status && (
                <TaskCard
                  key={i}
                  title={task.task}
                  tag={task.tag}
                  handleDelete={props.handleDelete}
                  handleStatusChange={props.handleStatusChange}
                  index={i}
                  status={task.status}
                />
              )
          )
        : null}
    </section>
  );
}
