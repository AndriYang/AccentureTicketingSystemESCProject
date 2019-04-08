import {CustomerDashboard} from '../components/customerquery/customerDashboard'

it('print the initial state',() => {
  const data = new CustomerDashboard();
  expect(data).toMatchSnapshot();
})
