<template>
    <q-card style="max-width: 650px;min-height: 500px;" class="col-6 card-item">
        <div class="row full-width items-stretch">
            <div class="q-pt-md q-pl-lg q-pb-md col-2">
                <q-avatar color="primary" text-color="white">J</q-avatar>
            </div>
            <div class="column items-start col-10">
                <div class="row q-mt-lg items-center">
                    <h6 class="card-heading">My Tasks</h6>
                    <q-icon name="lock" />
                </div>
                <q-tabs v-model="tab" dense class="text-grey" active-color="dark" indicator-color="dark">
                    <q-tab name="mails" label="Upcaming" />
                    <q-tab name="alarms" label="Overdue" />
                    <q-tab name="movies" label="Completed" />
                </q-tabs>
            </div>
        </div>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="q-pa-md">
            <q-tab-panel name="mails" class="q-pa-none">
                <div class="text-h6">Alarms</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="alarms">
                <div class="text-h6">Alarms</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
        </q-tab-panels>
    </q-card>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        return {
            tab: ref('mails'),
            innerTab: ref('innerMails'),
            splitterModel: ref(20)
        }
    }
});
</script>
  