const Register = () => import("../views/Register.vue");
const Login = () => import("../views/Login.vue");
const AdminLogin = () => import("../views/AdminLogin.vue");

// import store from "../../../store/index";

export default [
  {
    path: "/sign-up",
    name: "register",
    component: Register,
  },
  {
    path: "/admin/sign-in",
    name: "admin.login",
    component: AdminLogin,
  },
  {
    path: "/sign-in",
    name: "user.login",
    component: Login,
  },
];
