<template>
  <v-card>
    <v-card-title>{{ $t('home.ProfileSelect.cardTitle') }}</v-card-title>
    <v-card-text>
      <v-sheet elevation="2" class="mt-4 pa-2"> TODO: list current presets here </v-sheet>
      <v-sheet elevation="2" class="mt-4 pa-2">
        <ProfileEntry
          v-for="(item, index) in availableProfilesOptions"
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
 import * as CommandsService from '@/modules/home/services/commands';
import * as StatusService from '@/modules/home/services/status';
import ProfileEntry from '@/modules/home/components/ProfileEntry.vue';

@Component({
  components: { ProfileEntry }
})
export default class ProfileSelect extends Vue {
  protected availableProfilesOptions: ProfileOptions[] = [];

  protected mounted(): void {
    StatusService.availableProfilesOptions().then((res) => {
      this.availableProfilesOptions = res.data;
    });
  }

  protected onSetProfile(newProfile: { name: string; value: string }): void {
    CommandsService.setProfile(newProfile.name, newProfile.value);
    console.log(newProfile);
  }
}
</script>

<style scoped lang="scss"></style>
