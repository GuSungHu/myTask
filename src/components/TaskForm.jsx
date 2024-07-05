import { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

export default function TaskForm({ setTasks }) {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tag: "",
  });
  //const [task, setTask] = useState("");
  //const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    //처음처럼 TaskData를 리셋하기
    setTaskData({
      task: "",
      status: "todo",
      tag: "",
    });
  };
  //선택한 태그를 tags에 추가한다. (있으면 삭제 없으면 추가)
  // 선택된 태그를 taskData.tag에 설정
  const selectTag = (tag) => {
    setTaskData((prev) => {
      return { ...prev, tag: prev.tag === tag ? "" : tag };
    });
  };

  console.log(taskData.tag); //태그 선택을 확인

  // 선택된 태그 확인
  const checkTag = (tag) => {
    return taskData.tag === tag;
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={taskData.task}
          name="task"
          className="task_input"
          placeholder="Enter your task"
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="중요"
              selectTag={selectTag}
              selected={checkTag("중요")}
            />
            <Tag
              tagName="보통"
              selectTag={selectTag}
              selected={checkTag("보통")}
            />
            <Tag
              tagName="여유"
              selectTag={selectTag}
              selected={checkTag("여유")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="todo">할일</option>
              <option value="doing">진행중</option>
              <option value="done">완료</option>
            </select>
            <button type="submit" className="task_submit">
              + 추가
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
