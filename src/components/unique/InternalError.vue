<template>
  <div class="wrapper">
    <div class="wrapper__page">
      <div class="wrapper__text">
        <h1 class="title">{{ $t('common.InternalError.title') }}</h1>
        <div class="wrapper__text-paragraph paragraph">
          {{ $t(errorMessage) }}
        </div>
        <v-btn class="wrapper__text-cta" @click="() => redirectHome()">
          {{ $t('common.InternalError.cta') }}
        </v-btn>
      </div>
      <div class="wrapper__image">
        <img class="image" src="@/assets/images/pictures/404.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class InternalError extends Vue {
  @Prop()
  private error!: Error;

  protected redirectHome(): void {
    window.location.href = '/';
  }

  protected get errorMessage(): string {
    return `common.InternalError.${this.error?.message}`;
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  &__page {
    display: flex;
    justify-content: space-between;
    max-width: $container;
    width: 100%;
    margin: 0 auto;

    @media (max-width: $width_L) {
      padding: 0px 50px;
    }

    @media (max-width: $width_S) {
      display: block;
      width: 100%;
    }
  }

  &__text {
    max-width: 300px;
    margin-top: 150px;

    @media (max-width: $width_S) {
      margin: 50px auto 0;
    }

    &-paragraph {
      margin-top: 30px;
    }

    &-cta {
      margin-top: 30px;
      width: max-content;

      @media (max-width: $width_S) {
        margin: 30px auto 0;
      }
    }
  }

  &__image {
    margin-top: 100px;
    margin-left: 50px;

    @media (max-width: $width_XS) {
      margin: 50px auto;
    }

    & > img {
      margin-top: 50px;
      @media (max-width: $width_L) {
        margin-top: 30px;
      }

      @media (max-width: $width_S) {
        margin: 0 auto;
        transform: unset;
      }
    }
  }
}

.title {
  font-family: $font-bold;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: $aquamarine;

  @media (max-width: $width_S) {
    text-align: center;
  }

  @media (max-width: $width_XS) {
    font-size: 35px;
  }
}

.paragraph {
  font-family: $font-regular;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: $black;

  @media (max-width: $width_S) {
    text-align: center;
  }
}

.image {
  width: 100%;
  max-width: 625px;
  height: auto;
}
</style>
