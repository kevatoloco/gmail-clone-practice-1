import React from 'react';
import './EmailRow.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderOutlinedIcon  from '@mui/icons-material/StarBorderOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        })
        );
        navigate("./mail");
    };

    const mailTime = time.split(" ")[4] ? time.split(" ")[4].substring(1, 5) : '';


   return (
       <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">
                <CheckBoxOutlineBlankIcon />
                <StarBorderOutlinedIcon />
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow__description">
                        {"-"}{" "}{description}
                    </span>
                </h4>
            </div>

            <p className="emailRow__time">
                {mailTime}{" PM"}
            </p>

       </div>
   )
}


export default EmailRow;