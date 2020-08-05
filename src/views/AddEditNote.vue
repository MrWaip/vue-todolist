<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            Создать новую заметку
            <v-spacer />

            <v-icon class="mr-3" :disabled="logIndex <= 0" color="primary" @click="rollback">
              mdi-history
            </v-icon>

            <v-icon :disabled="logIndex == logStack.length - 1" color="primary" @click="forward">
              mdi-update
            </v-icon>
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="note.title"
                label="Заголовок"
                outlined
                :rules="[rules.required]"
                @blur="onBlurNoteTitle"
              />
            </v-form>
            <div class="d-flex justify-space-between align-center pt-3">
              <div class="body-1">
                Список дел
              </div>
              <v-btn color="primary" @click="onClickAddTodo">
                <div>
                  Новая задача
                </div>
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-btn>
            </div>
            <todo-list
              :items="note.todoList"
              edit
              @delete="onDeleteTodo"
              @change="onChange"
              style="max-height: 400px; overflow-y: auto"
            />
          </v-card-text>
          <v-card-actions>
            <v-btn v-if="id" color="error" class="mr-3" text @click="onClickDeleteNote">
              Удалить
            </v-btn>
            <v-spacer />
            <v-btn color="accent" class="mr-3" outlined text @click="onClickCancelEdit">
              Отмена
            </v-btn>
            <v-btn color="primary" @click="onClickSave">
              Сохранить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <ConfirmDialog ref="dialog" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useRouter } from '@/hooks/useRouter';
import { useNotes } from '@/hooks/useNotes';
import TodoList from '@/components/TodoList.vue';
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import { Note } from '@/types';

type Form = {
  validate: () => boolean;
};

type ConfirmDialogType = {
  confirm: (title: string, message: string) => Promise<boolean>;
};

export default defineComponent({
  components: { TodoList, ConfirmDialog },
  setup() {
    const form = ref<Form | null>(null);
    const dialog = ref<ConfirmDialogType | null>(null);
    const { route, router } = useRouter();
    const { addNote, findNote, noteFactory, updateNote, deleteNote } = useNotes();
    const id: number = parseInt(route.value.params.id);
    const rules = {
      required: (value: string) => !!value || 'Обязательное поле',
    };

    const logIndex = ref(-1);
    const logStack = ref<Note[]>([]);
    const note = ref(id ? findNote(id) ?? noteFactory() : noteFactory());

    const addLog = (note: Note) => {
      const copy = JSON.parse(JSON.stringify(note));
      if (logStack.value[logIndex.value + 1]) {
        logStack.value.splice(logIndex.value + 1, logStack.value.length - logIndex.value + 1, copy);
      } else {
        logStack.value.push(copy);
      }

      logIndex.value++;
    };

    addLog(note.value);

    const rollback = () => {
      logIndex.value--;
      note.value = JSON.parse(JSON.stringify(logStack.value[logIndex.value]));
    };

    const forward = () => {
      logIndex.value++;
      note.value = JSON.parse(JSON.stringify(logStack.value[logIndex.value]));
    };

    const onClickSave = () => {
      if (!form.value) return;
      if (!form.value.validate()) return;

      id ? updateNote(note.value) : addNote(note.value);
      router.push('/');
    };

    const onClickAddTodo = () => {
      note.value.todoList.push({
        id: Math.round(Math.random() * 999999),
        completed: false,
        title: '',
      });

      addLog(note.value);
    };

    const onBlurNoteTitle = () => {
      addLog(note.value);
    };

    const onChange = () => {
      addLog(note.value);
    };

    const onDeleteTodo = (id: number) => {
      const index = note.value.todoList.findIndex(i => i.id == id);
      note.value.todoList.splice(index, 1);
      addLog(note.value);
    };

    const onClickDeleteNote = async () => {
      if (!dialog.value) return;
      if (await dialog.value.confirm('Удаление записи', 'Вы действительно хотите удалить эту заметку?')) {
        deleteNote(note.value.id);
        router.push('/');
      }
    };

    const onClickCancelEdit = async () => {
      if (!dialog.value) return;
      if (await dialog.value.confirm('Отмена изменений', 'Вы дейстивтельно хотите отменить все изменения?')) {
        router.push('/');
      }
    };

    return {
      id,
      note,
      rules,
      form,
      onClickSave,
      onClickAddTodo,
      onDeleteTodo,
      onClickDeleteNote,
      dialog,
      onClickCancelEdit,
      rollback,
      forward,
      logStack,
      onBlurNoteTitle,
      logIndex,
      onChange,
    };
  },
});
</script>
