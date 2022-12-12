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
        },
        // addClient(state, action){

        // },
        // editClient(state, action){

        //     // },
        deleteClient(state,action){
            //state.clients = state.clientsclickedToView[]
            state.selectedClient= {}
        },

        // clickedToView(state,action){
        //     if(_.isEqual({},state.selectedClient)){
        //         state.selectedClient =state.clients.filter(x => x.bracelectId === `${action.id}`); 
        //         console.log(state.selectedClient);
        //         state.isClientActive = true
        //     }

        //     if(_.isEqual(state.selectedClient, action.client)){
        //         state.selectedClient = action.client
        //         state.isClientActive = false
        //     }

        //      if(!_.isEqual(state.selectedClient, action.client)){
        //         state.selectedClient = action.client
        //     }
        // }

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
        /*clickedToView(state,action){
            console.log("SLICE OF HAND"+action.payload.client)
            if(_.isEqual({},state.selectedClient)){
                state.selectedClient = action.payload.client
                state.isClientActive = true
            }

            else if(_.isEqual(state.selectedClient, action.payload.client)){
                state.selectedClient = action.payload.client
                state.isClientActive = false
            }

            else if(!_.isEqual(state.selectedClient, action.payload.client)){
                state.selectedClient = action.payload.client
            }
        }*/
    }
}
)

export default clientSlice.reducer
export const {setClients,deleteClient,clickedToView} = clientSlice.actions
