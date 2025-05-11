import React, { useState } from "react";
import "../TurnSuccess/styles.css"
import { MY_APPOINTMENTS } from "../../helpers/routes";
import { useNavigate } from "react-router-dom";

function TurnSuccess(){
    const navigate = useNavigate()

    return (
          <div className="notification-overlay">
            <div className="notification-box">
             <p className="notification-message">Turno creado exitosamente</p>
             <button className="notification-button" onClick={() => navigate(MY_APPOINTMENTS)}>
                  Ver mis Turnos
                </button>
              </div>
            </div>
        
    );
}

export default TurnSuccess