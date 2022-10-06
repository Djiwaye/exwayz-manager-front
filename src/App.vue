<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="primary" dark flat>
        <span class="hidden-lg-and-up">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </span>

        <v-toolbar-title>{{ $t($route.meta.title) }}</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer app v-model="drawer">
        <NavBar />
      </v-navigation-drawer>

      <v-main class="mb-2">
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app>
        <div>
          {{ $t('common.Footer.copyrights', { year: new Date().getFullYear() }) }}
          - <router-link :to="{ name: 'TermsOfUse' }">{{ $t('common.Footer.termsLabel') }}</router-link> -
          <router-link :to="{ name: 'PrivacyPolicy' }">{{ $t('common.Footer.privacyLabel') }}</router-link>
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/unique/NavBar.vue';

@Component({
  components: { NavBar }
})
export default class App extends Vue {
  protected drawer: boolean | null = null;
}
</script>

<style lang="scss"></style>
