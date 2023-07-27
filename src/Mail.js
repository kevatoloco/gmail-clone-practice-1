import React from 'react';
import './Mail.css';
import ArrowBackIcon  from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon  from '@mui/icons-material/MoveToInbox';
import ErrorIcon  from '@mui/icons-material/Error';
import DeleteIcon  from '@mui/icons-material/Delete';
import EmailIcon  from '@mui/icons-material/Email';
import WatchLaterIcon  from '@mui/icons-material/WatchLater';
import CheckCircleIcon  from '@mui/icons-material/CheckCircle';
import LabelImportantIcon  from '@mui/icons-material/LabelImportant';
import MoreVertIcon  from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon  from '@mui/icons-material/UnfoldMore';
import PrintIcon  from '@mui/icons-material/Print';
import ExitToAppIcon  from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';

function Mail() {
    const navigate = useNavigate();


   return (
       <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <ArrowBackIcon onClick={() => navigate("/")} />
                    <MoveToInboxIcon />
                    <ErrorIcon />
                    <DeleteIcon />
                    <EmailIcon />
                    <WatchLaterIcon />
                    <CheckCircleIcon />
                    <LabelImportantIcon />
                    <MoreVertIcon />
                </div>
                <div className="mail__toolsRight">
                    <UnfoldMoreIcon />
                    <PrintIcon />
                    <ExitToAppIcon />
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>Subject</h2>
                    <LabelImportantIcon className="mail__important" />
                    <p>Title</p>
                    <p className="mail__time">10pm</p>
                </div>
                <div className="mail__message">
                    <p>This is a message</p>
                </div>
            </div>

       </div>
   )
}


export default Mail;