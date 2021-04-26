import { Event, Product } from "./data";
import "./Timeline.css";

// You can use these chevron icons for the day expand/collapse toggle button
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

// These are the product type icons
import { ReactComponent as Hat } from "./hat.svg";
import { ReactComponent as Shoes } from "./shoes.svg";
import { ReactComponent as TShirt } from "./t-shirt.svg";

function timeFormat(date: string, options: Intl.DateTimeFormatOptions) {
  return new Date(date).toLocaleTimeString("en-GB", options);
}

function EventEntry({ event }: { event: Event }) {
  return (
    <div className="EventEntry">
      <p className="EventDescription">
        {event.product.title} {event.product.type} {event.action} by{" "}
        {event.user.name}
      </p>
      <p className="EventDescription">
        <time>
          {timeFormat(event.updated_at, {
            hour: "2-digit",
            minute: "2-digit"
          })}
        </time>
      </p>
    </div>
  );
}

export function Timeline({ log }: { log: Event[] }) {
  return (
    <div className="Timeline">
      <h1 className="header">Timeline</h1>
      {log.map((event) => (
        <EventEntry key={event.updated_at} event={event} />
      ))}
    </div>
  );
}
