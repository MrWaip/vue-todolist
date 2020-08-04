import { ref } from '@vue/composition-api';
import { Note } from '@/types';

export const useNotes = () => {
  const jsonNotes = localStorage.getItem('notes');
  const notes = ref<Note[]>(jsonNotes ? JSON.parse(jsonNotes) : []);

  const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes.value));
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

  return { notes, deleteNote, addNote };
};
