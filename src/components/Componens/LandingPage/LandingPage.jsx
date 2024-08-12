import React from "react";


import styles from "./LandingPage.module.css";

export const LandingPage = () => {
    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Welcome to My Landing Page</h1>
                <p className={styles.subtitle}>
                    Showcasing my skills as a Frontend Developer.
                </p>
                <a href="#features" className={styles.cta}>
                    Learn More
                </a>
            </header>

            <section className={styles.features} id="features">
                <h2 className={styles.featuresTitle}>Features</h2>
                <div className={styles.featuresList}>
                    <div className={styles.featureItem}>
                        <h3>Responsive Design</h3>
                        <p>Optimized for all devices: desktop, tablet, and mobile.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <h3>Modern Technologies</h3>
                        <p>Built with React, CSS Modules, and modern web standards.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <h3>Fast Performance</h3>
                        <p>Lightning-fast loading times with optimized code.</p>
                    </div>
                </div>
            </section>

            <section className={styles.testimonials}>
                <h2 className={styles.testimonialsTitle}>What People Are Saying</h2>
                <div className={styles.testimonialList}>
                    <div className={styles.testimonialItem}>
                        <p>"Amazing work! The landing page looks fantastic and performs flawlessly."</p>
                        <p>- Happy Client</p>
                    </div>
                    <div className={styles.testimonialItem}>
                        <p>"Incredible attention to detail and responsiveness across all devices."</p>
                        <p>- Satisfied User</p>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 Your Name. All rights reserved.</p>
            </footer>
        </section>
    );
};
