<template>
  <section class="cover">
    <div class="cover-caption">
      <div class="container-fluid text-center">
        <div class="row justify-content-sm-center">
          <div class="col-sm-auto cover-content">
            <form
              class="form-inline"
              @submit.prevent="checkSite()">
              <div class="form-group">
                <select
                  name="siteProtocol"
                  id="siteProtocol"
                  class="form-control"
                  v-model="protocol">
                  <option value="http">http://</option>
                  <option
                    value="https"
                    selected>https://</option>
                </select>
              </div>
              <div class="form-group mx-2">
                <input
                  class="form-control"
                  type="text"
                  name="siteHost"
                  id="siteHost"
                  placeholder="Enter website"
                  v-model="host"
                  required>
              </div>
              <button
                type="submit"
                class="btn btn-primary">Check my site</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      host: null,
      protocol: 'https'
    };
  },
  methods: {
    checkSite() {
      this.$router.push(`/check/${this.host}?protocol=${this.protocol}`);
    }
  }
};
</script>

<style scoped>
.cover {
  background: #222 url('../assets/img/cover.jpg') center center no-repeat;
  background-size: cover;
  color: white;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
}

.cover-caption {
  width: 100%;
}

.cover-content {
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 1.875rem;
}
</style>
