import React from "react";
import Feedback from "./feedback/Feedback";


export const App = () => {

  const message = "Feedback"

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback
       message={message}  />

    </div>
  );
};
