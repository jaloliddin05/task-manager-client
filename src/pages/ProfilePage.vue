<template>
  <q-page>
    <div>
      <h4 class="q-ma-none">Welcome <span class="text-positive">{{ " " + user?.firstName + " " + user?.lastName }}</span>
      </h4>
    </div>
  </q-page>
</template>

<script lang="ts">
import { User } from 'src/models';
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({

  computed: {
    ...mapState({
      user: (state: any) => state.user.user as User
    })
  }
});
</script>
