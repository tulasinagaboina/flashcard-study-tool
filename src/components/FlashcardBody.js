import React, { useState } from 'react';
import './FlashcardBody.css';

const CurrentDateTime = new Date().toLocaleString();
function FlashcardBody() {
    const [term, setTerm] = useState('');
    const [flashcards, setFlashcards] = useState([]);
    const [definition, setDefinition] = useState('');
    const [date, setDate] = useState('');
    const [Time, setTime] = useState('');
    function handleDeleteFlashcard(indexToRemove) {
        const updatedFlashcards = flashcards.filter((_, index) => index !== indexToRemove);
        setFlashcards(updatedFlashcards);
    }
    function handleAddCard() {
        // This function will run when the Add Card button is clicked
        console.log("Add Card button clicked!");
        // Later, this will update state
        if (!term) {
            alert("Please enter a term before adding a card.");
            return;
        }
        const newFlashcard = {
            term: term,
            definition: definition,
            date: date,
            time: Time
        };
        console.log("New Flashcard object:", newFlashcard);
        setTerm('');
        setFlashcards([...flashcards, newFlashcard]);
        const dummyFlashcard = {
            term: "React",
            definition: "A Javascript library for building user interfaces",
        }
        console.log("Dummy Flashcard:", dummyFlashcard);
        if (dummyFlashcard.term) {
            console.log("The dummy card has a term:", dummyFlashcard.term);
        }
        const dummyFlashcard1 = {
            term: "React",
            definition: "A library", example: "Hooks,Components,etc.",
        }
        console.log("Dummy Flashcard1:", dummyFlashcard1);
        if (dummyFlashcard.term) {
            console.log("The dummy card has a term:", dummyFlashcard1.term);
        }
        setDefinition('');
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        handleAddCard();
    }
    function handleTermChange(event) {
        setTerm(event.target.value);
        console.log("Current term:", term);
    }

    return (
        <main>
            <h2>Add a New Flashcard</h2>
            <p>Current system date/time: {CurrentDateTime}</p>
            <form onSubmit={handleFormSubmit}>
                <p>This is an User Interface.</p>
                <h3>This is Important Theory</h3>
                <label>
                    Term:
                    <input
                        type="text"
                        name="term"
                        placeholder="Enter flashcard term"
                        value={term}
                        onChange={handleTermChange}
                    />
                </label>
                <br /><br />
                <label>
                    Definition:
                    <textarea name="definition"
                        placeholder="Enter definition here..."
                        value={definition}
                        onChange={(e) => setDefinition(e.target.value)}>

                    </textarea>
                </label>
                <br /><br />
                <label>
                    Date:
                    <input type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <br /><br />
                <label>
                    Time:
                    <input type="time"
                        value={Time}
                        onChange={(e) => setTime(e.target.value)} />
                </label>
                <br /><br />
                {
                    flashcards.map((card, index) => (
                        < div key={index}>
                            <h3>{card.term}</h3>
                            <p>{card.definition}</p>
                            {}
                            <button onClick={() => handleDeleteFlashcard(index)}>Delete</button>
                        </div>
                    ))
                }

                <button type="submit">Add Card</button>
            </form>
        </main>

    );
}
export default FlashcardBody;

