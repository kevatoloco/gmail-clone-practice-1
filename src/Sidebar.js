import React, { useState } from 'react';
import './Sidebar.css';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarOption from "./SidebarOption";
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Sidebar() {
    const dispatch = useDispatch();

    const [showMore, setShowMore] = useState(false);

    const toggleReadMoreLess = () => {
      setShowMore(!showMore);
    };  

   return (
       <div className="sidebar">
            <Button 
            startIcon={<AddIcon fontSize='large'/>} 
            className="sidebar__compose"
            onClick={() => dispatch(openSendMessage())} 
            >
                Compose
            </Button>
       
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarBorderOutlinedIcon} title="Starred" selected={false} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" selected={false} />
            <SidebarOption Icon={SendOutlinedIcon} title="Sent" selected={false} />
            <SidebarOption Icon={NoteOutlinedIcon} title="Drafts" number={5} selected={false} />
            <div className="sidebar__more" onClick={toggleReadMoreLess}> 
                {showMore ? <SidebarOption Icon={KeyboardArrowUpIcon} title="Less" selected={false} /> 
                 : <SidebarOption Icon={ExpandMoreIcon} title="More" selected={false}/>}
            </div>

            {showMore && (
                <div>
                    <SidebarOption Icon={LabelImportantOutlinedIcon} title="Important" selected={false} />
                    <SidebarOption Icon={ChatOutlinedIcon} title="Chats" selected={false} />
                    <SidebarOption Icon={ScheduleSendOutlinedIcon} title="Scheduled" selected={false} />
                    <SidebarOption Icon={MarkAsUnreadOutlinedIcon} title="All Mail" selected={false} />
                    <SidebarOption Icon={ReportGmailerrorredOutlinedIcon} title="Spam" selected={false} />
                    <SidebarOption Icon={DeleteOutlineOutlinedIcon} title="Trash" selected={false} />
                    <SidebarOption Icon={LabelOutlinedIcon} title="Categories" selected={false} />
                    <SidebarOption Icon={SettingsOutlinedIcon} title="Manage labels" selected={false} />
                    <SidebarOption Icon={AddOutlinedIcon} title="Create new label" selected={false} />
                </div>
            )}

            <div className="sidebar__bottom">
                <p>Labels</p>
                <AddOutlinedIcon />
            </div>
       </div>
   )
}


export default Sidebar