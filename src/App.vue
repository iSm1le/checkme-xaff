<template>
  <div id="app">
    <router-view/>
    <hr>
    <footer
      id="footer"
      class="container-fluid py-2 bg-light absolute">
      <div class="row">
        <div class="col-6 col-md py-2">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li><a
              class="text-muted"
              href="https://github.com/iSm1le">Developer</a></li>
            <li><a
              class="text-muted"
              href="https://github.com/iSm1le/checkme-xaff/blob/production/LICENSE">License</a></li>
          </ul>
        </div>
        <div class="col-6 text-right col-md">
          <small class="d-block py-2 mb-2 text-muted">CheckME.XaFF &copy; 2018</small>
          <small class="d-block text-muted"><b>Version: </b>{{ appVer }}</small>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { version } from '../package.json';

export default {
  name: 'App',
  computed: {
    appVer() {
      return version;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
html,
body,
#app {
  height: 100%;
}
img {
  max-width: 100%;
}
</style>
