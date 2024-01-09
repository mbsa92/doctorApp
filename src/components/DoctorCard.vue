<template>
<v-container>
    <div class="d-flex flex-wrap ga-3">
        <v-card v-for="element in selectedMetadata" :key="element.id" max-width="400" class="m-2">
            <v-card-item :title="element?.primary_investigator">
                <template v-slot:subtitle>
                Trial number: {{ element.trial_number }}
                </template>
            </v-card-item>
            <v-card-text class="py-0">
                <v-list-item density="compact" prepend-icon="mdi-phone-classic">
                    <v-list-item-subtitle
                        >{{ element.site_phone }}</v-list-item-subtitle
                    >
                </v-list-item>

                <v-list-item density="compact" prepend-icon="mdi-at">
                    <v-list-item-subtitle>
                       {{ element.site_email }}
                    </v-list-item-subtitle>
                </v-list-item>

                <v-list-item density="compact" prepend-icon="mdi-map-marker-outline">
                    <v-list-item-subtitle>
                        {{ element.site_address}}, {{ element.site_city }}, {{ element.site_state }}, {{ element.site_country }}
                    </v-list-item-subtitle>
                </v-list-item>
            </v-card-text>
        </v-card>    
    </div>
  </v-container>
</template>
<script lang="ts" setup>
import { ref, watch, computed } from "vue";
import { StandardEmitEvent } from "../enums/standardEmitEvent.enum";
import { useMetadataStore } from '../stores/metadata'
import { MetadataModel } from '../models/metadata.model';

const emit = defineEmits([StandardEmitEvent.CLICK, StandardEmitEvent.CLEAR]);
const metadataStore = useMetadataStore()
const metadata = ref<MetadataModel[]>(metadataStore.metadata);
const selected = computed(() => metadataStore.selectedOptions);
const selectedMetadata = ref<MetadataModel[] | undefined>([]);

watch(
      () => selected,
      () => {
        const updatedSelectedMetadata: MetadataModel[] = [];

        selected.value.forEach(id => {
            let foundMetadataObject = metadata.value.find(item => item.id === id);
            if (foundMetadataObject) {
                updatedSelectedMetadata.push(foundMetadataObject);
            }
        });
        selectedMetadata.value = updatedSelectedMetadata;
    },
    {deep: true}
  );

</script>
<style lang="scss" scoped>
@import '../styles/components/_selectDoctor.scss';
</style>
