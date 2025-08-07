import { useEffect, useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  fetchNotes,
  updateNote,
  createNote,
  deleteNote,
} from "../services/noteService";
import { toast } from "react-toastify";
const NotesPage = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [tagError, setTagError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  });

  const loadNotes = useCallback(async () => {
    try {
      const data = await fetchNotes(page);
      setNotes((prev) => {
        const newNotes = data.results;
        const unique = [
          ...prev,
          ...newNotes.filter(
            (newNote) => !prev.some((note) => note.id === newNote.id)
          ),
        ];
        return unique;
      });
      setHasMore(data.next !== null);
    } catch (err) {
      console.error("Error loading notes:", err);
    }
  }, [page]); // ✅ Add dependencies here

  const handleEdit = (note) => {
    setEditMode(true);
    setEditingNoteId(note.id);
    setFormData({
      title: note.title,
      content: note.content,
      tags: note.tags.map((t) => t.name).join(", "),
    });
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to form
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: formData.title,
      content: formData.content,
      tags: formData.tags
        .split(",")
        .map((tag) => ({ name: tag.trim().toLowerCase() }))
        .filter((tag) => tag.name !== ""),
    };

    console.log("Final Payload:", payload);
    try {
      if (editMode) {
        await updateNote(editingNoteId, payload);
        toast.success("Note Updated successfully!");
      } else {
        await createNote(payload);
        toast.success("Note created successfully!");
      }

      setFormData({ title: "", content: "", tags: "" });
      setEditMode(false);
      setEditingNoteId(null);
      loadNotes();
    } catch (error) {
      if (error.response?.status === 400) {
        const errors = error.response.data;

        // Show toast for general error
        toast.error("Failed to create note. Please fix the errors.");

        // Optional: Show inline error on tag field
        if (errors.tags) {
          setTagError(errors.tags[0]); // or join if array
        } else {
          setTagError("");
        }
      } else {
        toast.error("Something went wrong. Try again later.");
      }
    }
  };
  const handleDelete = async (noteId) => {
    // const confirmDelete = window.confirm(
    //   "Are you sure you want to delete this note?"
    // );
    // if (!confirmDelete) return;

    try {
      await deleteNote(noteId);
      toast.success("Note deleted successfully!");
      setNotes((prev) => prev.filter((note) => note.id !== noteId));
    } catch (error) {
      toast.error("Failed to delete note.");
    }
  };
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return (
    <>
      <Navbar />
      <div className="container-fluid my-5 px-md-5 ">
        <h2 className="text-center mb-4">📝 Create a New Note</h2>
        <div className="mx-1 px-1">
          <form onSubmit={handleSubmit} className="mb-5 mx-2 px-2">
            <div className="mb-3">
              <input
                type="text"
                name="title"
                placeholder="Note Title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="content"
                placeholder="Note Content"
                className="form-control"
                rows="4"
                value={formData.content}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="tags"
                placeholder="Tags (comma-separated, e.g., work, personal)"
                className="form-control"
                value={formData.tags}
                onChange={handleChange}
              />
              {tagError && <small className="text-danger">{tagError}</small>}
            </div>

            {/* <button className="btn btn-primary" type="submit">
              Save Note
            </button> */}
            <button className="btn btn-primary" type="submit">
              {editMode ? "Update Note" : "Save Note"}
            </button>

            {editMode && (
              <button
                className="btn btn-secondary ms-2"
                onClick={() => {
                  setEditMode(false);
                  setEditingNoteId(null);
                  setFormData({ title: "", content: "", tags: "" });
                }}
              >
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        <h3 className="mb-3 px-3 mx-5">📚 Your Notes</h3>
        {notes.length === 0 ? (
          <p>No notes found.</p>
        ) : (
          <div className="row mx-2">
            {notes.map((note) => (
              <div className="col-md-4 mb-4" key={note.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.content}</p>
                    {note.tags && note.tags.length > 0 && (
                      <div className="mt-3">
                        <strong>Tags: </strong>
                        {note.tags.map((tag) => (
                          <span
                            key={tag.id}
                            className="badge bg-secondary me-2"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}
                    {/* ✏️ Edit Button */}
                    <button
                      className="btn btn-outline-warning btn-sm mt-3 mx-2"
                      onClick={() => handleEdit(note)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger mt-2 mx-2"
                      onClick={() => handleDelete(note.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {hasMore && (
              <div className="text-center mt-4">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default NotesPage;
