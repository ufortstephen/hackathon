import request from "@/config/https";
let today = new Date().toLocaleDateString();

import router from "@/router/index";

// import config from "@/config/";
export default {
  namespaced: true,
  state: {
    competitions: null,
    setCompetition: null,
  },
  mutations: {
    setCompetitions(state, data) {
      state.competitions = data;
    },
    setCompetition(state, data) {
      state.competition = data.data;
    },
  },
  actions: {
    async getCompetitions({ commit }) {
      try {
        let url = this.getters.getRoute
          ? "admin/competitions"
          : "/competitions";
        let res = await request().get(url);
        console.log(res);
        commit("setCompetitions", res.data.data);
      } catch (error) {
        console.log(error);
      }
    },

    async getCompetition({ commit }, id) {
      try {
        let url = this.getters.getRoute
          ? `admin/competitions/${id}`
          : "/competitions";
        let res = await request().get(url);
        console.log(res);

        commit("setCompetition", res.data);
      } catch (error) {
        console.log(error);
      }
    },

    //createCompetition
    async createCompetition({ commit }, payload) {
      console.log(payload);
      try {
        let url = this.getters.getRoute
          ? `/admin/competitions`
          : "/competitions";
        let res = await request().post(url, payload);
        console.log(res);
        commit("setSuccessMessage", " Successful", { root: true });
        // commit("setCompetition", res.data);
      } catch (error) {
        console.log(error);
        commit("setWarningMessage", "Error processing data", {
          root: true,
        });
      }
    },

    //updateCompetition
    async updateCompetition({ commit }, payload) {
      console.log(payload);
      try {
        let url = this.getters.getRoute
          ? `/admin/competitions/${payload.id}`
          : "/competitions";
        let res = await request().patch(url, payload.data);
        console.log(res);
        commit("setSuccessMessage", "Successful", { root: true });
        // commit("setCompetition", res.data);
      } catch (error) {
        console.log(error);
        commit("setWarningMessage", "Error processing data", {
          root: true,
        });
      }
    },
  },
  getters: {
    getToken(state, rootState) {
      console.log(rootState);
      console.log(state);
      return rootState.auth;
    },
    getRoute(state, getters, rootState) {
      return rootState.route.path.split("/").includes("admin");
    },
  },
};
