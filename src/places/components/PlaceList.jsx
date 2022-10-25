import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./placeList.css";
export default function PlaceList({ items }) {
  if (items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found. Maybe create one</h2>
          <button>Share Places</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
          />
        );
      })}
    </ul>
  );
}
