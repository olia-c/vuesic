import { Form as VeeFrom, Field as VeeField } from "vee-validate";
export default {
  install(app) {
    app.component("VeeForm", VeeFrom);
    app.component("VeeField", VeeField);
  },
};
