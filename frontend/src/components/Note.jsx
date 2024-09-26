import React from "react";
import "../styles/Note.css";

function Note({ note, onDelete, onEdit }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
    const listItems = note.content.split("\n").map((item, index) => <li key={index}>{item}</li>);

    return (
        <div className="note-container">
            <h2 className="note-title">{note.title}</h2>
            {/* <p className="note-content">{note.content}</p> */}
            <ul className="note-content">{listItems}</ul>
            <p className="note-date">{formattedDate}</p>
            <div className="button-container">
                <button className="edit-button" onClick={() => onEdit(note.id)}>
                    Edit
                </button>
                <button className="delete-button" onClick={() => onDelete(note.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Note;
