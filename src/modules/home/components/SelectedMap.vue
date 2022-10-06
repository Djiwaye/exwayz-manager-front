<template>
  <v-sheet elevation="2" class="pa-4 selection-frame" :color="isSelectionActive() ? 'primary' : ''">
    <div class="text-body-1">
      <div v-show="!isSelectionActive()" class="text--secondary">{{ $t('home.SelectedMap.labelChoose') }}</div>
      <div v-show="isSelectionActive()" class="white--text">
        <div class="d-flex align-center">
          <span class="font-weight-bold">{{ $t('home.SelectedMap.labelChosen') }}:</span>
          <span class="ml-2">{{ selectedMap }}</span>
          <v-btn
            :disabled="disabled"
            :loading="waitingForManagerState === 'IDLE'"
            @click="clearMap"
            class="ml-2"
            color="accent"
            small
          >
            {{ $t('common.actions.clear.label') }}
          </v-btn>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Mutation, Action } from 'vuex-class';
import * as CommandsService from '@/modules/home/services/commands';

@Component({
  components: {}
})
export default class SelectedMap extends Vue {
  @Prop({ required: true })
  protected disabled!: boolean;
  @State((state) => state.home.currentManagerState)
  protected currentManagerState?: string;
  @State((state) => state.home.waitingForManagerState)
  protected waitingForManagerState?: string | null;
  @State((state) => state.home.selectedMap)
  protected selectedMap?: string;
  @Mutation('home/setSelectedMap')
  protected setSelectedMap!: (value: string | null) => void;
  @Action('home/waitForState')
  protected waitForState!: (waitingState: string) => Promise<void>;

  protected clearMap(): void {
    this.waitForState('IDLE');
    CommandsService.stopReloc().then(() => {
      setTimeout(() => {
        this.setSelectedMap(null);
      }, 1000);
    });
  }

  protected isSelectionActive(): boolean {
    return this.currentManagerState === 'RELOC_READY' || this.selectedMap !== null;
  }
}
</script>

<style scoped lang="scss">
.selection-frame {
  -webkit-transition: background-color 300ms ease-in-out;
  -ms-transition: background-color 300ms ease-in-out;
  transition: background-color 300ms ease-in-out;
}
</style>
