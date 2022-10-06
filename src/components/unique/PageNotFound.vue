<template>
  <div>
    <div>
      <v-container>
        <v-row class="text-center">
          <v-card-text class="display-3 font-weight-bold">
            <label>{{ $t('common.PageNotFound.title') }}</label>
          </v-card-text>
        </v-row>
        <v-row>
          <v-col md="4">
            <v-row class="pt-13 mt-5">
              <v-card class="text-left" elevation="3" outlined>
                <v-card-title>
                  <v-icon large color="primary">mdi-alert-circle</v-icon>
                  <h1 class="title font-italic">{{ $t('common.PageNotFound.error') }}</h1>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="text-h6 pt-13">
                  <label>{{ $t('common.PageNotFound.paragraph') }}</label>
                </v-card-text>
                <v-card-actions class="py-11 pl-16 ml-12">
                  <v-btn @click="() => $router.push({ name: 'Home' })">
                    <v-icon dark> mdi-home </v-icon>
                    {{ $t('common.PageNotFound.cta') }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-row>
          </v-col>
          <v-col>
            <v-img width="600" height="auto" :src="require(`@/assets/images/pictures/404.png`)" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class PageNotFound extends Vue {}
</script>
