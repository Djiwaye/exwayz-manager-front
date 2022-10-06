<template>
  <v-sheet elevation="2">
    <div class="pa-2 d-flex" :style="{ backgroundColor: getStateBackground() }">
      <div class="mr-auto ml-auto font-weight-bold" style="color: white">{{ currentManagerState }}</div>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import * as StatusService from '@/modules/home/services/status';

@Component({
  components: {}
})
export default class ManagerState extends Vue {
  @State((state) => state.home.currentManagerState)
  protected currentManagerState!: string;
  @Mutation('home/setCurrentManagerState')
  protected setCurrentManagerState!: (value: string) => void;

  protected mounted(): void {
    setInterval(() => {
      StatusService.getManagerState()
        .then((response) => {
          const managerState = response.data;
          if (managerState !== this.currentManagerState) {
            this.setCurrentManagerState(response.data);
          }
        })
        .catch(() => this.setCurrentManagerState('Internal server error'));
    }, 1000);
  }

  protected getStateBackground(): string {
    if (this.currentManagerState === 'UNKNOWN') {
      return 'var(--v-grey-base)';
    } else if (this.currentManagerState === 'IDLE' || this.currentManagerState === 'RELOC_READY') {
      return 'var(--v-primary-base)';
    } else if (this.currentManagerState === 'LOCALIZING' || this.currentManagerState === 'SLAM') {
      return 'var(--v-secondary-base)';
    } else if (this.currentManagerState === 'MAPPING') {
      return 'var(--v-secondary-base)';
    } else if (this.currentManagerState === 'SAVING_MAP') {
      return 'var(--v-accent-base)';
    }

    return 'var(--v-grey-base)';
  }
}
</script>

<style scoped lang="scss"></style>
