import axios from "axios";
import { useEffect } from "react";

const Clues_page = () => {
  const Allowed_Clues_data = async () => {
    const clue_ids = await axios.get("http://locahost:3001/clue_id");
    const clue_data = await axios.post("http://locahost:3001/clue_data");
    console.log(clue_data);
  };
  useEffect(() => {
    Clues_page();
  }, []);
  return (
    <div className="cluepage">
      <button
        onClick={() => {
          Allowed_Clues_data();
        }}
      >
        Collect Clues From Office
      </button>
    </div>
  );
};

export default Clues_page;
