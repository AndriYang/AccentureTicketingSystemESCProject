import index from '../store/reducers/index'

describe('With snapshots', () => {
  it('should return initial state', () =>{
    expect(index(undefined, {})).toMatchSnapshot();
  })
})
