import { createContext, useContext, useReducer, ReactNode } from 'react';

interface Chef {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  cuisine: string;
  menu: MenuItem[];
  rating: number;
  deliveryTime: string;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface CartItem {
  chefId: string;
  itemId: string;
  quantity: number;
  price: number;
  name: string;
}

interface Order {
  id: string;
  chefId: string;
  items: CartItem[];
  status: 'pending' | 'accepted' | 'preparing' | 'ready' | 'delivered';
  total: number;
  deliveryAddress: string;
  timestamp: number;
}

interface AppState {
  chefs: Chef[];
  cart: CartItem[];
  orders: Order[];
  currentLocation: string;
}

type Action =
  | { type: 'ADD_CHEF'; payload: Chef }
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: { chefId: string; itemId: string } }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { chefId: string; itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_ORDER'; payload: Order }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { orderId: string; status: Order['status'] } }
  | { type: 'SET_LOCATION'; payload: string };

const initialState: AppState = {
  chefs: [],
  cart: [],
  orders: [],
  currentLocation: '',
};

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ADD_CHEF':
      return {
        ...state,
        chefs: [...state.chefs, action.payload],
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(
          item => !(item.chefId === action.payload.chefId && item.itemId === action.payload.itemId)
        ),
      };
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.chefId === action.payload.chefId && item.itemId === action.payload.itemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case 'UPDATE_ORDER_STATUS':
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload.orderId
            ? { ...order, status: action.payload.status }
            : order
        ),
      };
    case 'SET_LOCATION':
      return {
        ...state,
        currentLocation: action.payload,
      };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}