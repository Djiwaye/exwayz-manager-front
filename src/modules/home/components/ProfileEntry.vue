<template>
  <v-sheet class="pr-2 d-flex">
    <div
      class="profile-name d-flex align-center text-body-1">
        {{ name }}
    </div>
    <v-select
      class="mt-0"
      @input="onInput"
      :items="options"
      dense
      hide-details
      :label="$t('home.ProfileEntry.selectLabel')"
    ></v-select>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class ProfileEntry extends Vue {
  @Prop({ required: true })
  protected name!: string;
  @Prop({ required: true })
  protected options!: string[];

  protected onInput(value: string): void {
    const newProfile = { name: this.name, value };
    this.$emit('input', newProfile);
  }
}
</script>

<style scoped lang="scss">
.profile-name {
  width: 100px;
}
</style>
