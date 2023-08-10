import  configureStore  from "../store";
import todoReducer, { fetchResponse } from "../todos-slice";

const initialState = {
    data: [],
    error: false
}

describe('should fetch Response', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('fetch initial state of todos', () => {
        
        const state = configureStore.getState();
        expect(state.todo).toEqual(initialState);
    })

    test('fetch todos', async () => {

        const payload = [
                    {
                        userId: 1,
                        id: 1,
                        title: 'delectus aut autem',
                        completed: false
                    },
                    {
                        userId: 1,
                        id: 2,
                        title: "quis ut nam facilis et officia qui",
                        completed: false
                    }
        ]
        
        const error = false;
        const fulfilledState = todoReducer(initialState, fetchResponse.fulfilled(payload));

        // console.log(fulfilledState.data);
        expect(fulfilledState.data).toEqual(payload);
        expect(fulfilledState.error).toEqual(error);
   

    })

    test('fetch rejected state', async () => {

        const payload = []
        
        const error = true;
        const rejectedState = todoReducer(initialState, fetchResponse.rejected());
        
        expect(rejectedState.data).toEqual(payload);
        expect(rejectedState.error).toEqual(error);
   

    })

})