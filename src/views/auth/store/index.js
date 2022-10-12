import request from "@/config/https";
let today = new Date().toLocaleDateString();

import router from "../../../router/index";

// import config from "@/config/";
export default {
  namespaced: true,
  state: {},
  mutations: {
    SET_AUTOGEN_DATA(state, data) {
      state.autoGen = data;
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        let res = await request().post(
          this.getters.getRoute ? `/admin/auth/login` : `/auth/login`,
          payload,
          {
            "Content-Type": "application/json",
          }
        );
        console.log(res);

        commit("setSuccessMessage", "Login Successful", { root: true });
        commit("setUser", res.data, { root: true });
        commit("setToken", res.data, { root: true });
        commit("setGuard", res.data, { root: true });
        // router.push(res.data.guard == "admin" ? "/admin" : "/");
        return res.data;
      } catch (error) {
        console.log(error);
        commit("setWarningMessage", "Invalid Details", {
          root: true,
        });

        return error.response;
      }
    },
    async register({ commit, rootState, rootMutations }, payload) {
      try {
        let res = await request().post(`/auth/register`, payload, {
          "Content-Type": "application/json",
        });
        console.log(res);

        commit("setSuccessMessage", "Signup Successful", { root: true });
        router.push("/sign-in");
        return true;
      } catch (error) {
        console.log(error.response);
        commit("setWarningMessage", error.response.data.message, {
          root: true,
        });
        return false;
      }
    },
  },
  getters: {
    getToken(state) {
      return state.auth;
    },
    getRoute(state, getters, rootState) {
      return rootState.route.path.split("/").includes("admin");
    },
  },
};
