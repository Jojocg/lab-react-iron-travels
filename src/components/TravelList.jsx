import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

export default function TravelList() {
  const [travelList, setTravelList] = useState(travelPlansData);

  const deleteTravel = (travelId) => {
    const filteredList = travelList.filter(travel => travel.id !== travelId);

    setTravelList(filteredList);
  };

  return (
    <div className="cards-container">
      {travelList.map(travel => {
        return (
            <div key={travel.id} className="travel-card">
                <img className="travel-image" src={travel.image} alt="" />
                <div className="travel-info-container">
                    <h2>{travel.destination} ({travel.days} Days)</h2>
                    <i>{travel.description}</i>
                    <p><strong>Price: </strong>{travel.totalCost}€</p>

                    {travel.totalCost <= 350 && <button>Great Deal</button>}
                    {travel.totalCost >= 1500 && <button>Premium</button>}
                    {travel.allInclusive && <button>All Inclusive</button>}
                    <br /><br />
                    <button className="delete-btn" onClick={() => deleteTravel(travel.id)}>Delete</button>
                </div>
            </div>
        );
      })}
    </div>
  );
}
