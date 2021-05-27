import { createStore } from 'redux';

const reducer = (state = { count: 10 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                count: state.count - 1,
            };

        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
