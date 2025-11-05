import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  // console.log(props.companyName);
  return (
    <div className="card">
      <div>
        <div className="top">
          <img
            src={props.logo}
            // src="https://i.pinimg.com/736x/0a/06/60/0a06600cc3cedeb49280b54114c88ce6.jpg"
            alt=""
          />
          <button>
            Save <Bookmark size={14} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.companyName} <span>{props.date}</span>
          </h3>
          <h2>{props.position}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
