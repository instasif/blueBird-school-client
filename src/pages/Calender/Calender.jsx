import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useContext, useReducer, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useAdmin } from "../../Hooks/useAdmin";
import EventModal from "./EventModal";
import { useEffect } from "react";

const Calender = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  const [events, setEvents] = useState([])

  const [newEvent, setNewEvent] = useReducer((state, payload)=>({
      ...state,
      ...payload
  }), {
    openModal: false,
    startDate: new Date()
  })


  function handleCreateEventModal(data){ 
    if(!data){
      setNewEvent({
        modalOpen: false,
        startDate: new Date(),
      })
      return;
    }
    setNewEvent({
      modalOpen: true,
      startDate: data.date,
    
    })
  }

  useEffect(()=>{

    //fetch all event from server 
    setEvents([
      { title: 'event', date: new Date()},
      { title: 'event', date: new Date()},
      { title: 'event', date: new Date()},
    ])

  }, [])

  const onEventAdd = (event) => {
    

    // send date to server to create events 
    setEvents((prev)=>([...prev, event]))
    console.log(event);

  };

  function updateHandler(event){

  }


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
          plugins={[dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleCreateEventModal}
          eventClick={updateHandler}
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
