import clue_data from "./clue_id";
import participant_data from "./participants";
import { useState } from "react";
import axios from "axios"
import swal from "sweetalert";
// import {REQUEST_URL} from "./clue_id"
axios.defaults.withCredentials = true;
const Admin_clue_auth = () => {
    const [Leader_email, setLeader_email] = useState("");
    let optionParticipants = participant_data.map((item) =>
        <option key={item.email} value={item.email}>{item.no}</option>
    );
    const [allowclueid, setAllowclueid] = useState("")
    // console.log(clue_data)
    // console.log(REQUEST_URL);
    let optionItems = clue_data.map((item) =>
        <option key={item.id} value={item.id}>{item.name}</option>
    );
    const Clue_allow=async (e)=>{
        e.preventDefault();
        const clue_aloow_data={
            Leader_email,
            allowclueid
        }
        const data_for_allow=await axios.patch("https://twosome-conundrum.cyclic.app/admincluehandler",clue_aloow_data)
        if(data_for_allow.data.allowed===true){
            swal({
                title: "Congratulations!",
                text: `${data_for_allow.data.message}`,
                icon: "success",
              });
        }
        else{
            swal({
                title: "OOPS!",
                text: `${data_for_allow.data.message}`,
                icon: "error",
              });
        }
        console.log(Leader_email)
        console.log(allowclueid)
    }
    return ( 
        <form>
            <label>Leader_email</label>
            {/* <input type="text" placeholder="Input Leader Email" onChange={(e)=>{
                setLeader_email(e.target.value);
            }}/> */}
            <select name="participant_data" id="participant_selection" onChange={(e)=>{
                setLeader_email(e.target.value)
            }}>
                <option>--Select--</option>
                {optionParticipants}
            </select>
            <label>Allow Clue</label>
            <select name="clues_data" id="clue_selection" onChange={(e)=>{
                setAllowclueid(e.target.value)
            }}>
                <option>--Select--</option>
                {optionItems}
            </select>
            <button onClick={(e)=>{
                Clue_allow(e);
            }}>Allow</button>
        </form>
     );
}
 
export default Admin_clue_auth;