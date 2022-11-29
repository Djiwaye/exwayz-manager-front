<template>
  <v-sheet class="pa-2 d-flex">
    <div class="text-body-1">{{ name }}</div>
    <v-btn :disabled="disabled" @click="$emit('load', name)" x-small class="ml-2">
      {{ $t('common.actions.load.label') }}
    </v-btn>
    <v-btn :disabled="disabled" color="error" @click="$emit('delete', name)" x-small class="ml-2">
      {{ $t('common.actions.delete.label') }}
    </v-btn>
    <v-btn :disabled="disabled" @click="$emit('visualize', name)" x-small class="ml-2">
      {{ $t('common.actions.visualize.label') }}
    </v-btn>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class MapEntry extends Vue {
  @Prop({ required: true })
  protected disabled!: boolean;
  @Prop({ required: true })
  protected name!: string;
}
</script>

<style scoped lang="scss"></style>
