<template>
  <div class="sign-in-container">
    <q-form @submit.prevent="onSubmit" class="q-gutter-md sign-in-form">
      <q-input filled v-model="form.login" label="login" lazy-rules
        :rules="[val => val && val.length > 0 || 'Please type something']" />
      <q-input filled v-model="form.password" label="password" lazy-rules
        :rules="[val => val && val.length > 0 || 'Please type something']" />
      <div class="btn-box">
        <q-btn label="Sign In" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { mapActions } from 'vuex';
import { useStore } from 'src/store';
import { SignInDto } from 'src/models/user.model';

export default defineComponent({
  setup() {
    const store = useStore()
    const form: SignInDto = reactive({
      login: '',
      password: '',
    });

    return { store, form }
  },
  methods: {
    ...mapActions({
      signin: 'auth/signin',
    }),
    async onSubmit() {
      await this.signin(this.form)
    }
  }
})
</script>

<style scoped>
.sign-in-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign-in-form {
  width: 300px;
  height: 400px;
  padding: 20px;
  border: 2px solid rgba(128, 128, 128, 0.836);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.btn-box {
  margin-top: auto;
}
</style>