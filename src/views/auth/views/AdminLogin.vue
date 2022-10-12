<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userDetails: {
        admin: true,
      },
    };
  },

  methods: {
    ...mapActions("auth", ["login"]),
    async onSubmit() {
      let res = await this.login(this.userDetails);
      if (res) {
        this.$router.push(res.data.guard == "user" ? "/" : "/admin");
      }
    },
  },
};
</script>

<template>
  <div class="page">
    <div id="colorlib-page">
      <section id="home" class="video-hero js-fullheight mt-10">
        <div class="overlay"></div>

        <div class="container">
          <div
            class="row js-fullheight justify-content-center d-flex align-items-center"
          >
            <div class="col-md-8 mt-10">
              <div class="text text-center">
                <h2>LOGIN</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="ftco-section bg-dark">
      <div class="container">
        <h2 class="subheading text-center royal__talent">ADMIN LOGIN</h2>
        <form @submit.prevent="onSubmit">
          <div class="row mb-2">
            <div class="col-12 mx-auto mb-5">
              <input
                type="email"
                class="w-50 mx-auto form-control"
                placeholder="Email"
                aria-label="Email"
                v-model="userDetails.email"
                required
              />
            </div>
            <div class="col-12 mx-auto">
              <input
                type="password"
                class="w-50 mx-auto form-control"
                placeholder="Last name"
                aria-label="Last name"
                v-model="userDetails.password"
                required
              />
            </div>
          </div>

          <div class="row mb-5">
            <div class="col-12 text-center">
              <button
                type="submit"
                class="w-25 mx-auto btn btn-primary py-3 px-4 my-5"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
