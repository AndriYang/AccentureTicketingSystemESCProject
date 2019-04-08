import ticketReducer from '../store/reducers/ticketReducer'

describe('With snapshots', () => {
  it('should return initial state', () =>{
    expect(ticketReducer(undefined, {})).toMatchSnapshot();
  })

  it('should handle CREATE_PROJECT', ()=>{
    const action = {
      type: 'CREATE_PROJECT',
    }
    expect(ticketReducer(undefined, action)).toMatchSnapshot();
  })

  it('should handle CREATE_PROJECT_ERROR', ()=>{
    const action = {
      type: 'CREATE_PROJECT_ERROR',
    }
    expect(ticketReducer(undefined, action)).toMatchSnapshot();
  })
})
