import React from 'react';
import './Mail.css';
import ArrowBackOutlinedIcon  from '@mui/icons-material/ArrowBackOutlined';
import MoveToInboxOutlinedIcon  from '@mui/icons-material/MoveToInboxOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlinedIcon  from '@mui/icons-material/DeleteOutlined';
import EmailOutlinedIcon  from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon  from '@mui/icons-material/WatchLaterOutlined';
import CheckCircleOutlinedIcon  from '@mui/icons-material/CheckCircleOutlined';
import MoreVertOutlinedIcon  from '@mui/icons-material/MoreVertOutlined';
import PrintOutlinedIcon  from '@mui/icons-material/PrintOutlined';
import ExitToAppOutlinedIcon  from '@mui/icons-material/ExitToAppOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import { useNavigate } from 'react-router-dom';
import { selectOpenMail } from './features/mailSlice';
import { useSelector } from 'react-redux';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import { Avatar } from '@material-ui/core';
import { selectUser } from './features/userSlice';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';


function Mail() {
    const navigate = useNavigate();
    const selectedMail = useSelector(selectOpenMail);
    const user = useSelector(selectUser);

   return (
       <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <ArrowBackOutlinedIcon onClick={() => navigate("/")} />
                    <MoveToInboxOutlinedIcon />
                    <ReportGmailerrorredOutlinedIcon />
                    <DeleteOutlinedIcon />
                    <div className="vl"></div>
                    <EmailOutlinedIcon />
                    <WatchLaterOutlinedIcon />
                    <CheckCircleOutlinedIcon />
                    <div className="vl"></div>
                    <DriveFileMoveOutlinedIcon />
                    <LabelOutlinedIcon />
                    <MoreVertOutlinedIcon />
                </div>
                <div className="mail__toolsRight">
                    <ChevronLeftIcon />
                    <ChevronRightIcon />
                    <div className="mail__toolsKeyboard">
                        <KeyboardIcon />
                        <ArrowDropDownIcon />
                    </div>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                   <div className="mail__bodyHeaderRight">
                        <UnfoldLessOutlinedIcon />
                        <PrintOutlinedIcon />
                        <LaunchOutlinedIcon />
                    </div>
                </div>
                <div className="mail__to">
                    <Avatar className="mail__avatar" src={user?.photoURL} />
                    <h5 className="mail__title">{selectedMail?.title}</h5>
                    <p className="mail__time">{selectedMail?.time}</p>
                    <div className="mail__toRight">
                        <StarBorderOutlinedIcon />
                        <UndoOutlinedIcon />
                        <MoreVertOutlinedIcon />
                    </div>      
                </div>
                <p className="mail__toText">to me</p>
                <div className="mail__message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>

       </div>
   )
}


export default Mail;