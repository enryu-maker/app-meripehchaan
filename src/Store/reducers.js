const initialState = {
    access: null,
    premium: false,
    profile: {},
    cards: [],
    card: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                access: action.payload.access,
                premium: action.payload.premium
            };
        case "PROFILE":
            return {
                ...state,
                profile: action.payload.profile,
                cards: action.payload.cards,
            };
        case "CARD":
            return {
                ...state,
                card: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                access: null
            };
        default:
            return state;
    }
};