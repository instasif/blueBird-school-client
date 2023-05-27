import { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";

export default function EventModal({ isOpen, onClose, onEventAdd }) { //24
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const handleSubmit = (event) => {
    event.preventDefault();
    onEventAdd({
      title,
      start,
      end,
    });
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={handleSubmit} className="bg-white">
        <input
        className="bordered"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div>
          <label>Start Date:</label>
          <Datetime value={start} onChange={(date) => setStart(date)} />
        </div>

        <div>
          <label>End Date:</label>
          <Datetime value={end} onChange={(date) => setEnd(date)} />
        </div>
        <button className="btn btn-xs bg-blue-500 border-none text-white">Add Event</button>
      </form>
    </Modal>
  );
}
