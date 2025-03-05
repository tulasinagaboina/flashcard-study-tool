import React, { useState } from 'react';
import './FlashcardBody.css';

function FlashcardBody() {
    const [term, setTerm] = useState('');
    const [flashcards, setFlashcards] = useState([]);
    const [definition, setDefinition] = useState('');
    function handleAddCard() {
        // This function will run when the Add Card button is clicked
        console.log("Add Card button clicked!");
        // Later, this will update state
        if (!term) {
            alert("Please enter a term before adding a card.");
            return;
        }
        const newFlashcard = { term: term };
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
        const newFlashcard1 = {
            term: term,
            definition: definition,
        };
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
                {
                    flashcards.map((card, index) => (
                        < div key={index}>
                            <p>{card.term}</p>
                        </div>
                    ))
                }

                <button type="submit">Add Card</button>
            </form>
        </main>

    );
}
export default FlashcardBody;

