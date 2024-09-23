import UserInfo from './UserInfo';
import FormSwitch from './FormSwitch';
import { MediaItem, UserWithNoPassword } from '@sharedTypes/DBTypes';


const Profile = ( props: { user: UserWithNoPassword; handleLogout: () => void; userMediaItems: MediaItem[]} ) => {

  const { user, userMediaItems, handleLogout } = props;
  console.log(user);

  return (
    // <main className="p-4">
    //   <div className="w-full max-w-3xl mx-auto">
      <>{user 
          ? <UserInfo 
              user={user as unknown as UserWithNoPassword} 
              userMediaItems={userMediaItems as unknown as MediaItem[]}
              handleLogout={handleLogout as () => void} 
            /> 
          : <FormSwitch />}
      </>

    //   </div>
    // </main>
  );
};

export default Profile;
