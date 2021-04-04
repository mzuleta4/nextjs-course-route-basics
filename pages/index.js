import {getFeaturedEvents} from "../dummy-data";
import EventList from "../src/components/events/event-list";
import EventsSearch from "../src/components/events/events-search";
import {Fragment} from "react";
import {useRouter} from "next/router";

const HomePage = () => {

  const featuredEvents = getFeaturedEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }

  return <Fragment>
    <EventsSearch onSearch={findEventsHandler}/>
    <EventList items={featuredEvents}/>
  </Fragment>
}

export default HomePage;