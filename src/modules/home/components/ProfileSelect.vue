<template>
  <v-card>
    <v-card-title>{{ $t('home.ProfileSelect.cardTitle') }}</v-card-title>
    <v-card-text>
      <v-sheet elevation="2" class="mt-4 pa-2">
        <div
          v-for="(item, index) in currentProfiles"
          class="text-body-1"
          :key="index">
          {{ item.algo }} - {{ item.value }}
        </div>
      </v-sheet>
      <v-sheet elevation="2" class="mt-4 pa-2">
        <ProfileEntry
          v-for="(item, index) in allProfiles"
          class="mt-2"
          :key="index"
          :name="item.algo"
          :options="item.values"
          @input="onSetProfile"
        />
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ProfileOptions } from '@/modules/home/models/dto/profileOptions';
import { ProfileCurrent } from '@/modules/home/models/dto/profileCurrent';
 import * as CommandsService from '@/modules/home/services/commands';
import * as StatusService from '@/modules/home/services/status';
import ProfileEntry from '@/modules/home/components/ProfileEntry.vue';

@Component({
  components: { ProfileEntry }
})
export default class ProfileSelect extends Vue {
  protected allProfiles: ProfileOptions[] = [];
  protected currentProfiles: ProfileCurrent[] = [];

  protected mounted(): void {
    StatusService.allProfiles().then((res) => {
      this.allProfiles = res.data;
    });

    this.reloadCurrentProfiles();
  }

  protected reloadCurrentProfiles(): void {
    StatusService.currentProfiles().then((res) => {
      this.currentProfiles = res.data;
    });
  }

  protected onSetProfile(newProfile: { name: string; value: string }): void {
    CommandsService.setProfile(newProfile.name, newProfile.value);
    setTimeout(this.reloadCurrentProfiles, 1000);
  }
}
</script>

<style scoped lang="scss"></style>
