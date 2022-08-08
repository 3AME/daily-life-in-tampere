import ImgBus from "../../assets/images/Transportation/Bus.jpg";
import ImgTram from "../../assets/images/Transportation/Tram.jpg";
import ImgCityBike from "../../assets/images/Transportation/CityBike.jpg";

const Transpotation = [
  {
    Title: "Bus",
    Img:ImgBus,
    Info:"https://www.nysse.fi/en/tickets-and-fares/season-ticket.html",
    Advantages:"Regular schedules, saving physical energy.",
    Disadvantages:"Fewer trains at weekends, inaccurate evening times, strikes can affect operations.",
  },
  {
    Title: "Tram",
    Img:ImgTram,
    Info:"https://www.nysse.fi/en/tickets-and-fares/season-ticket.html",
    Advantages:"Regular schedules, saving physical energy, high speed.",
    Disadvantages:"Fewer routs. Fewer trains at weekends, inaccurate evening times, strikes can affect operations.",
  },
  {
    Title: "City-bike",
    Img:ImgCityBike,
    Info:"https://pirkanmaanosuuskauppa.fi/salepyora/",
    Advantages:"Make your own time, you can take a bike tour.",
    Disadvantages:"Only 45 minutes to unlock each time and must be returned to the designated location.",
  },
]

export default Transpotation;