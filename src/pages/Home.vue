<template>
  <div style="margin-bottom:120px">
    <app-header />
    <div class="location">
      <span>home</span>
      <span>/</span>
      <span>{{$route.name}}</span>
      </div>
    <div class="content">
      <aside class="sidebar">
        <ul>
          <li v-for="item in sidebarItems" :key="item.name" @click="navigation(item.route)" :class="item.isActive ? 'router-link-active' : ''">{{item.name}}</li>
        </ul>
      </aside>

      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebarItems',
      'footerLinks',
      'legalInfos',
      ])
  },
  methods: {
    navigation(route) {
      this.$router.push(route);
      this.sidebarItems.forEach(el => {
        if (el.route == route) {
          el.isActive = true;
        } else {
          el.isActive = false;
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import './../styles/variables';

.location {
  color: #999;
  font-size: 0.7rem;
  text-transform: uppercase;
  span {
    margin: 0 5px;
  }
}
.content, .location {
  margin: 0 auto;
  padding: 10px 0;
  width: 70%;
  height: 100%;
  display: flex;
  .sidebar {
    cursor: pointer;
    flex: 2;
    ul {
      list-style: none;
      padding: 0;
      margin-top: 0;
      li {
        background-color: #FFF;
        color: $navLight;
        padding: 25px;
        padding-left: 10px;
        font-size: 0.8rem;
        font-weight: 700;
        text-align: left;
        border-radius: 2px;
        border: 1px solid lighten($color: $navLight, $amount: 30);
        &:not(:first-child) {
          border-top: 0;
        }
      }
    }
  }
  .main-content {
    padding: 20px;
    padding-top: 0;
    flex: 8;
  }
}

.router-link-active {
  border-left: 2px solid $nav !important;
}
</style>
