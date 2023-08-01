import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function SendMail() {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    
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
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='To' type="email" id="to" {...register("to", { required: { value: true, message: "To is required", },})}/>
                <p className="sendMail__error">{errors.to?.message}</p>

                <input placeholder='Subject' type="text" id="subject" {...register("subject", { required: { value: true, message: "Subject is required", },})}/>
                <p className="sendMail__error">{errors.subject?.message}</p>

                <input placeholder='Message' type="text" id="message" {...register("message", { required: { value: true, message: "Message is required", },})}/>
                <p className="sendMail__error">{errors.message?.message}</p>


                <div className="sendMail__options">
                    <Button 
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send</Button>
                    </div>
            </form>
       </div>
   )
}


export default SendMail;