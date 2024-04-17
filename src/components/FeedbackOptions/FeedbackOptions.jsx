import React from 'react';
import styles from './FeedbackOptions.module.css';

function FeedbackButtons({ good, neutral, bad, onLeaveFeedback }) {
  const handleClick = options => {
    onLeaveFeedback(options);
  };

  return (
    <div className={styles.feedbackWrapper}>
      <button
        onClick={() => handleClick('good')}
        className={styles.feedbackMood}
      >
        Good
      </button>
      <button
        onClick={() => handleClick('neutral')}
        className={styles.feedbackMood}
      >
        Neutral
      </button>
      <button
        onClick={() => handleClick('bad')}
        className={styles.feedbackMood}
      >
        Bad
      </button>
    </div>
  );
}

export default FeedbackButtons;
