import { defineStore } from 'pinia';
import { metadata } from '../metadata/metadata.const.js';
import { MetadataModel } from '../models/metadata.model';

export interface MetadataState {
  metadata: MetadataModel[],
  selectedOptions: number[]; 
}

export const useMetadataStore = defineStore({
  id: 'Metadata Store',
  state: (): MetadataState => ({
    metadata: metadata,
    selectedOptions: []
  }),
  getters: {},
  actions: {
    setSelectedOptions(options: Number[]) {
      this.selectedOptions = options;
    }
  }
});
