import {getAllEvents} from "../../dummy-data";
import EventList from "../../src/components/events/event-list";

const AllEventsPage = () => {

  const events = getAllEvents();

  return <div>
    <EventList items={events}/>
  </div>
}

export default AllEventsPage;