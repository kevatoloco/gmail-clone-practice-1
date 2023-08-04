import React, { useEffect, useState } from 'react';
import './EmailList.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailRow from './EmailRow.js';
import { db } from './firebase';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';

function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot(
            snapshot => setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }))
            )
        );
    }, []);

   return (
       <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <div className="emailList__settingsCheckbox">
                        <CheckBoxOutlineBlankIcon />
                        <ArrowDropDownIcon/>
                    </div>
                    <RefreshOutlinedIcon />
                    <MoreVertIcon />
                </div>
                <div className="emailList__settingsRight">
                    <ChevronLeftIcon />
                    <ChevronRightIcon />
                    <div className="emailList__settingsKeyboard">
                        <KeyboardIcon />
                        <ArrowDropDownIcon />
                    </div>
                </div>
            </div>
        <div className="emailList__sections">
            <Section Icon={InboxIcon} title='Primary' color='#0b57d0' selected />
            <Section Icon={LocalOfferOutlinedIcon} title='Promotions' />
            <Section Icon={PeopleOutlinedIcon} title='Social' />

        </div>

        <div className="emailList__list">
            {emails.map(({id, data: { to, subject, message, timestamp
            } }) => (
                <EmailRow 
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString().split(" ")[4]}
                />
            ))}
        </div>
       </div>
   )
}


export default EmailList;