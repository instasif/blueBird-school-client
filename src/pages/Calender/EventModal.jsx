import { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import { useEffect } from "react";


const customStyles  = {
  overlay: {
    background: "#36363678"
  },
  content: {
    zIndex: 10000,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    position: "fixed",
    width: "400px",
    padding:  "20px",
    background: "white",
    transform: 'translate(-50%, -50%)',
  },
}

export default function EventModal({ isOpen, onClose, onEventAdd, startDate = new Date() }) { //24
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());


  useEffect(()=>{
    setStart(startDate)
  }, [startDate])


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
    <Modal className="add-event-modal" isOpen={isOpen} onRequestClose={onClose}  style={customStyles}>
      <form onSubmit={handleSubmit} className="">

      <input 
          type="text"           
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} className="input input-bordered input-primary w-full max-w-xs"
          />

  

        <div className="mt-4">
          <label className="text-md ">Start Date:</label>
          <Datetime  value={start} onChange={(date) => setStart(date)} />
        </div>

        <div className="mt-4">
          <label>End Date:</label>
          <Datetime value={end} onChange={(date) => setEnd(date)} />
        </div>
        <div className="flex gap-x-4 mt-2">
        <button type="submit" className="btn btn-xs bg-blue-500 border-none text-white">Add Event</button>
        <button onClick={onClose} className="btn btn-xs bg-blue-500 border-none text-white">Cancel</button>
        </div>
      </form>
    </Modal>
  );
}
