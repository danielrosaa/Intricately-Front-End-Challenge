<template>
    <footer>
      <div class="footer-content">
        <div class="row">
          <ul>
            <li v-for="item in footerLinks" :key="item.name">{{item.name}}</li>
          </ul>
          <ul>
            <li v-for="item in legalInfos" :key="item.name">{{item.name}}</li>
          </ul>
        </div>
        <div class="row">
          <div>&copy; Copyright 2019, Intricately, Inc. All Rights Reserved.</div>
          <div>
            <img src="/assets/images/Company Page/fill-118.png" alt="LinkedIn Icon">
            <img src="/assets/images/Company Page/fill-92.png" alt="Facebook Icon">
            <img src="/assets/images/Company Page/fill-93.png" alt="Twiiter Icon">
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'footerLinks',
            'legalInfos',
        ])
    }
}
</script>