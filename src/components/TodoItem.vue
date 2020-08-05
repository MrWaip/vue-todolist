<template>
  <v-list-item class="pt-3">
    <v-list-item-action>
      <v-checkbox v-model="todo.completed" :readonly="readonly" hide-details @change="change" />
    </v-list-item-action>
    <v-list-item-content class="mr-3">
      <v-text-field
        v-if="edit"
        label="Задача"
        hide-details
        outlined
        dense
        v-model="todo.title"
        @change="change"
      />
      <v-list-item-title v-else>
        {{ todo.title }}
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action v-if="edit">
      <v-btn icon color="error" @click="onClickDelete">
        <v-icon>
          mdi-delete
        </v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Todo } from '@/types';

export default defineComponent({
  props: {
    readonly: Boolean,
    edit: Boolean,
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  setup(props, ctx) {
    const onClickDelete = () => {
      ctx.emit('delete', props.todo.id);
    };

    const change = () => {
      ctx.emit('change');
    };

    return { onClickDelete, change };
  },
});
</script>
