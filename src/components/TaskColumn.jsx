import Todo from "../assets/direct-hit.png";
import "./TaskColumn.css";

export default function TaskColumn(props) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={props.icon} alt="" />
        {props.title}
      </h2>
    </section>
  );
}