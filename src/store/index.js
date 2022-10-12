import { createStore } from "vuex";
// import router from "../router";
import request from "@/config/https";

import auth from "../views/auth/store";
import admin from "../views/dashboard/admin/store";
// import user from "../views/user/store";

import createPersistedState from "vuex-persistedstate";

// let initialState = {
//   admin: admin.state,
// };

const circularReplacer = () => {
  // Creating new WeakSet to keep
  // track of previously seen objects
  const seen = new WeakSet();

  return (key, value) => {
    // If type of value is an
    // object or value is null
    if (typeof value === "object" && value !== null) {
      // If it has been seen before
      if (seen.has(value)) {
        return;
      }

      // Add current value to the set
      seen.add(value);
    }

    // return the value
    return value;
  };
};

export default createStore({
  supportCircular: true,
  modules: {
    auth,
    admin,
    // user,
  },

  plugins: [createPersistedState()],
  state: {
    errorMessage: "",
    successMessage: "",
    warningMessage: "",
    auth: null,
    access_token: null,
    currentRoute: "",
    guard: null,
    competitions: null,
    allCompetitions: null,
  },
  mutations: {
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    setSuccessMessage(state, message) {
      state.successMessage = message;
    },
    setWarningMessage(state, message) {
      state.warningMessage = message;
    },
    setAuth(state, data) {
      state.auth = data;
      state.access_token = data;
    },
    SET_ROUTE(state, route) {
      state.route = route;
    },
    setToken(state, data) {
      state.access_token = data;
      state.auth = data;
    },
    setGuard(state, data) {
      state.guard = data;
    },
    setUser(state, data) {
      state.user = data;
    },
    setCompetition(state, data) {
      state.competitions = data.data;
    },
    setAllCompetitions(state, data) {
      state.allCompetitions = data.data;
    },
  },
  actions: {
    setErrorMessage({ commit }, message) {
      commit("setErrorMessage", message);
    },
    setSuccessMessage({ commit }, message) {
      commit("setSuccessMessage", message);
    },
    setWarningMessage({ commit }, message) {
      commit("setWarningMessage", message);
    },

    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    setCardBackground({ commit }, payload) {
      commit("cardBackground", payload);
    },

    // Signup request
    async signup({ commit }, data) {
      try {
        let res = await request().post(`/auth/register`, data, {
          "Content-Type": "application/json",
        });
        console.log(res);

        commit("setUser", res.data);
        commit("setSuccessMessage", "Signup Successful");

        return true;
      } catch (error) {
        commit("setWarningMessage", error.data.message);
        return false;
      }
    },

    // Login request
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

        commit("setSuccessMessage", "Login Successful");
        // let parsed = JSON.parse(JSON.stringify(res.data));
        // console.log(parsed);
        commit("setUser", res.data.user);
        commit("setToken", res.data.access_token);
        commit("setGuard", res.data.guard);
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

    async getCompetitions({ commit }, id) {
      try {
        let url = `competitions`;
        let res = await request().get(url);
        console.log(res);
        commit("setCompetition", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getAllCompetitions({ commit }, id) {
      try {
        let url = `/all_competitions`;
        let res = await request().get(url);
        console.log(res);
        commit("setAllCompetitions", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getCompetition({ commit }, id) {
      try {
        let url = `/all_competitions/${id}`;
        let res = await request().get(url);
        console.log(res);
        return res.data.data;
        // commit("setAllCompetitions", res.data);
      } catch (error) {
        console.log(error);
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
});
