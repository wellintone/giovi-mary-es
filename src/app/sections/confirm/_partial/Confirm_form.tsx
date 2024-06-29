"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ConfirmForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("CUS", title, body, priority);
    /* setIsLoading(false); */

    /* const newTicket = {
      title,
      body,
      priority,
      user_email: "mario@netninja.dev",
    }; */

    /*  const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTicket),
    }); */

    /*  if (res.status === 201) {
      router.refresh();
      router.push("/tickets");
    } */
  };

  return (
    <form onSubmit={handleSubmit} className="confirm__form">
      <label>
        <span>Title:</span>
        <input
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Title:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {/*  {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>} */}
        suca
      </button>
    </form>
  );
}
