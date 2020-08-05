import { ref } from '@vue/composition-api';
import { Note } from '@/types';

export const useNotes = () => {
  const jsonNotes = localStorage.getItem('notes');
  const notes = ref<Note[]>(
    jsonNotes
      ? JSON.parse(jsonNotes)
      : [
          {
            id: 1,
            title: 'Действия с заметкой',
            todoList: [
              {
                id: 1,
                title: 'сохранить изменения',
                completed: true,
              },
              {
                id: 2,
                title: 'отменить редактирование (необходимо подтверждение)',
                completed: true,
              },
              {
                id: 3,
                title: 'удалить (необходимо подтверждение)',
                completed: true,
              },
              {
                id: 4,
                title: 'отменить внесенное изменение',
                completed: true,
              },
              {
                id: 5,
                title: 'повторить отмененное изменение',
                completed: true,
              },
            ],
          },
          {
            id: 2,
            title: 'Действия с пунктами Todo',
            todoList: [
              {
                id: 1,
                title: 'добавить',
                completed: true,
              },
              {
                id: 2,
                title: 'удалить',
                completed: true,
              },
              {
                id: 3,
                title: 'отредактировать текст',
                completed: true,
              },
              {
                id: 4,
                title: 'отметить как выполненный',
                completed: true,
              },
            ],
          },
          {
            id: 3,
            title: 'Действия на главной',
            todoList: [
              {
                id: 1,
                title: 'перейти к созданию новой заметки',
                completed: true,
              },
              {
                id: 2,
                title: 'перейти к изменению',
                completed: true,
              },
              {
                id: 3,
                title: 'удалить (необходимо подтверждение)',
                completed: true,
              },
            ],
          },
        ],
  );

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
