import authReducer from '../store/reducers/authReducer'

describe('With snapshots', () => {
  it('should return initial state', () =>{
    expect(authReducer(undefined, {})).toMatchSnapshot();
  })

  // it('should handle LOGIN_ERROR', ()=>{
  //   const action = {
  //     type: 'LOGIN_ERROR',
  //   }
  //   expect(ticketReducer(undefined, action)).toMatchSnapshot();
  // })
  //
  // it('should handle LOGIN_SUCCESS', ()=>{
  //   const action = {
  //     type: 'LOGIN_SUCCESS',
  //   }
  //   expect(ticketReducer(undefined, action)).toMatchSnapshot();
  // })
  //
  // it('should handle SIGNOUT_SUCCESS', ()=>{
  //   const action = {
  //     type: 'SIGNOUT_SUCCESS',
  //   }
  //   expect(ticketReducer(undefined, action)).toMatchSnapshot();
  // })
  //
  // it('should handle SIGNUP_SUCCESS', ()=>{
  //   const action = {
  //     type: 'SIGNUP_SUCCESS',
  //   }
  //   expect(ticketReducer(undefined, action)).toMatchSnapshot();
  // })
  //
  // it('should handle CREATE_PROJECT', ()=>{
  //   const action = {
  //     type: 'SIGNUP_ERROR',
  //   }
  //   expect(ticketReducer(undefined, action)).toMatchSnapshot();
  // })
  //
  // it('should handle CREATE_PROJECT', ()=>{
  //   const action = {
  //     type: '',
  //   }
  //   expect(ticketReducer(undefined, action)).toMatchSnapshot();
  // })
})
