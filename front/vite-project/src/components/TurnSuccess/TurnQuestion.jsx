import React, { useState } from "react";
import "../TurnSuccess/styles.css"
import { MY_APPOINTMENTS } from "../../helpers/routes";
import { useNavigate } from "react-router-dom";
import { userUserContext } from "../context/UserContext";

function TurnQuestion(){
    const navigate = useNavigate()
    const {setUserAppointments} = userUserContext()

    const handleTurnCancelled = () => {
        setUserAppointments(null)
    }


    return (
          <div className="notification-overlay">
            <div className="notification-box">
             <p className="notification-message">¿Está segur@ de cancelar este turno?</p>

                <button className="notification-button" onClick={() => navigate(MY_APPOINTMENTS)}>
                  Si, quiero cancelarlo
                </button>
                <button className="notification-button" onClick={handleTurnCancelled}>
                  No, regresa
                </button>

              </div>
            </div>
        
    );
}

export default TurnQuestion