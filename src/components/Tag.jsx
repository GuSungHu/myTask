import "./Tag.css";

export default function Tag({ tagName, selectTag, selected }) {
  const tagStyle = {
    중요: { backgroundColor: "red" },
    보통: { backgroundColor: "yellow" },
    여유: { backgroundColor: "lime" },
    REACT: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      onClick={() => selectTag(tagName)}
      style={selected ? tagStyle[tagName] : tagStyle.default}
    >
      {tagName}
    </button>
  );
}
