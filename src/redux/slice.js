import {createSlice} from "@reduxjs/toolkit";
import _ from 'lodash';
import {list} from "../components/ClientList/list";

const clientSlice = createSlice({
    name: "client",
    initialState :{
        clients: [...list],
        selectedClient : {},
        isClientActive: false
    },
    reducers: {
        setClients(state,action){
            state.clients = [...action.payload]
            console.log(action.payload);
        },
        
        deleteClient(state,action){
            //state.clients = state.clientsclickedToView[]
            state.selectedClient= {}
        },

        clickedToView(state,action){
            if(_.isEqual({},state.selectedClient)){
                state.selectedClient = action.payload
                state.isClientActive = true
            }

            else if(_.isEqual(state.selectedClient, action.payload)){
                state.selectedClient = {}
                state.isClientActive = false
            }

            else if(!_.isEqual(state.selectedClient, action.payload)){
                state.selectedClient = action.payload
                //state.isClientActive = true
            }
        }
        // addClient(state, action){

        // },
        // editClient(state, action){

        //     // },
    }
}
)

export default clientSlice.reducer
export const {setClients,deleteClient,clickedToView} = clientSlice.actions
