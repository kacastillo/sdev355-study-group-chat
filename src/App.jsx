import { useState } from "react";
import { CHANNELS, SEED_MESSAGES } from "./data.js";
import Sidebar from "./components/Sidebar.jsx";
import ChatHeader from "./components/ChatHeader.jsx";
import PinnedBar from "./components/PinnedBar.jsx";
import MessageList from "./components/MessageList.jsx";
import Composer from "./components/Composer.jsx";

function currentTime() {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export default function App() {
  const [activeId, setActiveId] = useState("general");
  const [messages, setMessages] = useState(SEED_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const [pinnedId, setPinnedId] = useState(null);

  const channel = CHANNELS.find((c) => c.id === activeId);
  const pinnedMessage =
    messages[activeId].find((m) => m.id === pinnedId) ?? null;

  function handleSend(text) {
    const newMessage = {
      id: crypto.randomUUID(),
      author: "You",
      time: currentTime(),
      hearts: 0,
      text,
    };
    setMessages({
      ...messages,
      [activeId]: [...messages[activeId], newMessage],
    });
  }

  function handleReact(messageId) {
    setMessages({
      ...messages,
      [activeId]: messages[activeId].map((m) =>
        m.id === messageId ? { ...m, hearts: m.hearts + 1 } : m
      ),
    });
  }

  function handlePin(messageId) {
    setPinnedId(pinnedId === messageId ? null : messageId);
  }

  return (
    <div className="app">
      <Sidebar
        channels={CHANNELS}
        activeId={activeId}
        onSelectChannel={setActiveId}
      />
      <main className="main">
        <ChatHeader channel={channel} isTyping={isTyping} />
        <PinnedBar message={pinnedMessage} onUnpin={() => setPinnedId(null)} />
        <MessageList
          messages={messages[activeId]}
          pinnedId={pinnedId}
          onReact={handleReact}
          onPin={handlePin}
        />
        <Composer onSend={handleSend} onTypingChange={setIsTyping} />
      </main>
    </div>
  );
}