import axios from "axios";
import "../assets/css/clues_portal.css"
import { useEffect } from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { cookie,Cookies,useCookies } from "react-cookie";
axios.defaults.withCredentials = true;
const Clues_page = () => {
  const datac = Cookies.get('islogedin');
  // document.body.style.backgroundColor ="linear-gradient(to right, #Ec4899, #8B5CF6);"
  const [cluesdata, setCluesdata] = useState()
  const Allowed_Clues_data =  async() => {
    const clue_ids = await axios.post("https://twosome-conundrum.cyclic.app/clue_id",datac).then((res)=>{
      console.log(res.data);
      setCluesdata(res.data.data);
    })  
  }
  useEffect(() => {
    Allowed_Clues_data();
  }, []);
  return (
    <div className="cluepage">
      <div className="clue_button">
      <button
         onClick={() => { 
           Allowed_Clues_data();
          }}
          className="cluefetch_button"
          >
        Collect Clues
      </button>
        </div>
        <div className="card_content">
          {cluesdata && cluesdata.map((value)=>{
            return(
              <Card  className="card_border" >
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{value.name}</Card.Title>
                <Card.Text>
                  {value.description}
                </Card.Text>
                <Button variant="primary"><a href="#">Show Clue</a></Button>
              </Card.Body>
            </Card>

            )

          })}
   
    
    </div>
      {/* {cluesdata && <div>
        skjfdlk
        </div>} */}
    </div>
  );
}

export default Clues_page;
