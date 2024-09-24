import RemoteProfile from 'profile/Profile';
import { useUserContext, useMediaContext } from 'mediastore/contextHooks';
import { MediaItem, UserWithNoPassword } from '@sharedTypes/DBTypes';


const Profile = () => {
  const { user } = useUserContext();
  const { userMediaItems } = useMediaContext();
  return (
  
      <RemoteProfile 
        user={user as unknown as UserWithNoPassword}
        userMediaItems={userMediaItems as unknown as MediaItem[]}
      />
    

  );
};

export default Profile;
