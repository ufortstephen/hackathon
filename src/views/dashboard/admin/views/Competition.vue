<script>
import CompetitionAddModal from "../components/CompetitionAddModal.vue";
import Navs from "../components/Navigations.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { Navs, CompetitionAddModal },
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
  <!-- {{ categories }} -->
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
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 mb-5 heading-section text-center">
            <span class="subheading">{{ categories.name }}</span>
          </div>
        </div>
        <div class="row d-flex">
          <div
            @click="
              $router.push(`/admin/competitions/details/${competition.id}`)
            "
            v-if="categories.competitions"
            class="col-md-4 d-flex"
            v-for="competition in categories.competitions"
            style="cursor: pointer"
            :key="competition"
          >
            <div class="blog-entry bg-dark align-self-stretch">
              <span
                class="block-20"
                style="
                  background-image: url('https://miro.medium.com/max/1400/0*8kXW-5bmIGH8vxBI');
                "
              >
              </span>
              <div class="text p-4 d-block">
                <!-- <div class="meta mb-3"></div> -->
                <h3 class="heading mt-3">
                  <span href="#"> {{ competition.name }} </span>
                </h3>
                <div class="d-flex justify-content-between">
                  <p>{{ competition.short_description }}</p>
                  <p>View</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CompetitionAddModal :competitions="competitions" />
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
