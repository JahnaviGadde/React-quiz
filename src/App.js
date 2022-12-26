import React, { useState } from "react";
import "./App.css";

function App() {

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const questions = [{
            text: "What color is the sky?",
            options: [
                { id: 0, text: "blue", isCorrect: false },
                { id: 1, text: "White", isCorrect: false },
                { id: 2, text: "Red", isCorrect: false },
                { id: 3, text: "Ai my amor ! Ai my amor", isCorrect: true },
            ],
        },
        {
            text: "You told that its Red ?",
            options: [
                { id: 0, text: "Ai my amor ! ai my amor !", isCorrect: true },
                { id: 1, text: "Yes", isCorrect: false },
                { id: 2, text: "No", isCorrect: false },
                { id: 3, text: "May be", isCorrect: false },
            ],
        },

        {
            text: "Where should I put my shoes?",
            options: [
                { id: 0, text: "Your head", isCorrect: false },
                { id: 1, text: "Your leg", isCorrect: false },
                { id: 2, text: "In Bag", isCorrect: false },
                { id: 3, text: "Ai my amor ! Ai my amor", isCorrect: true },
            ],
        },
        {
            text: "You told me put it on your head ?",
            options: [
                { id: 0, text: "yes ", isCorrect: false },
                { id: 1, text: "Ai my amor ! ai my amor !", isCorrect: true },
                { id: 2, text: "No", isCorrect: false },
                { id: 3, text: "May be", isCorrect: false },
            ],
        },
        {
            text: "How are my Questions?",
            options: [
                { id: 0, text: "Unrelatable", isCorrect: false },
                { id: 1, text: "Amazing !!", isCorrect: true },
                { id: 2, text: "Nice", isCorrect: true },
                { id: 3, text: "What kind of questions are these!!", isCorrect: false },
            ],
        },
    ];

    // Helper Functions

    /* A possible answer was clicked */
    const optionClicked = (isCorrect) => {
        // Increment the score
        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    /* Resets the game back to default */
    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };

    return ( <
        div className = "App" > { /* 1. Header  */ } <
        h1 > Quiz made using React < /h1>

        { /* 2. Current Score  */ } <
        h2 class = "current-score" > Current Score: { score } < /h2>

        { /* 3. Show results or show the question game  */ } {
            showResults ? (
                /* 4. Final Results */
                <
                div className = "final-results" >
                <
                h1 > Final Results < /h1> <
                h2 > { score }
                out of { questions.length }
                correct <
                /h2> <
                button onClick = {
                    () => restartGame()
                } > Restart game < /button> < /
                div >
            ) : (
                /* 5. Question Card  */
                <
                div className = "question-card" > { /* Current Question  */ } <
                h2 >
                Question: { currentQuestion + 1 }
                out of { questions.length } <
                /h2> <
                h3 className = "question-text" > { questions[currentQuestion].text } < /h3>

                { /* List of possible answers  */ } <
                ul > {
                    questions[currentQuestion].options.map((option) => {
                        return ( <
                            li key = { option.id }
                            onClick = {
                                () => optionClicked(option.isCorrect)
                            } > { option.text } <
                            /li>
                        );
                    })
                } <
                /ul> < /
                div >
            )
        } <
        /div>
    );
}

export default App;