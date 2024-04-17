import React, { useState } from 'react';
import styles from './feedback.module.css';
import Statistics from '../Statistics/StatisticsText';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';


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
      <h1 className={styles.feedbackHeader}>Topa's React APP Feedback</h1>
      <h2 className={styles.feedbackHeader}>Please leave your feedback</h2>
  
      <div className={styles.feedbackWrapper}>
        <button onClick={() => updateCount(setGood)} className={styles.feedbackMood}>Good</button>
        <button onClick={() => updateCount(setNeutral)} className={styles.feedbackMood}>Neutral</button>
        <button onClick={() => updateCount(setBad)} className={styles.feedbackMood}>Bad</button>
      </div>
      
    <FeedbackOptions options = {{good: setGood, neutral: setNeutral, bad: setBad, onLeaveFeedback: updateCount}} />

    <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentrage} />
     
    </div>
  );
}

export default Feedback;
