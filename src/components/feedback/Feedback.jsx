import React from 'react';
import PropTypes from 'prop-types';
import styles from './feedback.module.css';

function Feedback({ message }) {
  return (
    <>
    

      <div className={styles.feedbackContainer}>
      
            <h1 className={styles.feedbackHeader} >Topa React</h1>
       
        <h2> Please leave your {message}</h2>
        <div className={styles.feedbackWrapper}>
          <button className={styles.feedbackMood}>Good</button>
          <button className={styles.feedbackMood}>Neutral</button>
          <button className={styles.feedbackMood}>Bad</button>
        </div>

        <div>
          <h2>Statisctics</h2>
          <p>Good:</p>
          <p>Neutral:</p>
          <p>Bad:</p>
          <p>Total:</p>
          <p>Positive:</p>
        </div>
      </div>
    </>
  );
}

Feedback.propsTypes = {
  message: PropTypes.string.isRequired,
};

export default Feedback;
