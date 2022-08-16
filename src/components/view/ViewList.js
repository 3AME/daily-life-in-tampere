import ViewItem from "./ViewItem";
import "./ViewList.css";

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
