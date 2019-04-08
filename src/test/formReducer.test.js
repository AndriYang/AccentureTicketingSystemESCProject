import formReducer from '../store/reducers/formReducer'

describe('With snapshots', () => {
  it('should return initial state', () =>{
    expect(formReducer(undefined, {})).toMatchSnapshot();
  })

  it('should handle CREATE_FORM', ()=>{
    const action = {
      type: 'CREATE_FORM',
    }
    expect(formReducer(undefined, {})).toMatchSnapshot();
  })

  it('should handle CREATE_FORM_ERROR', ()=>{
    const action = {
      type: 'CREATE_FORM_ERROR',
    }
    expect(formReducer(undefined, {})).toMatchSnapshot();
  })
})
