<template>
    <header>
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
    </header>
</template>

<script>
export default {
    data() {
        return {
            searchValue: '',
        }
    }
}
</script>

<style lang="scss" scoped>
input[type='text']::placeholder {
  position: relative;
  left: 25px;
  color: #FFF;
  font-size: 0.9rem;
}
.right-side {
  img {
    margin: 0 5px;
  }
}
.icon {
  position: relative;
  left: -170px;
}
</style>