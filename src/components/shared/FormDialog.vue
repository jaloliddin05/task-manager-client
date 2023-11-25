<template>
    <div v-if="showDialog" class="dialog-box z-max">
        <div class="layout-shadow z-max" @click="closeDialog()"></div>
        <div class="form-dialog shadow-4 z-max">
            <div class="top-dialog">
                <q-btn round color="secondary" icon="close" @click="closeDialog()" />
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        showDialog: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeDialog() {
            this.$emit('changeDialogVisible', false)
        }
    }
})
</script>

<style scoped>
.dialog-box {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
}

.layout-shadow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(117, 116, 116, 0.24);
}

.form-dialog {
    padding: 0px 40px 40px;
    background-color: #fff;
    min-width: 350px;
}


.top-dialog {
    width: 100%;
    padding: 10px 0px;
    display: flex;
    justify-content: flex-end;
}
</style>