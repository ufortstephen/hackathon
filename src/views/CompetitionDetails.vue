<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      data: null,
      userDetails: {
        accept: 1,
        uid: "",
      },
    };
  },

  computed: {
    ...mapState("admin", ["competitions"]),
    ...mapState("admin", ["competition"]),
    categories() {
      return this.competitions
        ? this.competitions.find((data) => data.id == this.$route.params.id)
        : null;
    },
  },

  methods: {
    ...mapActions(["getCompetition"]),
    ...mapActions(["getAllCompetitions"]),
  },

  async created() {
    await this.getAllCompetitions();
    this.data = await this.getCompetition(this.$route.params.id);
  },
};
</script>

<template>
  <!-- {{ data }} -->
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
                <h2 style="font-size: 20px">HACKATHON</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <Navs /> -->
    </div>
    <section
      class="ftco-section ftco-no-pt ftco-no-pb ftco-about-section my-10"
    >
      <div class="container-fluid px-0">
        <div class="row d-md-flex text-wrapper">
          <div
            class="one-half img"
            style="
              background-image: url('https://miro.medium.com/max/1400/0*8kXW-5bmIGH8vxBI');
              background-size: cover;
            "
          ></div>
          <div
            class="one-half half-text d-flex justify-content-end align-items-center"
          >
            <div class="text-inner pl-md-5" v-if="data">
              <span class="subheading">{{ data.name }}</span>
              <p>
                {{ data.short_description }}
              </p>
              <p>
                {{ data.description }}
              </p>
              <ul class="my-4">
                <li>
                  <span class="ion-ios-checkmark-circle mr-2"></span> Starts
                  {{ data.start_at }}
                </li>
                <li>
                  <span class="ion-ios-checkmark-circle mr-2"></span> Ends
                  {{ data.end_at }}
                </li>
                <li>
                  <span class="ion-ios-checkmark-circle mr-2"></span> Max Team
                  Numbers - {{ data.max_team_number }}
                </li>
                <li>
                  <span class="ion-ios-checkmark-circle mr-2"></span> Awars
                  {{ data.award }}
                </li>
                <li class="my-5">
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Join
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
