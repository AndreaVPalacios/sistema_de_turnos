import React from "react";
import AppointmentsView from "./AppointmentsView";
import TurnCancelled from "../components/TurnSuccess/TurnCancelled";

function TurnCancelledView(){
    return(
        <div>
            <AppointmentsView />
            <TurnCancelled />
        </div>
    )
}

export default TurnCancelledView