<template>
  <v-dialog v-model="dialog" width="500px" persistent>
    <v-card>
      <v-toolbar dense elevation="0" title dark color="primary">
        <v-toolbar-title>
          {{ state.title }}
        </v-toolbar-title>
        <v-spacer />
        <v-icon @click="cancel">
          mdi-close
        </v-icon>
      </v-toolbar>
      <v-card-text class="pt-5">
        <div class="body-1">
          {{ state.message }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="accent" text @click="cancel">
          Нет
        </v-btn>
        <v-spacer />
        <v-btn color="primary" @click="agree">
          Да
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api';

type State = {
  title: string;
  message: string;
  resolve: ((value?: boolean) => void) | null;
  reject: ((value?: unknown) => void) | null;
};

export default defineComponent({
  setup() {
    const dialog = ref(false);

    const state = reactive<State>({
      title: '',
      message: '',
      resolve: null,
      reject: null,
    });

    const agree = () => {
      if (!state.resolve) return;
      state.resolve(true);
      dialog.value = false;
    };
    const cancel = () => {
      if (!state.resolve) return;
      state.resolve(false);
      dialog.value = false;
    };

    const confirm = (title: string, message: string) => {
      dialog.value = true;
      state.title = title;
      state.message = message;
      return new Promise<boolean>((resolve, reject) => {
        state.resolve = resolve;
        state.reject = reject;
      });
    };

    return { dialog, confirm, agree, cancel, state };
  },
});
</script>
