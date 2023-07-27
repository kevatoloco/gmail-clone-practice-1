import React from 'react';
import './EmailRow.css';
import Checkbox from '@material-ui/core/Checkbox';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import StarBorderOutlinedIcon  from '@mui/icons-material/StarBorderOutlined';
import { useNavigate } from 'react-router-dom';

function EmailRow({ id, title, subject, description, time }) {
    const navigate = useNavigate();


   return (
       <div onClick={() => navigate("/mail")} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <StarBorderOutlinedIcon />
                <LabelImportantOutlinedIcon />
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow__description">
                        {description}
                    </span>
                </h4>
            </div>

            <p className="emailRow__description">
                {time}
            </p>

       </div>
   )
}


export default EmailRow;