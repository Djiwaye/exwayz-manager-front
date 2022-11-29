<template>
  <v-sheet class="pa-2 d-flex">
    <div class="text-body-1">{{ state }}</div>
    <div class="text-body-2">{{ profile }}</div>
    <v-btn @click="$emit('set', state, profile)" x-small class="ml-2">
      {{ $t('common.actions.set.label') }}
    </v-btn>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class ProfileEntry extends Vue {
  @Prop({ required: true })
  protected state!: string;
  @Prop({ required: true })
  protected profile!: string;
}
</script>

<style scoped lang="scss"></style>
