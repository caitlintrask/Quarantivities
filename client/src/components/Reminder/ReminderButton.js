import React, {} from "react";
import "./style.css";


function ReminderButton(props) {

    return ( <>
          
              <button  className="btn reminder btn-form btn-outline-secondary btn-sm" onClick={props.addReminder}>Remind Me!</button>
              <button className="btn-sm btn smallReminder"onClick={props.addReminder}><i class="fa fa-envelope-o"></i></button>
  </>  )}

export default ReminderButton;