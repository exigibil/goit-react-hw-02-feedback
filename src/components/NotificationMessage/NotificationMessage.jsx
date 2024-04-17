import React from'react';
import styles from './NotificationMessage.module.css';


function NotificationMessage() {
    return (
        <div className={styles.notificationMessage}>
            <h3>There is no feedback</h3>
        </div>
    );
}


export default NotificationMessage