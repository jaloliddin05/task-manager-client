<template>
  <q-page>
    <div class="column box">
      <div class="row">
        <div class="box-item">1</div>
        <div class="box-item">2</div>
        <div class="box-item">3</div>
      </div>
      <div class="row">
        <div class="box-item">4</div>
      </div>
      <div class="row">
        <div>
          <div class="box-item2">5</div>
          <div class="box-item2">6</div>
        </div>
        <div class="box-item3">7</div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.box-item {
  width: 100px;
  height: 40px;
  border: 2px solid black;
}

.box-item2 {
  width: 200px;
  height: 40px;
  border: 2px solid black;
}

.box-item3 {
  width: 100px;
  height: 80px;
  border: 2px solid black;
}

.box {
  width: 304px;
  border: 2px solid black;
}
</style>
