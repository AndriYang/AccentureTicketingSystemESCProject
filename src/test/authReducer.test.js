import authReducer from '../store/reducers/authReducer'

describe('With snapshots', () => {
  it('should return initial state', () =>{
    expect(authReducer(undefined, {})).toMatchSnapshot();
  })
})
