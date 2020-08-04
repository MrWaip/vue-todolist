<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            Создать новую заметку
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field v-model="note.title" label="Заголовок" outlined :rules="[rules.required]" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="error" text>
              Отмена
            </v-btn>
            <v-spacer />
            <v-btn color="primary" @click="onClickSave">
              Сохранить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api';
import { useRouter } from '@/hooks/useRouter';
import { useNotes } from '@/hooks/useNotes';
import { Note } from '@/types';

type Form = {
  validate: () => boolean;
};

export default defineComponent({
  setup() {
    const form = ref<Form | null>(null);
    const { route, router } = useRouter();
    const { addNote } = useNotes();
    const id: number = parseInt(route.value.params.id);
    const rules = {
      required: (value: string) => !!value || 'Обязательное поле',
    };

    const note = reactive<Note>({
      id: Math.round(Math.random() * 999999),
      todoList: [],
      title: '',
    });

    const onClickSave = () => {
      if (!form.value) return;
      if (!form.value.validate()) return;
      addNote(note);
      router.push('/');
    };

    return { id, note, rules, form, onClickSave };
  },
});
</script>

<style></style>
