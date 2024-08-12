import React, { useState } from "react";
import styles from "./QuizApp.module.css";

const quizData = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Berlín", "Madrid", "París", "Lisboa"],
        answer: "París",
    },
    {
        question: "¿Cuál es el lenguaje de programación más popular en 2024?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: "JavaScript",
    },
    {
        question: "¿Cuál es el océano más grande?",
        options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
        answer: "Pacífico",
    },
];

export const QuizApp = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (option) => {
        if (option === quizData[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className={styles.container}>
            {showScore ? (
                <div className={styles.scoreSection}>
                    <h2>Tu puntaje es: {score} de {quizData.length}</h2>
                    <button onClick={() => {
                        setCurrentQuestionIndex(0);
                        setScore(0);
                        setShowScore(false);
                    }}>
                        Volver a jugar
                    </button>
                </div>
            ) : (
                <>
                    <div className={styles.questionSection}>
                        <span>Pregunta {currentQuestionIndex + 1} de {quizData.length}</span>
                        <h2>{quizData[currentQuestionIndex].question}</h2>
                    </div>
                    <div className={styles.answerSection}>
                        {quizData[currentQuestionIndex].options.map((option) => (
                            <button key={option} onClick={() => handleAnswerOptionClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
