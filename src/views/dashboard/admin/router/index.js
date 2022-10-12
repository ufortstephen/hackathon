const AdminDashboard = () => import("../views/Dashboard.vue");
const AdminCompetition = () => import("../views/Competition.vue");
const AdminCompetitionDetails = () => import("../views/CompetitionDetails.vue");

import store from "@/store/index";
// console.log(store.getters["admin/getRoute"]);

export default [
  {
    path: "/admin",
    name: "admin",
    // component: AdminDashboard,
    redirect: "/admin/dashboard",
    async beforeEnter(to, from, next) {
      try {
        console.log(store.getters["admin/getRoute"]);
        console.log(store.state);
        var hasPermission = store.getters["admin/getRoute"];
        var auth = store.state.auth;
        if (hasPermission && auth && store.state.guard == "admin") {
          next();
        } else {
          next({
            path: "/admin/sign-in", // back to safety route //
            query: { redirectFrom: to.fullPath },
          });
        }
      } catch (e) {
        next({
          path: "/admin/sign-in", // back to safety route //
          query: { redirectFrom: to.fullPath },
        });
      }
    },
    children: [
      {
        path: "/admin/dashboard",
        name: "admin.dashboard",
        component: AdminDashboard,
      },
      {
        path: "/admin/competitions/:id",
        name: "admin.competition",
        component: AdminCompetition,
      },
      {
        path: "/admin/competitions/details/:id",
        name: "admin.competition.details",
        component: AdminCompetitionDetails,
      },
    ],
  },
];
