import React, { useState } from "react";
import styles from "./TwitterClone.module.css";

const TwitterClone = () => {
    const [tweets, setTweets] = useState([]);
    const [content, setContent] = useState("");

    const handleTweetSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            const newTweet = {
                id: Date.now(),
                username: "Usuario",
                content: content.trim(),
            };
            setTweets([newTweet, ...tweets]);
            setContent("");
        }
    };

    return (
        <div className={styles.container}>
            <h1>Clonación de Twitter</h1>
            <form onSubmit={handleTweetSubmit} className={styles.tweetForm}>
        <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="¿Qué está pasando?"
            className={styles.tweetInput}
        />
                <button type="submit" className={styles.tweetButton}>
                    Tweet
                </button>
            </form>
            <div className={styles.tweetList}>
                {tweets.map((tweet) => (
                    <div key={tweet.id} className={styles.tweet}>
                        <p className={styles.username}>{tweet.username}</p>
                        <p className={styles.content}>{tweet.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TwitterClone;
