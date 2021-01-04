export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finished developing...
    token: 'BQBgaydMMzgZTlSMYhXF0aSn-Je4X2L7oxnX92u_wFdVd3x_kiZ3wGRAAcPV7P7BOH1SVGQazWxlji56ed-fq3ZqaSR1upN3xYJEUr5qhZesNO84WjZHNTTnzuWfQUJdVRI3csZ5Y35JtMKqohNO7GV-TTzJrxeN',
};

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case 'SET_USER':
        return {
            ...state,
            user: action.user,
        };

    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        }
    
    case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists: action.playlists,
        };

    case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly: action.discover_weekly,
        };

    default:
        return state;
  }
};

export default reducer;