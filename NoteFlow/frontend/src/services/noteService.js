// /services/noteService.js
import axios from "axios";
// const API_BASE_URL = "http://127.0.0.1:8000/api/notes";
//const API_BASE_URL = "https://noteflow-backend-latest.onrender.com/api/notes";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL_NOTES;
// Set auth headers
const getAuthHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const fetchNotes = async (page = 1) => {
  const response = await axios.get(
    `${API_BASE_URL}/?page=${page}`,
    getAuthHeaders()
  );
  return response.data;
};

export const updateNote = async (noteId, noteData) => {
  console.log(noteId);
  const response = await axios.put(
    `${API_BASE_URL}/${noteId}/`,
    noteData,
    getAuthHeaders()
  );
  return response.data;
};

// Create a new note
export const createNote = async (noteData) => {
  const response = await axios.post(
    API_BASE_URL + "/",
    noteData,
    getAuthHeaders()
  );
  return response.data;
};

export const deleteNote = async (noteId) => {
  const response = await axios.delete(
    `${API_BASE_URL}/${noteId}/`,
    getAuthHeaders()
  );
  return response.data;
};
