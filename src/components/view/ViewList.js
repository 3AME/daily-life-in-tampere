import ViewItem from "./ViewItem";
import "./ViewList.css";
/**
 *  ViewList.js
 *  This is a list component to collect all visit experiences items.
 *  This component will import the ViewItem and delivery the data to it, so that every single expeirence can be present on the screen.

 */
const ViewList = (props) => {
  console.log(props.items);
  return (
    <ul className="views-list">
      {props.items.map((view) => (
        <ViewItem
          key={view.id}
          title={view.title}
          location={view.location}
          link={view.locationLink}
          diary={view.diary}
          img={view.img}
          date={view.date}
        />
      ))}
    </ul>
  );
};

export default ViewList;
