import Vue from 'vue'
import App from './App.vue'
import LgButton from './components/button.vue'
import LgDialog from './components/dialog.vue'
import LgInput from './components/input.vue';
import LgSwitch from './components/switch.vue'
import LgRadio from './components/radio.vue'
import LgRadioGroup from './components/radio-group.vue'
import LgCheckbox from './components/checkbox.vue'
import LgCheckboxGroup from './components/checkbox-group.vue'
import LgForm from './components/form.vue'
import LgFormItem from './components/form-item.vue'
import './assets/fonts/font.scss'
Vue.component(LgButton.name, LgButton),
    Vue.component(LgDialog.name, LgDialog),
    Vue.component(LgInput.name, LgInput),
    Vue.component(LgSwitch.name, LgSwitch),
    Vue.component(LgRadio.name, LgRadio),
    Vue.component(LgRadioGroup.name, LgRadioGroup),
    Vue.component(LgForm.name, LgForm),
    Vue.component(LgFormItem.name, LgFormItem),
    Vue.component(LgCheckbox.name, LgCheckbox),
    Vue.component(LgCheckboxGroup.name, LgCheckboxGroup)
new Vue({
    render: h => h(App)
}).$mount('#app')
