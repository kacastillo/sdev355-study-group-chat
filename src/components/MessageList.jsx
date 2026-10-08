import Message from "./Message.jsx";

export default function MessageList({ messages, onReact, pinnedId, onPin }) {
  return (
    <ul className="messages">
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message}
          isPinned={message.id === pinnedId}
          onReact={onReact}
          onPin={onPin}
        />
      ))}
    </ul>
  );
}
