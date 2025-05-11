import React from "react";
import TurnSuccess from "../components/TurnSuccess/TurnSuccess";
import AppointmentsView from "./AppointmentsView";

function TurnSuccessView(){
    return(
        <div>
            <AppointmentsView />
            <TurnSuccess />
        </div>
    )
}

export default TurnSuccessView