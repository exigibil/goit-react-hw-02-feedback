import React from 'react';
import styles from './Statistic.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.statisticsContainer}>
      <h2 className={styles.statisticTitle}>Statistics</h2>
      <p className={styles.statisticRow}>Good: {good}</p>
      <p className={styles.statisticRow}>Neutral: {neutral}</p>
      <p className={styles.statisticRow}>Bad: {bad}</p>
      <p className={styles.statisticRow}>Total: {total}</p>
      <p className={styles.statisticRow}>Positive: {positivePercentage}%</p>
    </div>
  );
}

export default Statistics;
