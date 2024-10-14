import React, { useState } from "react";
import "../styles/Note.css";
import { Edit, Delete } from "@mui/icons-material";

function Note({ note, onDelete, onEdit }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
    const listItems = note.content.split("\n").map((item, index) => <li key={index}>{item}</li>);
    const [isDone, setDone] = useState(false);

    function handleCompletion() {
        setDone((isDone) => !isDone);
    }
    return (
        <div className={`note-container ${isDone ? "done-tag" : ""}`}>
            <div className="note-info">
                <h2 className="note-title" onClick={handleCompletion}>
                    {note.title}
                </h2>
                <div className="button-container">
                    <button className="edit-button" onClick={() => onEdit(note)}>
                        <Edit />
                    </button>
                    <button className="delete-button" onClick={() => onDelete(note.id)}>
                        <Delete />
                    </button>
                </div>
            </div>
            {/* <p className="note-content">{note.content}</p> */}
            <ul className="note-content">{listItems}</ul>
            <p className="note-date">{formattedDate}</p>
        </div>
    );
}

export default Note;
