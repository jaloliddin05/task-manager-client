<template>
    <q-item clickable v-ripple class="p-item" @click="navigate">
        <q-item-section>
            <div class="row items-center">
                <q-btn padding="lg" push :color="color" />
                <span class="pr-title">{{ title }}</span>
            </div>
        </q-item-section>
    </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        color: String,
        title: String,
        id:String
    },
    methods:{
        navigate(){
            this.$router.push(`/project/${this.id}`)
        }
    }
})
</script>

<style scoped>
.p-item {
    border-radius: 6px;
}

.pr-title {
    margin-left: 25px;
}
</style>