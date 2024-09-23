// This is for testing purposes only
import user from '@/assets/user.json';
import userMediaItems from '@/assets/userMedias.json';
import Profile from '@/components/profile/Profile';
import { MediaItem, UserWithNoPassword } from '@sharedTypes/DBTypes';

const Home = () => {
  console.log('user', user);
  console.log('userMediaItems', userMediaItems);
  return (
    <div>
      {user && (
        <Profile 
          user={user as unknown as UserWithNoPassword} 
          userMediaItems={userMediaItems as unknown as MediaItem[]}
        />
      )}
    </div>
  );
};

export default Home;
