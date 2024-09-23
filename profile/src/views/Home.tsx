// This is for testing purposes only
// import user from '@/assets/user.json';
import Profile from '@/components/profile/Profile';
import { useUserContext, useMediaContext } from 'mediastore/contextHooks';


const Home = () => {
  const { user, handleLogout } = useUserContext();
  const { userMediaItems } = useMediaContext();
  return (
    <Profile 
      user={user}
      userMediaItems={userMediaItems}
      handleLogout={handleLogout}
    />
  );
};

export default Home;
