import MockData from "../../assets/MOCK_DATA.json";

const DB = MockData.sort((a, b) => {
  return a.Date < b.Date ? -1 : a.Date > b.Date ? 1 : 0;
}).reverse();
const initial_State = {
  mockData: DB,
  defaultPage: 1
};

const dataReducer = (state = initial_State, action) => {
  if (action.type === "GET_ALL_TRANSACTIONS") {
    return {
      ...state,
      defaultPage: action.payload
    };
  }
  return state;
};

export default dataReducer;
