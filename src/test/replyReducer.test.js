import replyReducer from '../store/reducers/replyReducer'

describe('With snapshots', () => {
  it('should return initial state', () =>{
    expect(replyReducer(undefined, {})).toMatchSnapshot();
  })

  it('should handle REPLY_CREATED', ()=>{
    const action = {
      type: 'REPLY_CREATED',
    }
    expect(replyReducer(undefined, {})).toMatchSnapshot();
  })

  it('should handle REPLY_ERROR', ()=>{
    const action = {
      type: 'REPLY_ERROR',
    }
    expect(replyReducer(undefined, {})).toMatchSnapshot();
  })
})
