import { getType } from "typesafe-actions";
import * as actions from "../actions";

export interface IWalletConnectionState {
  wallet_connection: boolean;
  account_address: string;
}

export const initialState: any = {
  wallet_connection: false,
  account_address: "",
  // add here.
};

const states = (state = initialState, action: any) => {
  console.log(action.payload);
  switch (action.type) {
    case getType(actions.updateWalletConnection):
      return {
        ...state,
        wallet_connection: action.payload.connection_state,
        account_address: action.payload.account_address,
      };

    // add here.
    default:
      return state;
  }
};

export default states;
