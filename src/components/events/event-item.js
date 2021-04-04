import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = ({event}) => {

  const humanReadableDate = new Date(event.date).toLocaleDateString('en-Us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const formattedAddress = event.location.replace(', ', '\n');

  const exploreLink = `/events/${event.id}`;

  return <li key={event.id} className={classes.item}>
    <img src={'/' + event.image} alt=""/>
    <div
      className={classes.content}>
      <div className={classes.summary}>
        <h2>{event.title}</h2>
        <div className={classes.date}>
          <DateIcon/>
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon/>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div className={classes.actions}>

        <Button link={exploreLink}>
          <span>Explore Event</span>
          <span className={classes.icon}><ArrowRightIcon/></span>
        </Button>
      </div>
    </div>
  </li>
}

export default EventItem;