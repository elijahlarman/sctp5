import { Button } from "@material-ui/core";
import React, { RefObject, useRef } from 'react';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import { collection, addDoc, doc, Timestamp } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
    > input {
      position: fixed;
      bottom: 30px;
      width: 60%;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
      outline: none;
    }
    > button {
      display: none !important;
    }
  }
`;

const ChatInput = ({channelName, channelId, chatRef}: {channelName: string, channelId: string,
chatRef: RefObject<HTMLDivElement>}) => {
  const [input, setInput] = useState('');
  const [user] = useAuthState(auth);
  const displayName = user?.displayName;
  const photoURL = user?.photoURL;
  
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }
    
    const channelMessages = doc(db, 'rooms', channelId);
    const messagesRef = collection(channelMessages, "messages");
    addDoc(messagesRef, {
      message: input,
      timestamp: Timestamp.now(),
      //user: user.displayName,
      //userImage: user.photoURL
      user: displayName,
      userImage: photoURL,
    });
    
    chatRef.current?.scrollIntoView({
      behavior: "smooth",
    });
    setInput('');
  }

  return (
    <ChatInputContainer>
      <form>
        <input value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder={`Message #${channelName}`} />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput;