import { createSlice } from "@reduxjs/toolkit";
import {db,app} from "../Firebase";

import { collection,addDoc,getDoc } from "firebase/firestore";


const data = {

domaine :"valere",
facebook :"valere ",
github :"https://github.com/",
linkedin: "https://web.whatsapp.com/",
nom :"Fv Dev.",
portfolio: "Under Contruction",
profil :"not yet",
twitter :"https://twitter.com/" 
}

function AddTec(data) {
    try {
        const docref = addDoc(collection(db, 'techpages'), data);
        console.log("Document add with ",docref.id)
    } catch (error) {
        console.log(error)
    }}
const devSlice = createSlice(
    {
        name: "TechMember",
        initialState: [],
        reducers: {
            // InterAction possible avec mon  etat 
            addProfil: (state,action) => { },
            RemoveProfil:()=>{}
        }
    }
)
export {data,AddTec}