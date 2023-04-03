<template>
  <v-card>
    <v-card-title>{{ $t('home.MapSelect.cardTitle') }}</v-card-title>
    <v-card-text>
      <div class="d-flex align-end">
        <v-text-field
          :disabled="!isIdle()"
          v-model="inputMapName"
          :label="$t('home.MapSelect.newMapLabel')"
          hide-details
        ></v-text-field>
        <v-btn
          width="150"
          v-show="currentManagerState !== 'RECORD'"
          :loading="waitingForManagerState === 'RECORD'"
          :disabled="!isIdle()"
          @click="startMap"
          class="ml-4"
          color="primary"
        >
          {{ $t('home.MapSelect.startMap') }}
        </v-btn>
        <v-btn
          width="150"
          v-show="currentManagerState === 'RECORD'"
          :loading="waitingForManagerState === 'IDLE'"
          @click="stopMap"
          class="ml-4"
          color="accent"
          >{{ $t('home.MapSelect.stopMap') }}</v-btn
        >
      </div>
      <v-checkbox v-model="visParam" :label="$t('home.MapSelect.checkboxVis')" />
      <div style="height: 40px">
        <div class="error--text" v-show="displayStartMapError">{{ $t('home.MapSelect.startMapError') }}</div>
      </div>
      <SelectedMap :disabled="!isIdle()" />
      <v-sheet elevation="2" class="mt-4 pa-2">
        <MapEntry
          :disabled="!isIdle()"
          v-for="(map, index) in mapFiles"
          :key="index"
          :name="map"
          @load="onMapLoad"
          @delete="onMapDelete"
        />
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation, Action } from 'vuex-class';
import * as StatusService from '@/modules/home/services/status';
import * as CommandsService from '@/modules/home/services/commands';
import MapEntry from '@/modules/home/components/MapEntry.vue';
import SelectedMap from '@/modules/home/components/SelectedMap.vue';

@Component({
  components: { MapEntry, SelectedMap }
})
export default class MapSelect extends Vue {
  @State((state) => state.home.currentManagerState)
  protected currentManagerState?: string;
  @State((state) => state.home.waitingForManagerState)
  protected waitingForManagerState?: string | null;
  @Mutation('home/setSelectedMap')
  protected setSelectedMap!: (value: string | null) => void;
  @Action('home/waitForState')
  protected waitForState!: (waitingState: string) => Promise<void>;
  protected mapFiles: string[] = [];
  protected inputMapName = '';
  protected displayStartMapError = false;
  protected visParam = false;

  protected mounted(): void {
    this.reloadMaps();
  }

  protected startMap(): void {
    this.displayStartMapError = false;
    if (this.inputMapName.length > 0) {
      CommandsService.startMap(this.inputMapName, this.visParam ? 'true' : 'false').catch(() => (this.displayStartMapError = true));
      this.waitForState('RECORD');
    } else {
      this.displayStartMapError = true;
    }
  }

  protected stopMap(): void {
    CommandsService.stopMap();
    this.waitForState('IDLE').finally(this.reloadMaps);
  }

  protected onMapLoad(value: string): void {
    CommandsService.mapLoad(value).then(() => {
      this.setSelectedMap(value);
    });
    this.waitForState('RELOC_READY');
  }

  protected onMapDelete(value: string): void {
    CommandsService.mapDelete(value);
    setTimeout(this.reloadMaps, 1000);
  }

  protected reloadMaps(): void {
    StatusService.availableMaps().then((response) => (this.mapFiles = response.data));
  }

  protected isIdle(): boolean {
    if (
      (this.currentManagerState === 'IDLE' || this.currentManagerState === 'RELOC_READY') &&
      this.waitingForManagerState === null
    ) {
      return true;
    }
    return false;
  }
}
</script>

<style scoped lang="scss"></style>
