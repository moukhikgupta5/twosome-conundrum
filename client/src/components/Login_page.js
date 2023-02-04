import axios from "axios";
import "../assets/css/login_page.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useEffect } from "react";

axios.defaults.withCredentials = true;
const Login_form = () => {
    const [Leader_email, setLeader_email] = useState("");
    const [Password, setPassword] = useState("");
const navigate=useNavigate();
    const login_handler=async (e)=>{
        e.preventDefault();
        const login_data={
            Leader_email,
            Password
        }
        console.log(login_data);
        const login_respo=await axios.post("https://twosome-conundrum.cyclic.app/login",login_data);   
        console.log(login_respo);
        if(login_respo.data.allow===true){
            console.log("navigating");
            navigate("/clues_panel");
        }
        else{
            swal({
                title: "OOPS!",
                text: "Wrong details",
                icon: "error",
              });
        }
    }
    const Check_login=async()=>{
        console.log("sdiufh")

        const login_respo=await axios.get("https://twosome-conundrum.cyclic.app/login_auth");
        console.log(login_respo);
        if(login_respo.data.allow===true){
            console.log("navigating");
            navigate("/clues_panel");
        }
    }
    useEffect(() => {
        Check_login();
        console.log("sdiufh")
        }, [])
    
    
    return ( 
        <div className="login_page">
            <form className="login_form">
                <h1>Twosome Conorundum</h1>
                <label>
                    Team Leader
                </label>
                <input type="text"  className="leader_email" placeholder="Registered Email" onChange={(e)=>{
                    setLeader_email(e.target.value);
                }} />
                <label>
                    Password
                </label>
                <input type="text"  className="password_for_login" placeholder="Registered Team Password "
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} />
                <button className="submit_login" onClick={(e)=>{
                    login_handler(e);
                }}>Submit</button>
            </form>
         </div>
     );
}
 
export default Login_form;