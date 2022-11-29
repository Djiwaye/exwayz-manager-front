<template>
  <v-card>
    <v-card-title>{{ $t('home.ProfileSetting.cardTitle') }}</v-card-title>
    <v-card-text>
      <v-sheet elevation="2" class="mt-4 pa-2">
        <ProfileEntry v-for="(item, index) in profiles"
          :key="index"
          :state="item.state"
          :profile="item.profile"
          @set="onSetProfile" />
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as CommandsService from '@/modules/home/services/commands';
import * as StatusService from '@/modules/home/services/status';
import ProfileEntry from '@/modules/home/components/ProfileEntry.vue';

export interface Profile {
  state: string;
  profile: string;
}

@Component({
  components: { ProfileEntry }
})
export default class ProfileSetting extends Vue {
  protected profiles: Profile[] = [];
  protected statesFiles: string[] = [];
  protected profilesFiles: string[] = [];

  protected mounted(): void {
    this.reloadStates();
    this.reloadProfiles();
    for (var index in this.statesFiles) {
      let prof: Profile = {state: this.statesFiles[index], profile: this.profilesFiles[index]};
      this.profiles.push(prof);
    }
  }

  protected onSetProfile(state: string, profile: string): void {
    CommandsService.setProfile(state, profile);
    setTimeout(this.mounted, 1000);
  }

  protected reloadStates(): void {
    StatusService.availableStates().then((response) => (this.statesFiles = response.data));
  }

  protected reloadProfiles(): void {
    StatusService.availableProfiles().then((response) => (this.profilesFiles = response.data));
  }
}
</script>

<style scoped lang="scss"></style>
