import { useLayoutEffect, useRef } from "react";

function Chat() {
  const chatRef = useRef(0);

  useLayoutEffect(() => {
    const el = chatRef.current;

    el.scrollTop = el.scrollHeight;
  });
  return (
    <>
      <div
        ref={chatRef}
        style={{
          height: "150px",
          border: "1px solid #ccc",
          overflowY: "scroll"
        }}
      >
        Hello World
        <p>Hello</p>
        <p>How are you?</p>
        <p>I am find and you?</p>
        <p>Hello</p>
        <p>How are you?</p>
        <p>I am find and you?</p>
        <p>Hello</p>
        <p>How are you?</p>
        <p>I am find and you?</p>
        <p>Hello</p>
        <p>How are you?</p>
        <p>I am find and you?</p>
      </div>
    </>
  );
}

export default Chat;
