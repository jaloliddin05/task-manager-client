<template>
    <q-item class="section-box column">
        <div class="full-width row">
            <input class="section-input" v-model="text" type="text" placeholder="+ Add section" @blur="create" />
        </div>
        <div class="full-width section-body"></div>
    </q-item>
</template>
  
<script lang="ts">
import { useStore } from 'src/store';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const store = useStore()

        return {
            store,
            text: ref('')
        }
    },
    methods: {
        async create() {
            if (this.text) {
                await this.store.dispatch('section/create', {
                    title: this.text,
                    index: this.index,
                    project: this.project
                })
            }
        }
    },
    props: {
        index: Number,
        project: String
    }
});
</script>
  

<style scoped>
.section-box {
    width: 330px;
}

.section-box:hover .section-body,
.section-box:hover .section-input {
    background-color: #F4F3F3;
    cursor: pointer;
}

.section-body {
    min-height: 740px;
    background: #f4f3f3b7;
    margin-top: 10px;
    border-radius: 5px;
}

.section-input {
    width: 100%;
    border: none;
    outline-color: rgba(128, 128, 128, 0.521);
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
}
</style>