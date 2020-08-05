<template>
  <v-list>
    <todo-item
      v-for="todo in limitedList"
      :key="todo.id"
      :todo="todo"
      :readonly="readonly"
      :edit="edit"
      @delete="onDelete"
    />
    <v-alert border="left" type="info" text class="font-weight-bold mt-3" v-if="!limitedList.length">
      На сегодня задач нету
    </v-alert>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { Todo } from '@/types';
import TodoItem from '@/components/TodoItem.vue';

export default defineComponent({
  components: { TodoItem },
  props: {
    limit: {
      type: Number,
      default: -1,
    },
    edit: Boolean,
    readonly: Boolean,
    items: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
  },
  setup(props, ctx) {
    const limitedList = computed(() => {
      if (props.limit <= 0) return props.items;
      return props.items.slice(0, props.limit);
    });

    const onDelete = (id: number) => {
      ctx.emit('delete', id);
    };

    return { limitedList, onDelete };
  },
});
</script>
