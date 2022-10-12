<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userDetails: {
        accept: 1,
        uid: "",
      },
    };
  },

  methods: {
    ...mapActions("auth", ["register"]),
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
                <h2>REGISTER</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="ftco-section bg-dark">
      <div class="container">
        <h2 class="subheading text-center royal__talent">WHAT IS HACKATHON?</h2>
        <form @submit.prevent="register(userDetails)">
          <div class="row mb-5">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                aria-label="First name"
                v-model="userDetails.firstname"
                required
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
                v-model="userDetails.lastname"
                required
              />
            </div>
          </div>
          <div class="row mb-5">
            <div class="col">
              <input
                type="number"
                class="form-control"
                placeholder="Phone"
                aria-label="Phone"
                v-model="userDetails.phone"
                required
              />
            </div>
            <div class="col">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
                v-model="userDetails.email"
                required
              />
            </div>
          </div>
          <div class="row mb-5">
            <div class="col">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                aria-label="Password"
                v-model="userDetails.password"
                required
              />
            </div>
            <div class="col">
              <input
                type="password"
                class="form-control"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                v-model="userDetails.password_confirmation"
                required
              />
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-12 text-center">
              <button
                type="submit"
                class="w-25 mx-auto btn btn-primary py-3 px-4 mt-5"
              >
                Sign Up
              </button>
            </div>
            <div class="col-12 text-center mt-3">
              <router-link to="/sign-in">Login</router-link>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
