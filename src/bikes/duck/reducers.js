import {
  ADD_BIKE,
  LOAD_BIKES,
  REMOVE_BIKE,
  FILTER_PRODUCTS_BY_SIZE,
  FILTER_PRODUCTS_BY_VARIOUS,
  FILTER_PRODUCTS_BY_SEARCH,
  MODAL,
  SHOW_CHECKOUT,
  BASKET_FORM,
  SELECT_SIZE,
  ADD_CHECKOUT,
  SELECT_COLOR,
  CLEAN_BASKET,
  FLY_UP_MY_SITE
} from "./types";

const INITIAL_STATE = {
  assortment: [],
  checkout: [],
  // cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  cartItems: [],
  filteredItems: [],
  size: "",
  sort: "",
  letters: "",
  openForm: false,
  openModal: false,
  value: {
    name: "",
    email: "",
    adress: "",
    city: "",
  },
};

const bikesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_BIKES:
      return {
        ...state,
        assortment: action.payload.map((bike) => ({
          ...bike,
          selectedSize: bike.avaibleSizesz[0],
          selectedColor: bike.avaibleColors[0],
        })),
        filteredItems: action.payload.map((bike) => ({
          ...bike,
          selectedSize: bike.avaibleSizesz[0],
          selectedColor: bike.avaibleColors[0],
        })),
      };

    case ADD_BIKE:
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };

    case SELECT_SIZE:
      return {
        ...state,
        // filteredItems: state.filteredItems.filter(x => x._id === action.payload.bikeId).map(x => ({
        //   ...x,
        //   selectedSize: action.payload.valueSelect
        // }))

        filteredItems: state.filteredItems.map((i) =>
          i._id === action.payload.bikeId
            ? {
                ...i,
                selectedSize: action.payload.valueSelect,
              }
            : i
        ),
      };

    case SELECT_COLOR:
      return {
        ...state,
        filteredItems: state.filteredItems.map((i) =>
          i._id === action.payload.bikeId
            ? {
                ...i,
                selectedColor: action.payload.valueColor,
              }
            : i
        ),
      };

    case REMOVE_BIKE:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        checkout: action.payload.checkout,
      };

    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        size: action.payload.size,
        filteredItems: action.payload.items,
      };

    case FILTER_PRODUCTS_BY_VARIOUS:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };

    case FILTER_PRODUCTS_BY_SEARCH:
      return {
        ...state,
        letters: action.payload.letters,
        filteredItems: action.payload.items,
        // sort: action.payload.sort,
        // size: action.payload.size,
      };

    case SHOW_CHECKOUT:
      return {
        ...state,
        openForm: action.payload.openForm,
      };

    case MODAL:
      return {
        ...state,
        openModal: action.payload.openModal,
      };

    case BASKET_FORM:
      return {
        ...state,
        value: action.payload.value,
      };

    case ADD_CHECKOUT:
      return {
        ...state,
        checkout: [...state.checkout, action.payload],
      };

    case CLEAN_BASKET:
      return {
        ...state,
        checkout: action.payload.checkout,
        cartItems: action.payload.cartItems,
      };

    case FLY_UP_MY_SITE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default bikesReducer;
