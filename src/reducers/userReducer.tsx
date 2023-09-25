const initialState = {
    name: '',
    level: '',
    workOutDays: [],
    myWorkOuts: [],
    lastWorkOut: '',
    dailyProgress: ['2023-09-23', '2023-09-24']
};

export default (state = initialState, action: any) => {
    switch(action.type) {
        case 'SET_NAME':
            return {...state, name: action.payload.name}
        break;
    }

    return state;
};