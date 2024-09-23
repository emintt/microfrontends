import UserInfo from './UserInfo';
// import FormSwitch from './FormSwitch';
import { MediaItem, UserWithNoPassword } from '@sharedTypes/DBTypes';

const Profile = ( props: { user: UserWithNoPassword, userMediaItems: MediaItem[]}) => {
  const { user, userMediaItems } = props;
  console.log(user);

  return (
    <main className="p-4">
      <div className="w-full max-w-3xl mx-auto">
        {/* {user ? <UserInfo /> : <FormSwitch />} */}
        {user ? <UserInfo user={user} userMediaItems={userMediaItems}/> : <div>ei ole user</div>}

      </div>
    </main>
  );
};

export default Profile;
