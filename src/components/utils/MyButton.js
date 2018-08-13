import React from "react";
import Button from "@material-ui/core/Button";

import TicketIcon from "../../resources/images/icons/ticket.png";
const MyButton = props => {
  //const { classes } = props;
  return (
    <div>
      <Button
        href={props.link}
        variant="contained"
        size="small"
        style={{
          background: props.bck,
          color: props.color
        }}
      >
        <img src={TicketIcon} className="iconImage" alt="icon_button" />
        {props.text}
        {/* Button */}
      </Button>
    </div>
  );
};

export default MyButton;
