import rootReducer from '../store/reducers/rootReducer'

describe('With snapshots', () => {
  it('should return initial state', () =>{
    expect(rootReducer(undefined, {})).toMatchSnapshot();
  })

  
})
