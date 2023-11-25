import { boot } from 'quasar/wrappers';
import FormDialog from '../components/shared/FormDialog.vue';

const globalComponents = {
  'form-dialog': FormDialog,
};

export default boot(async ({ app }) => {
  Object.entries(globalComponents).forEach(([name, component]) => {
    app.component(name, component);
  });
});
