import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import styled from 'styled-components';
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
//import { collection, addDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { enterRoom } from '../features/appSlice';
function SidebarOption({ Icon, title, addChannelOption, id }: any) {
    const dispatch = useDispatch();
    const channelsRef = collection(db, 'rooms');
    //const [channels, loading, error] = useCollection(channelsRef);
  const addChannel = () => {
    const channelName= prompt('Please enter the channel name')
    
       /*if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            });
        } */

        if (channelName) {
            addDoc(channelsRef, {
              name: channelName,
            });
          }
    }
    const selectChannel = () => {
        if (id) {
          dispatch(enterRoom({
            roomId: id
          }))
        }
      }

  return (
    <SidebarOptionContainer
     
      onClick={addChannelOption ? addChannel : selectChannel}

      >
      { Icon && <Icon fontsize="small" style={{padding:10 }} />}
      {Icon ? (
        <h3>{title}</h3>
    ): (
        <SidebarOptionChannel>
            <span>#</span> {title}
        </SidebarOptionChannel>

    )}
    </SidebarOptionContainer>
  );
}
export default SidebarOption

const SidebarOptionChannel = styled.h3`
padding: 10px 0;
font-weight: 300;

`;

const SidebarOptionContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;

:hover {
    opacity: 0.9;
    background-color: #340e36;
}

> h3 {
    font-weight: 500;
}

> h3 > span {
    padding: 15px
}
`;

