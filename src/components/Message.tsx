import styled from 'styled-components';
import React from 'react';



const Message = ({message, timestamp, user, userImage}: {message: string, timestamp: any, user: string, userImage: string}) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="profile image" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  )
};

export default Message;

const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    height: 50px;
    border-radius: 8px;
  }
`;
