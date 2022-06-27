import Vue from 'vue'
import App from './App copy 3.vue'

import './assets/fonts/iconfont.css'

import FButton from './components/f-button'
import FDialog from './components/f-dialog'
import FInput from './components/f-input'
import FSwitch from './components/f-switch'
import FRadio from './components/f-radio'
import FRadioGroup from './components/f-radio-group'
import FCheckbox from './components/f-checkbox'
import FCheckboxGroup from './components/f-checkbox-group'
import FForm from './components/f-form'
import FFormItem from './components/f-form-item'
import FPagination from './components/f-pagination'

Vue.config.productionTip = false

Vue.component(FButton.name, FButton)
Vue.component(FDialog.name, FDialog)
Vue.component(FInput.name, FInput)
Vue.component(FSwitch.name, FSwitch)
Vue.component(FRadio.name, FRadio)
Vue.component(FRadioGroup.name, FRadioGroup)
Vue.component(FCheckbox.name, FCheckbox)
Vue.component(FCheckboxGroup.name, FCheckboxGroup)
Vue.component(FForm.name, FForm)
Vue.component(FFormItem.name, FFormItem)
Vue.component(FPagination.name, FPagination)


new Vue({
    render: h => h(App)
}).$mount('#app')