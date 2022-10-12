<script>
import EditCompetition from "../components/Edit.vue";
import Navs from "../components/Navigations.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { Navs, EditCompetition },
  data() {
    return {
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
    ...mapActions("auth", ["register"]),
    ...mapActions("admin", ["getCompetitions"]),
    ...mapActions("admin", ["getCompetition"]),
  },

  async created() {
    await this.getCompetitions();
    await this.getCompetition(this.$route.params.id);
  },
};
</script>

<template>
  <!-- {{ competition }} -->
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
                <h2 style="font-size: 20px">ADMIN - HACKATHON</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Navs />
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
            <div class="text-inner pl-md-5">
              <span class="subheading">{{ competition.name }}</span>
              <!-- <h3 class="heading">Stylistic A Professional Model Agency</h3> -->
              <p>
                {{ competition.short_description }}
              </p>
              <p>
                {{ competition.description }}
              </p>
              <ul class="my-4">
                <li>
                  <span class="ion-ios-checkmark-circle mr-2"></span> Starts
                  {{ competition.start_at }}
                </li>
                <li>
                  <span class="ion-ios-checkmark-circle mr-2"></span> Ends
                  {{ competition.end_at }}
                </li>
                <li>
                  <span class="ion-ios-checkmark-circle mr-2"></span> Max Team
                  Numbers - {{ competition.max_team_number }}
                </li>
                <li>
                  <span class="ion-ios-checkmark-circle mr-2"></span> Awars
                  {{ competition.award }}
                </li>
                <li class="my-5">
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Edit
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <EditCompetition
      :competitions="competition"
      :onUpdate="getCompetition(id)"
    />
  </div>

  <button
    class="btn btn-primary add-btn px-4 py-2"
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Add
  </button>
</template>

<style>
.add-btn {
  position: fixed;
  bottom: 4rem;
  right: 3rem;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: small;
}
</style>
