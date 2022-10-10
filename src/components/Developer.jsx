export const actionType = {
  ADD_DEVELOPER: 'ADD_DEVELOPER',
  REMOVE_DEVELOPER: 'REMOVE_DEVELOPER',
};

export const Developer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.ADD_DEVELOPER:
      return [
        ...state,
        {
          devName: action.payload.devName,
          lang: action.payload.lang,
          tech: action.payload.tech,
          food: action.payload.food,
          drink: action.payload.drink,
          id: state.length + 1,
        },
      ];
    case actionType.REMOVE_DEVELOPER:
      return state.filter((developer) => developer.id !== action.payload.id);
    default:
      return state;
  }
};
