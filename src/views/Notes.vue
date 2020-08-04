<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" v-for="note in notes" :key="note.id">
        <note :note="note" readonly @delete="onClickDelete" />
      </v-col>
      <v-col cols="12" md="3" class="d-flex align-center">
        <v-btn color="primary" :to="{ name: 'AddNote' }">
          Добавить запись
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog v-model="delDialog" width="500px" persistent>
      <v-card>
        <v-toolbar dense elevation="0" title dark color="primary">
          <v-toolbar-title>
            Удаление записи
          </v-toolbar-title>
          <v-spacer />
          <v-icon @click="resetDialog">
            mdi-close
          </v-icon>
        </v-toolbar>
        <v-card-text class="pt-5">
          <div class="body-1">
            Вы действительно хотите удалить эту запись?
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="resetDialog">
            Отмена
          </v-btn>
          <v-spacer />
          <v-btn color="error" @click="onConfirmDelete">
            Удалить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import Note from '@/components/Note.vue';
import { useNotes } from '@/hooks/useNotes';

export default defineComponent({
  components: { Note },
  setup() {
    const delDialog = ref(false);
    const noteId = ref<number | null>(null);

    const { notes, deleteNote } = useNotes();

    const onClickDelete = (id: number) => {
      noteId.value = id;
      delDialog.value = true;
    };

    const resetDialog = () => {
      delDialog.value = false;
      noteId.value = null;
    };

    const onConfirmDelete = (id: number) => {
      deleteNote(id);
      resetDialog();
    };

    return { notes, onClickDelete, delDialog, noteId, onConfirmDelete, resetDialog };
  },
});
</script>
