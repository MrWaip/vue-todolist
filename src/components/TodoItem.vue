<template>
  <v-list-item @click="onClickTodo">
    <v-list-item-content>
      <v-list-item-title>
        {{ todo.title }}
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action>
      <v-checkbox :value="todo.completed" readonly @click.stop="onClickTodo" />
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Todo } from '@/types';

export default defineComponent({
  props: {
    readonly: Boolean,
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  setup(props) {
    const onClickTodo = () => {
      if (props.readonly) return;
      props.todo.completed = !props.todo.completed;
    };

    return { onClickTodo };
  },
});
</script>
