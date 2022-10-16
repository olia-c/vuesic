import {
  Form as VeeFrom,
  Field as VeeField,
  defineRule,
  ErrorMessage,
} from "vee-validate";
import { required } from "@vee-validate/rules";
export default {
  install(app) {
    app.component("VeeForm", VeeFrom);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
  },
};
