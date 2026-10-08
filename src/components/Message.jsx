import { useState } from "react";

export default function Message({ message, isPinned, onReact, onPin }) {
  const [showTime, setShowTime] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  return (
    <li
      className={isPinned ? "message pinned" : "message"}
      onClick={() => setShowTime(!showTime)}
      onDoubleClick={() => onReact(message.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="author">{message.author}</span>
      <p className="text">{message.text}</p>
      {showTime && <span className="time">{message.time}</span>}
      {message.hearts > 0 && <span className="hearts">♥ {message.hearts}</span>}
      {isHovered && (
        <div className="toolbar">
          <button onClick={handlePinClick}>{isPinned ? "Unpin" : "Pin"}</button>
        </div>
      )}
    </li>
  );
}