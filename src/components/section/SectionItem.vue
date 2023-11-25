<template>
    <q-item class="section-box column">
        <div class="full-width row section-title-box">
            <p class="section-title">{{ section?.title }}</p>
        </div>
        <div class="full-width section-body"></div>
    </q-item>
</template>
  
<script lang="ts">
import { Section } from 'src/models';
import { useStore } from 'src/store';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const store = useStore()

        return { store }
    },
    methods: {

    },
    props: {
        section: Object as () => Section
    }
});
</script>
  

<style scoped>
.section-box {
    width: 330px;
    border: 1px solid transparent;
    padding: 10px;
    pointer-events: none;
    transition: all 0.5s ease;
}

.section-title-box {
    pointer-events: auto;
    cursor: pointer;
}

.section-box:hover {
    border: 1px solid rgba(128, 128, 128, 0.493);
    border-radius: 6px;
}

.section-body {
    min-height: 740px;
    background: #f4f3f3b7;
    margin-top: 10px;
    border-radius: 5px;
}
</style>