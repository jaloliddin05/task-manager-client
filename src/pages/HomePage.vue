<template>
  <div>Home</div>
  <HomeHeading />
  <div class="row justify-center q-gutter-md">
    <MyTasks />
    <MyProjects />
    <MyTeamTasks />
    <MyCollobrators />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyCollobrators from 'src/components/home/MyCollobrators.vue';
import MyTasks from 'src/components/home/MyTasks.vue';
import MyProjects from 'src/components/home/MyProjects.vue';
import MyTeamTasks from 'src/components/home/MyTeamTasks.vue';
import HomeHeading from 'src/components/home/HomeHeading.vue';

export default defineComponent({
  components: {
    HomeHeading,
    MyTasks,
    MyProjects,
    MyTeamTasks,
    MyCollobrators
  }
});
</script>


<style>
.card-item {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 8px;
}

.card-item:hover {
  cursor: grab;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
</style>