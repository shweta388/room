import React, { useState } from "react";

function Rows() {
  let [room, setRoom] = useState(1);
  let [adults, setAdult] = useState(0);
  let [children, setChildren] = useState(0);
  const roomMinus =
    room > 1 ? `fa-minus-circle` : `fa-minus-circle disable_button`;
  const adultMinus =
    adults > 0 ? `fa-minus-circle` : `fa-minus-circle disable_button`;
  const childrenMinus =
    children > 0 ? `fa-minus-circle` : `fa-minus-circle disable_button`;
  return (
    <>
      <div className="row">
        <div>
          <i
            className="fa fa-bed"
            aria-hidden="true"
            style={{ marginRight: "10px" }}
          ></i>
          ROOMS
        </div>
        <div className="inner_div">
          <i
            className={`fa ${roomMinus}`}
            aria-hidden="true"
            onClick={() => {
              if (room > 1) {
                setRoom(room - 1);
              }
            }}
          ></i>
          <span>{room}</span>
          <i
            className="fa fa-plus-circle"
            aria-hidden="true"
            onClick={() => {
              if (room === 2) {
                setAdult((adults = 3));
              }
              setRoom(room + 1);
            }}
          ></i>
        </div>
      </div>
      <div className="row">
        <div>
          <i
            className="fa fa-user"
            aria-hidden="true"
            style={{ marginRight: "10px" }}
          ></i>
          ADULTS
        </div>
        <div className="inner_div">
          <i
            className={`fa ${adultMinus}`}
            aria-hidden="true"
            onClick={() => {
              if (adults > 0) {
                setAdult(adults - 1);
              }
            }}
          ></i>
          <span>{adults}</span>
          <i
            className="fa fa-plus-circle"
            aria-hidden="true"
            onClick={() => {
              if (adults > 3) {
                setRoom(room + 1);
              }
              setAdult(adults + 1);
            }}
          ></i>
        </div>
      </div>
      <div className="row" style={{ border: "none" }}>
        <div>
          <i
            className="fa fa-child"
            aria-hidden="true"
            style={{ marginRight: "10px" }}
          ></i>
          CHILDREN
        </div>
        <div className="inner_div">
          <i
            className={`fa ${childrenMinus}`}
            aria-hidden="true"
            onClick={() => {
              if (children > 0) {
                setChildren(children - 1);
              }
            }}
          ></i>
          <span>{children}</span>
          <i
            className="fa fa-plus-circle"
            aria-hidden="true"
            onClick={() => setChildren(children + 1)}
          ></i>
        </div>
      </div>
    </>
  );
}

export default Rows;
