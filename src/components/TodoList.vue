<template>
  <v-list>
    <todo-item v-for="todo in limitedList" :key="todo.id" :todo="todo" :readonly="readonly" />
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
    readonly: Boolean,
    items: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
  },
  setup(props) {
    const limitedList = computed(() => {
      if (props.limit <= 0) return props.items;
      return props.items.slice(0, props.limit);
    });

    return { limitedList };
  },
});
</script>
