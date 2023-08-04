import React from 'react';
import './Widgets.css';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';



function Widgets() {

  return (
    <div className="widgets">

          <img src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="" />
          <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="" />
          <img src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png" alt="" />
          <img src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png" alt="" />
          <hr />
          <AddOutlinedIcon />
          
    </div>

  );
}

export default Widgets;