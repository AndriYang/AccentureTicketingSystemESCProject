import * as actions from '../store/actions/authActions'



describe('actions', () => {
  const credentials= {email: "mario@net.com", password:"test1234"}
  describe('signIn',() =>{
    it('should create an action with a given value', () =>{
      const expectedAction = {
        type:actions.LOGIN_SUCCESS,
      }

      expect(actions.signIn(credentials)).toEqual(expectedAction)
    })
  })
})
