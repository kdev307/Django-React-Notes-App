import React from "react";
import "../styles/Note.css";

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
    const listItems = note.content.split("\n").map((item, index) => <li key={index}>{item}</li>);

    return (
        <div className="note-container">
            <h3 className="note-title">{note.title}</h3>
            {/* <p className="note-content">{note.content}</p> */}
            <ul className="note-content">{listItems}</ul>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
    );
}

export default Note;
