<template>
  <v-card height="100%" class="d-flex flex-column">
    <v-card-title>
      {{ note.title }}
    </v-card-title>
    <v-card-text>
      <div class="body-1">
        Список дел
      </div>
      <todo-list :items="note.todoList" :readonly="readonly" :limit="3" />
    </v-card-text>
    <v-spacer />
    <v-card-actions>
      <v-btn color="error" text @click="onClickDelete">
        Удалить
      </v-btn>
      <v-spacer />
      <v-btn color="primary" :to="{ name: 'EditNote', params: { id: note.id } }">
        Редактировать
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Note } from '@/types';
import TodoList from '@/components/TodoList.vue';

export default defineComponent({
  components: { TodoList },
  props: {
    readonly: Boolean,
    note: {
      type: Object as PropType<Note>,
      required: true,
    },
  },
  setup(props, ctx) {
    const onClickDelete = () => {
      ctx.emit('delete', props.note.id);
    };

    return { onClickDelete };
  },
});
</script>
