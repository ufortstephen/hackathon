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
  },

  methods: {
    ...mapActions("auth", ["register"]),
    ...mapActions("admin", ["getCompetitions"]),
  },

  async created() {
    await this.getCompetitions();
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
            <span class="subheading">Competitions</span>
          </div>
        </div>
        <div class="row d-flex">
          <div
            @click="$router.push(`/admin/competitions/${competition.id}`)"
            class="col-md-4 d-flex"
            style="cursor: pointer"
            v-for="competition in competitions"
            :key="competition.id"
          >
            <div class="blog-entry bg-dark align-self-stretch">
              <span
                class="block-20"
                style="
                  background-image: url('../../public/assets/images/freestyle.jpeg');
                "
              >
              </span>
              <div class="text p-4 d-block">
                <!-- <div class="meta mb-3"></div> -->
                <h3 class="heading mt-3">
                  <span href="#"> {{ competition.name }} </span>
                </h3>
                <!-- <p>View</p> -->
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
