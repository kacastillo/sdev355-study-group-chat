export default function Composer() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit event:", e.type);
  }

  return (
    <form className="composer" onSubmit={handleSubmit}>
      <textarea name="draft" rows={2} placeholder="Type a message..." />
      <button type="submit">Send</button>
    </form>
  );
}