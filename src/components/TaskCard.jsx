import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";
import "./TaskCard.css";

export default function TaskCard({
  title,
  tag,
  handleDelete,
  index,
  handleStatusChange,
  status,
}) {
  return (
    <article className="task_card">
      <p className="task_text">
        {title}
        {status !== "done" && (
          <button
            className="TaskChange"
            onClick={() => handleStatusChange(index)}
          >
            진행
          </button>
        )}
      </p>

      <div className="task_card_bottom_line">
        <div className="task_card_tag">
          {tag && <Tag tagName={tag} selected={true} />}
        </div>

        <div className="task_delete">
          <img
            className="delete_icon"
            src={deleteIcon}
            alt=""
            onClick={() => handleDelete(index)}
          />
        </div>
      </div>
    </article>
  );
}
