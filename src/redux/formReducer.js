const defaultState = {
  form: []
};

export function formReducer(state = defaultState, actions) {
  let copied = JSON.parse(JSON.stringify(state.form));

  if (actions.type === "ADD") {
    copied.push(actions.payload);
    return { ...state, form: copied };

  } else if (actions.type === "REMOVE") {
    copied = copied.filter((el) => {
      return el.id !== actions.payload;
    });
    return { ...state, form: copied };
  } else {
    return state;
  }
}

export default formReducer;