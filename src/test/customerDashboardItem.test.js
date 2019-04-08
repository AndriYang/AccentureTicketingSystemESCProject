import {NewToDoListItem} from '../components/customerquery/customerDashboardItem'

it('print the initial state',() => {
  const data = new NewToDoListItem();
  expect(data).toMatchSnapshot();
})
