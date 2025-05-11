import React from "react";
import AppointmentsView from "./AppointmentsView";
import TurnCancelled from "../components/TurnSuccess/TurnCancelled";
import TurnQuestion from "../components/TurnSuccess/TurnQuestion";

function TurnQuestionView(){
    return(
        <div>
            <AppointmentsView />
            <TurnQuestion />
        </div>
    )
}

export default TurnQuestionView