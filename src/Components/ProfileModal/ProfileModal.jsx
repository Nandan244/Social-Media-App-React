import { Modal, useMantineTheme } from '@mantine/core';
import React from 'react';

function ProfileModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={()=>setModalOpened(false)}
    >

    <form className="InfoForm">
        <h3>Your Info</h3>

        <div>
        
            <input
                type="text"
                className="infoInput"
                name='FirstName'
                placeholder="First Name"
            />
            <input
                type="text"
                className="infoInput"
                name='LastName'
                placeholder="Last Name"
            />
        </div>
        <div>
        <input
                type="text"
                className="infoInput"
                name='worksAt'
                placeholder="Works At"
            />
        </div>
        <div>
        <input
                type="text"
                className="infoInput"
                name='LivesIn'
                placeholder="Lives In"
            />
        <input
                type="text"
                className="infoInput"
                name='Country'
                placeholder="Country"
            />
        </div>
        <div>
        <input
                type="text"
                className="infoInput"
                name='RelationshipStatus'
                placeholder="Relationship Status"
            />
        </div>
        <div className='ImgUpload'>
            <h4>Profile Image</h4>
            <input className='file-btn' type="file" name="ProfileImg"/>
            
        </div>
        <div className="ImgUpload">
            <h4>Cover Image</h4>
            <input className='file-btn ' type="file" name="CoverImg"/>
        </div>
        <button className="button info-btn">Submit</button>
    </form>

    </Modal>
  );
}

export default ProfileModal;