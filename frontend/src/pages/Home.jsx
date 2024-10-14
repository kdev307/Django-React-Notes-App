import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [editingNoteId, setEditingNoteId] = useState(null);
    const location = useLocation();
    const username = location.state?.username || "John";

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api.get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note Deleted !");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api.post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) {
                    alert("Note Created !");
                    setTitle("");
                    setContent("");
                } else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    const startEditing = (note) => {
        setEditingNoteId(note.id);
        setTitle(note.title);
        setContent(note.content);
    };

    const updateNote = (e) => {
        e.preventDefault();
        api.put(`/api/notes/${editingNoteId}/`, { content, title })
            .then((res) => {
                if (res.status === 200) {
                    alert("Note Updated !");
                    setTitle("");
                    setContent("");
                    setEditingNoteId(null);
                    getNotes();
                } else alert("Failed to update note.");
            })
            .catch((err) => alert(err));
    };

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("REFRESH_TOKEN");
        navigate("/login");
    };

    return (
        <div className="home">
            <nav className="navbar">
                <h1 className="user-name">
                    Hello <em style={{ color: "#0097ff" }}>{username}</em>
                </h1>
                <button type="submit" className="btn" onClick={handleLogout}>
                    Logout
                </button>
            </nav>
            <div className="notes-box">
                <div className="notes">
                    <h2>Your Notes</h2>
                    <div className="note-block">
                        {notes.map((note) => (
                            <Note
                                note={note}
                                onDelete={deleteNote}
                                onEdit={startEditing}
                                key={note.id}
                            />
                        ))}
                    </div>
                </div>
                <div className="separator"></div>
                <div className="note-editor">
                    {/* <h1>Create a Note</h1> */}
                    <h2>{editingNoteId ? "Edit Note" : "Create a Note"}</h2>
                    <form action="" onSubmit={editingNoteId ? updateNote : createNote}>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <br />
                        <label htmlFor="content">Content:</label>
                        <textarea
                            name="content"
                            id="content"
                            required
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                        <br />
                        <input type="submit" value={editingNoteId ? "Update" : "Submit"} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
