import Vue from 'vue'
import {
  Pagination,
  Button,
  LocaleProvider,
  Tabs,
  Row,
  Col,
  Table
} from 'ant-design-vue'

Vue.component(LocaleProvider.name, LocaleProvider)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
Vue.component(Tabs.name, Tabs)
Vue.component(Tabs.TabPane.name, Tabs.TabPane)
Vue.component(Tabs.TabContent.name, Tabs.TabContent)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Table.name, Table)
Vue.component(Table.Column.name, Table.Column)

