<template>
  <v-card>
    <v-card-title>{{ $t('home.RelocInit.cardTitle') }}</v-card-title>
    <v-card-text>
      <div class="d-flex align-end">
        <!--    definition Position 3D de départ -->
        <v-text-field label="X (m)" value="0" v-model="reloc_x" outlined></v-text-field>

        <v-text-field class="ml-5" label="Y (m)" value="0" v-model="reloc_y" outlined></v-text-field>

        <v-text-field class="ml-5" label="Z (m)" value="0" v-model="reloc_z" outlined></v-text-field>

        <v-text-field class="ml-5" label="Orientation (°)" value="0" v-model="reloc_angle" outlined></v-text-field>
        <v-col md="4">
          <!--    bouton pour valider la position de reloc  -->
          <v-btn width="150" class="mt-4" color="primary" @click="validate_init"> VALIDATE </v-btn>

          <v-btn width="150" class="mt-4" color="primary" @click="reset_init"> RESET </v-btn>
        </v-col>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as CommandsService from '@/modules/home/services/commands';

@Component({
  components: {}
})
export default class RelocInit extends Vue {
  protected reloc_x = '0';
  protected reloc_y = '0';
  protected reloc_z = '0';
  protected reloc_angle = '0';

  protected validate_init(): void {
    CommandsService.initReloc(this.reloc_x, this.reloc_y, this.reloc_z, this.reloc_angle);
  }

  protected reset_init(): void {
    this.reloc_x = '0';
    this.reloc_y = '0';
    this.reloc_z = '0';
    this.reloc_angle = '0';
  }
}
</script>

<style scoped lang="scss"></style>
