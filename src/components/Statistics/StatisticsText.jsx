import React from'react';
import styles from "./Statistic.module.css"

function Statistics ({ good, neutral, bad, total, positivePercentage}) {
  const formattedPositivePercentage = Number(positivePercentage).toFixed(2);
    return (
        <div className={styles.statisticsContainer}>
        <h2 className={styles.statisticTitle}>Statistics</h2>
        <p className={styles.statisticRow}>Good: {good}</p>
        <p className={styles.statisticRow}>Neutral: {neutral}</p>
        <p className={styles.statisticRow}>Bad: {bad}</p>
        <p className={styles.statisticRow}>Total: {total}</p>
        <p className={styles.statisticRow}>Positive: {formattedPositivePercentage}%</p>
      </div>
    );
}

export default Statistics;