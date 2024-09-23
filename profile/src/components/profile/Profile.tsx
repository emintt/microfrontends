import UserInfo from './UserInfo';
import FormSwitch from './FormSwitch';
import { MediaItem, UserWithNoPassword } from '@sharedTypes/DBTypes';
import { useUserContext, useMediaContext } from 'mediastore/contextHooks';


const Profile = ( ) => {
  const { user, handleLogout } = useUserContext();
  const { userMediaItems } = useMediaContext();

  console.log(user);

  return (
    <main className="p-4">
      <div className="w-full max-w-3xl mx-auto">
        {user 
          ? <UserInfo 
              user={user as unknown as UserWithNoPassword} 
              userMediaItems={userMediaItems as unknown as MediaItem[]}
              handleLogout={handleLogout as () => void} 
            /> 
          : <FormSwitch />}

      </div>
    </main>
  );
};

export default Profile;
