import dataReducer from '../store/reducers/dataReducer'

describe('With snapshots', () => {
  it('should return initial state', () =>{
    expect(dataReducer(undefined, {})).toMatchSnapshot();
  })

  it('should handle FETCH_TODOS', ()=>{
    const action = {
      type: 'FETCH_TODOS',
    }
    expect(dataReducer(undefined, {})).toMatchSnapshot();
  })
})
