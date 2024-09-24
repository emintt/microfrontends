// This is for testing purposes only
// import user from '@/assets/user.json';
import Profile from '@/components/profile/Profile';
import { useUserContext, useMediaContext } from 'mediastore/contextHooks';


const Home = () => {
  const { user } = useUserContext();
  const { userMediaItems } = useMediaContext();
  return (
    <Profile 
      user={user}
      userMediaItems={userMediaItems}
    />
  );
};

export default Home;
