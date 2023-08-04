import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import MinimizeOutlinedIcon from '@mui/icons-material/MinimizeOutlined';
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function SendMail() {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }} = useForm();
    
    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add({
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
           })

           dispatch(closeSendMessage());
    };

   return (
       <div className="sendMail">
            <div className="sendMail__header" onClick={() => dispatch(closeSendMessage())}>
                <h3>New Message</h3>
                <div className="sendMail__headerRight">
                    <MinimizeOutlinedIcon />
                    <OpenInFullOutlinedIcon />
                    <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
                </div>
                
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder='Recipients' type="email" id="to" {...register("to", { required: { value: true, message: "Recipient is required", },})}/>
                <p className="sendMail__error">{errors.to?.message}</p>

                <input placeholder='Subject' type="text" id="subject" {...register("subject", { required: { value: true, message: "Subject is required", },})}/>
                <p className="sendMail__error">{errors.subject?.message}</p>

                <input className="sendMail__message" type="text" id="message" {...register("message", { required: { value: true, message: "Message is required", },})}/>
                <p className="sendMail__error">{errors.message?.message}</p>


                <div className="sendMail__options">
                    <div className="sendMail__optionsLeft">
                        <Button 
                            className="sendMail__send"
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Send{<hr style={{
                                borderLeft: `1x solid #000000`,
                                height: `23px`,
                                marginLeft: `15px`,
                                marginRight: `5px`
                                }} />}{<ArrowDropDownOutlinedIcon/>}
                        </Button>
                        <FormatColorTextOutlinedIcon />
                        <AttachFileOutlinedIcon />
                        <InsertLinkOutlinedIcon />
                        <TagFacesOutlinedIcon />
                        <AddToDriveIcon />
                        <InsertPhotoOutlinedIcon />
                        <LockClockOutlinedIcon />
                        <DrawOutlinedIcon />
                        <MoreVertOutlinedIcon />
                    </div>

                    <div className="sendMail__optionsRight">
                        <DeleteOutlineOutlinedIcon onClick={() => dispatch(closeSendMessage())} />
                    </div>  
                    
                </div>
            </form>
       </div>
   )
}


export default SendMail;