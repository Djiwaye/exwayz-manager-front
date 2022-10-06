<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> {{ $t('common.AppName') }} </v-list-item-title>
        <v-list-item-subtitle> Anonymous </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list nav>
      <!-- NAVIGATION ITEMS ITERATION -->
      <div v-for="item in items" :key="item.title">
        <!-- IF ITEM WITH SUBGROUP -->
        <v-list-group
          v-if="item.children && item.children.length > 0"
          v-model="item.expand"
          :prepend-icon="$t(`common.icons.${item.icon}`)"
        >
          <template v-slot:activator>
            <v-list-item-title>
              <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
            </v-list-item-title>
          </template>

          <v-list-item v-for="(subItem, i) in item.children" :key="i" link exact :to="{ name: subItem.routeName }">
            <v-list-item-content>
              <v-list-item-title>{{ $t(subItem.title) }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>{{ $t(`common.icons.${subItem.icon}`) }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <!-- ELSE SOLO ITEM -->
        <v-list-item v-else active-class="link-active" link exact :to="{ name: item.routeName }">
          <v-list-item-icon>
            <v-icon>{{ $t(`common.icons.${item.icon}`) }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface MenuItem {
  title: string;
  icon: string;
  routeName?: string;
  expand?: boolean;
  children?: MenuItem[];
}

@Component({
  components: {}
})
export default class NavBar extends Vue {
  protected items: MenuItem[] = [];

  protected created(): void {
    this.items.push({ title: 'common.NavBar.homeLabel', icon: 'home', routeName: 'LandingPage' });
  }
}
</script>

<style scoped lang="scss">
.bottom {
  position: absolute;
  bottom: 0;
}
.full-width {
  right: 8px;
  left: 8px;
}
.link-active {
  color: var(--v-primary-base) !important;
}
</style>
