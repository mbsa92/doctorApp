<template>
    <v-card color="grey-lighten-3">
      <v-container>
        <v-row>
            <v-col cols="4">
                <v-select
                    label="Select"
                    :items="metadata"
                    item-title="trial_number"
                    item-value="id"
                    v-model="selected"
                    multiple
                    clearable
                    chips
                    variant="outlined"
                    class="select-wrapper"
                />
            </v-col>
        </v-row>
      </v-container>
    </v-card>
  </template>
  <script lang="ts" setup>
  import { ref, watch } from "vue";
  import { StandardEmitEvent } from "../enums/standardEmitEvent.enum";
  import { useMetadataStore } from '../stores/metadata'
  import { MetadataModel } from '../models/metadata.model';

  const emit = defineEmits([StandardEmitEvent.CLICK, StandardEmitEvent.CLEAR]);
  const metadataStore = useMetadataStore()
  const metadata = ref<MetadataModel[]>(metadataStore.metadata);
  const selected = ref(metadataStore.selectedOptions)

  watch(
      () => selected,
      () => {
        metadataStore.setSelectedOptions(selected.value);
      },
      {deep: true} // need to use deep because it is watching a reative variable
  );
</script>
<style lang="scss" scoped>
@import '../styles/components/_selectDoctor.scss';
</style>
  