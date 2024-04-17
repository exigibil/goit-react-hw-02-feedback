import React, { useState } from 'react';
import styles from './feedback.module.css';
import Statistics from '../Statistics/StatisticsText';
import FeedbackButtons from '../FeedbackOptions/FeedbackOptions';
import NotificationMessage from '../NotificationMessage/NotificationMessage';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedback = good + neutral + bad;
  const positivePercentrage =
    totalFeedback > 0 ? ((good / totalFeedback) * 100).toFixed(2) : 0;

  const updateCount = option => {
    if (option === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (option === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (option === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  return (
    <div className={styles.feedbackContainer}>
      <h1 className={styles.feedbackHeader}>Topa's React APP Feedback</h1>
      <h2 className={styles.feedbackHeader}>Please leave your feedback</h2>

      <FeedbackButtons onLeaveFeedback={updateCount} />

      {totalFeedback === 0 ? (
        <NotificationMessage />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentrage}
        />
      )}
    </div>
  );
}

export default Feedback;
