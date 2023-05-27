import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useAdmin } from "../../Hooks/useAdmin";
import EventModal from "./EventModal";

const Calender = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [modalOpen, setModalOpen] = useState(false);

  const calenderRef = useRef(null);

  const onEventAdd = (event) => {
    let calenderApi = calenderRef.current.getApi();
    calenderApi.add(event);
  };

  return (
    <section className="mx-5">
      {isAdmin && (
        <button
          className="btn btn-secondary rounded-full text-white"
          onClick={() => setModalOpen(true)}
        >
          Add Event
        </button>
      )}
      <div style={{
        posision: "relative", zIndex: 0
      }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          ref={calenderRef}
        />
      </div>

      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdd={(event) => onEventAdd(event)}
      />
    </section>
  );
};

export default Calender;
