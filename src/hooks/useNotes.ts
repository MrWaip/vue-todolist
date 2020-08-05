import { ref } from '@vue/composition-api';
import { Note } from '@/types';

export const useNotes = () => {
  const jsonNotes = localStorage.getItem('notes');
  const notes = ref<Note[]>(jsonNotes ? JSON.parse(jsonNotes) : []);

  const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes.value));
  };

  const noteFactory = (): Note => {
    return {
      id: Math.round(Math.random() * 999999),
      todoList: [],
    };
  };

  const findNote = (id: number): Note | null => {
    const note = notes.value.find(i => i.id == id);
    return note ? { ...note } : null;
  };

  const deleteNote = (id: number) => {
    const index = notes.value.findIndex(i => i.id == id);
    notes.value.splice(index, 1);
    saveNotes();
  };

  const addNote = (note: Note) => {
    notes.value.push(note);
    saveNotes();
  };

  const updateNote = (note: Note) => {
    const index = notes.value.findIndex(i => i.id == note.id);
    notes.value[index] = note;
    saveNotes();
  };

  return { notes, deleteNote, addNote, findNote, noteFactory, updateNote };
};
