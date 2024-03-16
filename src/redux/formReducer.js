const defaultState = {
    form: []
  };
  
  export function formReducer(state = defaultState, actions) {
    if (actions.type === "ADD") {
      let copied = JSON.parse(JSON.stringify(state.form));
      copied.push(actions.payload);
      return { ...state, form: copied };
    } else if (actions.type === "REMOVE") {
      let copied = JSON.parse(JSON.stringify(state.form));
      copied = copied.filter((el) => {
        return el.id !== actions.payload;
      });
      return { ...state, form: copied };
    } else {
      return state;
    }
  }
  
  export default formReducer;