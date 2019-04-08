import {Dashboard} from '../components/dashboard/Dashboard'

it('print the initial state',() => {
  const data = new Dashboard();
  expect(data).toMatchSnapshot();
})
