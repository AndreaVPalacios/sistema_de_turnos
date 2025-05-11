import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

export const UserContext = createContext({
  userActive: {},
  userAppointments: [],
  setUserActive: () => {},
  setUserAppointments: () => {},
}); 

export const UserProvider = ({ children }) => {
  const [userActive, setUserActive] = useState({})
  const [userAppointments, setUserAppointments] = useState([])


  const value = {userActive, setUserActive, userAppointments, setUserAppointments}
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
};

export const userUserContext = () => {
  return useContext(UserContext)
};






// // Crear el contexto
// const TurnContext = createContext({
//          turns: [],
//          addTurns: () => {},
//          deleteTurns: () => {}
//      });

// // Proveedor de contexto
// export const TurnProvider = ({ children }) => {
//   const [turns, setTurns] = useState([]);

//   const addTurn = (newTurn) => {
//     setTurns((prevTurns) => [...prevTurns, newTurn]);
//   };

//   const deleteTurns = () => {
//     setTurns(turns.filter((turn) => turn.title !== title))
//   };

//   const value = {turns, addTurn, deleteTurns}

//   return (
//     <TurnContext.Provider value={value}>
//       {children}
//     </TurnContext.Provider>
//   );
// };

// // Custom hook para usar el contexto
// export const useTurnContext = () => {
//   return useContext(TurnContext);
// };
