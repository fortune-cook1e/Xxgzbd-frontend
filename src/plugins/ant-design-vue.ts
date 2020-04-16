import Vue from 'vue'
import {
  Pagination,
  Button,
  LocaleProvider,
  ConfigProvider,
  Tabs,
  Row,
  Col,
  Table,
  Form,
  Input,
  Select,
  DatePicker,
  Alert,
  Icon,
  Spin,
  message,
  FormModel,
  Menu
} from 'ant-design-vue'
console.log(FormModel)

Vue.component(LocaleProvider.name, LocaleProvider)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
Vue.component(Tabs.name, Tabs)
Vue.component(Tabs.TabPane.name, Tabs.TabPane)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Table.name, Table)
Vue.component(Table.Column.name, Table.Column)
Vue.component(Form.name, Form)
Vue.component(Form.Item.name, Form.Item)
Vue.component(Input.name, Input)
Vue.component(Input.TextArea.name, Input.TextArea)
Vue.component(Select.name, Select)
Vue.component(Select.Option.name, Select.Option)
Vue.component(Select.OptGroup.name, Select.OptGroup)
Vue.component(DatePicker.name, DatePicker)
Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker)
Vue.component(DatePicker.MonthPicker.name, DatePicker.MonthPicker)
Vue.component(Alert.name, Alert)
Vue.component(Icon.name, Icon)
Vue.use(Spin)
  .use(ConfigProvider)
  .use(FormModel)
  .use(Menu)
Vue.prototype.$form = Form
Vue.prototype.$message = message
