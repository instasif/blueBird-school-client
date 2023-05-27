import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { useContext, useReducer } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useAdmin } from "../../Hooks/useAdmin";
import EventModal from "./EventModal";
import { useQuery } from "@tanstack/react-query";

const Calender = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  // const [events, setEvents] = useState([]);

  const [newEvent, setNewEvent] = useReducer(
    (state, payload) => ({
      ...state,
      ...payload,
    }),
    {
      openModal: false,
      startDate: new Date(),
    }
  );

  function handleCreateEventModal(data) {
    if (!data) {
      setNewEvent({
        modalOpen: false,
        startDate: new Date(),
      });
      return;
    }

    if (isAdmin) {
      setNewEvent({
        modalOpen: true,
        startDate: data.date,
      });
    }
  }

  // useEffect(() => {
  //   //fetch all event from server
  //   setEvents([
  //     { title: "event", date: new Date() },
  //     { title: "event", date: new Date() },
  //     { title: "event", date: new Date() },
  //   ]);
  // }, []);

  const { data: events = [], refetch } = useQuery({
    queryKey: ["calender"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/calender");
      const data = await res.json();
      return data;
    },
  });

  const onEventAdd = (event) => {
    // send date to server to create events
    // setEvents((prev) => [...prev, event]);
    // console.log(event);

    const data = {
      title: event.title,
      start: event.start,
      end: event.end,
    };

    fetch(`http://localhost:5000/calender?email=${user?.email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          refetch();
        }
      });
  };

  // function updateHandler(event){

  // }

  return (
    <section className="mx-5">
      <div
        style={{
          posision: "relative",
          zIndex: 0,
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events} // datas
          dateClick={handleCreateEventModal}
          // eventClick={updateHandler}
        />
      </div>

      <EventModal
        startDate={newEvent.startDate}
        isOpen={newEvent.modalOpen}
        onClose={() => handleCreateEventModal()}
        onEventAdd={(event) => onEventAdd(event)}
      />
    </section>
  );
};

export default Calender;
