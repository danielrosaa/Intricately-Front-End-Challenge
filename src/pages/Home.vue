<template>
  <div>
    <nav>
      <ul>
        <li>
          <img src="/assets/images/Company Page/logo-pink.png" alt='Logo' />
        </li>
        <li>
          <div>
            <input type="text" name="search" id="search" placeholder="Search Companies" v-model="searchValue" />
            <fa-icon v-if="searchValue == ''" class="icon" icon="search"></fa-icon>
          </div>
          <div>OR</div>
          <div class="nav-list btn">NEWS SMARTLIST</div>
          <div class="nav-list dropdown">
            PROSPECT
            <fa-icon icon="angle-down"></fa-icon>
          </div>
          <div class="nav-list dropdown">
            ALERT
            <fa-icon icon="angle-down"></fa-icon>
          </div>
          <div class="nav-list dropdown">
            LEARN
            <fa-icon icon="angle-down"></fa-icon>
          </div>
        </li>
        <li class="right-side">
          <img src="/assets/images/Company Page/default.png" alt='Chrome Icon' />
          <img src="/assets/images/Company Page/group-copy.png" alt='User avatar' />
          <fa-icon icon="angle-down"></fa-icon>
        </li>
      </ul>
    </nav>
    <div class="location">
      <span>home</span>
      <span>/</span>
      <span>company page</span>
      </div>
    <div class="content">
      <aside class="sidebar">
        <ul>
          <li v-for="item in sidebarItems" :key="item.name"><router-link tag="a" :to="item.route">{{item.name}}</router-link></li>
        </ul>
      </aside>

      <div class="main-content">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
      sidebarItems: [
        {name: 'COMPANY DATA', route: '/companydata'},
        {name: 'COMPANY TABLE', route: ''},
        {name: 'COMPANY PAGE', route: '/companypage'}
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import './../styles/variables';

input[type='text']::placeholder {
  position: relative;
  left: 25px;
  color: #FFF;
  font-size: 0.9rem;
}
.icon {
  position: relative;
  left: -180px;
}

.right-side {
  img {
    margin: 0 5px;
  }
}
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
</style>
