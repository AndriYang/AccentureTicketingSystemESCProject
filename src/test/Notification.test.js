import {Notifications} from '../components/dashboard/Notifications'

it('print the initial state',() => {

  expect(Notifications).toMatchSnapshot();
})
