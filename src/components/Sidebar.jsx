export default function Sidebar({ channels }) {
  function handleChannelClick(channelId) {
    console.log(`Channel clicked: ${channelId}`);
  }
  return (
    <nav className="sidebar">
      <h2>Channels</h2>
      {channels.map((channel) => (
        <button
          key={channel.id}
          className="channel"
          onClick={() => handleChannelClick(channel.id)}
        >
          # {channel.name}
        </button>
      ))}
    </nav>
  );
}
