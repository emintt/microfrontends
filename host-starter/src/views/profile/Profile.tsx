import RemoteProfile from 'profile/Profile';
import { useUserContext, useMediaContext } from 'mediastore/contextHooks';
import { MediaItem, UserWithNoPassword } from '@sharedTypes/DBTypes';


const Profile = () => {
  const { user, handleLogout } = useUserContext();
  const { userMediaItems } = useMediaContext();
  return (
    <main className="p-4">
    <div className="w-full max-w-3xl mx-auto">
      <RemoteProfile 
        user={user as unknown as UserWithNoPassword}
        userMediaItems={userMediaItems as unknown as MediaItem[]}
        handleLogout={handleLogout as unknown as () => void}
      />
    
    </div>
    </main>
  );
};

export default Profile;
