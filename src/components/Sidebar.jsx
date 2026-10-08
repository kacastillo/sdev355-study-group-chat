export default function Sidebar({ channels }) {
  function handleChannelClick(e, channel) {
    console.log("clicked", channel.name);
    console.log("type:", e.type);
    console.log("target:", e.target.tagName, e.target.textContent);
    console.log("a real browser event underneath:", e.nativeEvent instanceof MouseEvent);
    console.log(`Channel clicked: ${channel.id}`);
  }
  return (
    <nav className="sidebar">
      <h2>Channels</h2>
      {channels.map((channel) => (
        <button
          key={channel.id}
          className="channel"
          onClick={(e) => handleChannelClick(e, channel)}
        >
          # {channel.name}
        </button>
      ))}
    </nav>
  );
}
