<template>
  <!-- Button trigger modal -->
  <!-- <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Launch static backdrop modal
  </button> -->

  <!-- Modal -->

  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Edit Competiton</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="register(userDetails)">
            <div class="row mb-0">
              <div class="col-12 mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  v-model="competitions.name"
                  required
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Short Descrption"
                  aria-label="Short Descrption"
                  v-model="competitions.short_description"
                  required
                />
              </div>
              <!-- <div class="col-12 mb-3">
                <label for="">Category</label>
                <select class="form-control">
                  <option :value="competitions.id">
                    {{ competitions.name }}
                  </option>
                </select>
              </div> -->
            </div>
            <div class="row mb-5">
              <div class="col">
                <label for="Start at">Start at</label>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Phone"
                  aria-label="Phone"
                  v-model="competitions.start_at"
                  required
                />
              </div>
              <div class="col">
                <label for="End at">End at</label>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  v-model="competitions.end_at"
                  required
                />
              </div>
            </div>
            <div class="row mb-5">
              <div class="col">
                <label for="Start at">Max Team Member</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="10"
                  aria-label="10"
                  v-model="competitions.max_team_number"
                  required
                />
              </div>
              <div class="col">
                <label for="End at">Award (USD)</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="$5,000"
                  aria-label="Award"
                  v-model="competitions.award"
                  required
                />
              </div>
            </div>
            <div class="row mb-0">
              <div class="col mb-3">
                <input
                  @change="handleImage"
                  type="file"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  required
                />
              </div>
              <div class="col-12">
                <textarea
                  name=""
                  id=""
                  cols="10"
                  rows="3"
                  class="bg-dark"
                  style="color: white; width: 100%"
                  v-model="competitions.description"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" @click="onCreate" class="btn btn-primary">
            Understood
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["competitions"],
  data() {
    return {
      formData: new FormData(),
    };
  },

  methods: {
    handleInput(e) {
      let files = e.target.files;
      if (!files.length) return;
      this.formData = new FormData();
      Array.from(files).forEach((file) => {
        console.log(file);
        this.formData.append("image", file);
      });
      console.log(this.formData);
    },

    handleImage(e) {
      let files = e.target.files;
      if (!files.length) return;
      this.formData = new FormData();
      this.formData.append("image", files[0], files[0].name);
    },

    async onCreate() {
      Object.keys(this.competitions).forEach((key, value) => {
        this.formData.append(key, this.competitions[key]);
      });

      await this.updateCompetition({
        data: this.formData,
        id: this.competitions.id,
      });

      this.$emit("onUpdate", this.competitions.category_id);
      // this.updateCompetition(this.formData).then(() => {
      //   this.project = {};
      //   this.$refs.image.value = null;
      // });
    },
    ...mapActions("admin", ["updateCompetition"]),
  },
};
</script>

<style></style>
