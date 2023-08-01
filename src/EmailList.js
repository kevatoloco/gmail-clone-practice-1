import React, { useEffect, useState } from 'react';
import './EmailList.css'
import { Checkbox } from '@material-ui/core';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import EmailRow from './EmailRow.js';
import { db } from './firebase';


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
                    <Checkbox />
                    <ArrowDropDownIcon/>
                    <RedoIcon />
                    <MoreVertIcon />
                </div>
                <div className="emailList__settingsRight">
                    <ChevronLeftIcon />
                    <ChevronRightIcon />
                    <KeyboardHideIcon />
                    <SettingsIcon />
                </div>
            </div>
        <div className="emailList__sections">
            <Section Icon={InboxIcon} title='Primary' color='red' selected />
            <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
            <Section Icon={LocalOfferIcon} title='Promotions' color='green' />

        </div>

        <div className="emailList__list">
            {emails.map(({id, data: { to, subject, message, timeStamp
            } }) => (
                <EmailRow 
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timeStamp?.seconds * 1000).toUTCString()}
                />
            ))}
            <EmailRow 
                title="Twitch"
                subject="Hey fellow streamter"
                description="This is a test"
                time="10pm"
            />
        </div>
       </div>
   )
}


export default EmailList;