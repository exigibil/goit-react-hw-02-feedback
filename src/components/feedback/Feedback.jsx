import React, { useState } from 'react';
import styles from './feedback.module.css';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;
  const positivePercentrage = totalFeedback > 0 ? ((good / totalFeedback) * 100).toFixed(2) : 0;


  const updateCount = (setCount) => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.feedbackContainer}>
      <h1 className={styles.feedbackHeader}>Topa's React Feedback</h1>
      <h2>Please leave your feedback</h2>
      <div className={styles.feedbackWrapper}>
        <button onClick={() => updateCount(setGood)} className={styles.feedbackMood}>Good</button>
        <button onClick={() => updateCount(setNeutral)} className={styles.feedbackMood}>Neutral</button>
        <button onClick={() => updateCount(setBad)} className={styles.feedbackMood}>Bad</button>
      </div>

      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positivePercentrage}%</p>
      </div>
    </div>
  );
}

export default Feedback;
