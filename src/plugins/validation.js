import { Form as VeeFrom, Field as VeeField, defineRule } from "vee-validate";
import { required } from "@vee-validate/rules";
export default {
  install(app) {
    app.component("VeeForm", VeeFrom);
    app.component("VeeField", VeeField);
    defineRule("required", required);
  },
};
