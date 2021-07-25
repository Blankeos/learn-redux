import {
  ListsAction,
  ListState,
  Lists,
  ADD_LIST,
  GET_LISTS,
  GET_LIST_BY_ID,
  SET_LISTID_TO_DELETE,
  SET_LIST_TO_EDIT,
  DELETE_LIST,
  UPDATE_LIST,
} from "../types";

const initialState: ListState = {
  lists: {},
  listIdToDelete: "",
  listToEdit: null,
  listById: null,
  selectedList: null,
  taskToDelete: null,
  taskToEdit: null,
};

// Helper functions
const getListsFromLS = (): Lists => {
  if (localStorage.getItem("task_list")) {
    return JSON.parse(localStorage.getItem("task_list") || "{}");
  }

  return {};
};

const saveListstoLS = (lists: Lists) => {
  localStorage.setItem("task_list", JSON.stringify(lists));
};

export default (state = initialState, action: ListsAction): ListState => {
  const listsFromLS = getListsFromLS();

  switch (action.type) {
    case ADD_LIST:
      const clonedListsFromLS = { ...listsFromLS };
      clonedListsFromLS[action.payload.id] = action.payload;
      saveListstoLS(clonedListsFromLS);
      return {
        ...state,
        lists: clonedListsFromLS,
      };
    case GET_LISTS:
      return {
        ...state,
        lists: listsFromLS,
      };
    case GET_LIST_BY_ID:
      const list = listsFromLS[action.payload];
      return {
        ...state,
        listById: list,
      };
    case SET_LISTID_TO_DELETE:
      return {
        ...state,
        listIdToDelete: action.payload,
      };
    case SET_LIST_TO_EDIT:
      const listToEdit = listsFromLS[action.payload];
      return {
        ...state,
        listToEdit,
      };

    case DELETE_LIST:
      const clonedListsfromLS2 = { ...listsFromLS };
      const listId = clonedListsfromLS2[action.payload].id;
      delete clonedListsfromLS2[action.payload];
      saveListstoLS(clonedListsfromLS2);

      return {
        ...state,
        lists: clonedListsfromLS2,
      };

    case UPDATE_LIST:
      const clonedListsFromLS3 = { ...listsFromLS };
      clonedListsFromLS3[action.payload.id].name = action.payload.name;
      saveListstoLS(clonedListsFromLS3);
      return {
        ...state,
        lists: clonedListsFromLS3,
        listToEdit: null,
      };

    default:
      return state;
  }
};
