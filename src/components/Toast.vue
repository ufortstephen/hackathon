<template>
  <div>
    <!-- Toast -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { createToast } from "mosha-vue-toastify";

export default {
  computed: mapState(["successMessage", "errorMessage", "warningMessage"]),
  watch: {
    successMessage: function () {
      if (this.successMessage != "") {
        createToast(this.successMessage, {
          type: "success",
          showIcon: "true",
          transition: "slide",
        });
        this.$store.dispatch("setSuccessMessage", "");
      }
    },
    warningMessage: function () {
      if (this.warningMessage != "") {
        createToast(this.warningMessage, {
          type: "warning",
          showIcon: "true",
          transition: "slide",
        });
        this.$store.dispatch("setWarningMessage", "");
      }
    },
    errorMessage: function () {
      let error = "",
        errors = this.formatError(this.errorMessage);
      errors.forEach((err) => {
        error = error.concat(err + "<br>");
      });
      if (this.errorMessage != "") {
        createToast(
          {
            description: error,
          },
          {
            type: "danger",
            showIcon: true,
            transition: "slide",
          }
        );
        this.$store.dispatch("setErrorMessage", "");
      }
    },
    // warningMessage: function () {
    //   let error = "",
    //     errors = this.formatError(this.warningMessage);
    //   errors.forEach((err) => {
    //     error = error.concat(err + "<br>");
    //   });
    //   if (this.warningMessage != "") {
    //     createToast(
    //       {
    //         description: warning,
    //       },
    //       {
    //         type: "warning",
    //         showIcon: true,
    //         transition: "slide",
    //       }
    //     );
    //     this.$store.dispatch("setWarningMessage", this.warningMessage);
    //   }
    // },
  },
  methods: {
    formatError(error) {
      const errors = [];
      if (error) {
        const _errors = error.errors || null;
        if (_errors) {
          Object.keys(_errors).forEach((key) => {
            errors.push(_errors[key][0]);
          });
        } else {
          errors.push(error.message);
        }
      }
      return errors;
    },
  },
};
</script>
