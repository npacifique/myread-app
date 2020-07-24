
export const logger = (store)=>(next)=>(action)=>{
    console.group()
    console.log('State : ', store.getState())
    const result = next(action)
    console.log('Next action : ', action)
    console.log('New state : ', store.getState());
    console.groupEnd()
    return result
}