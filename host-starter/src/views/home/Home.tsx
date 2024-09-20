// Import the Front component from the front_and_sidebar mfe
import { MediaContextType } from '@sharedTypes/DBTypes';
import Front from 'front_and_sidebar/Front';
// Import the useMediaContext hook from the mediastore mfe
import { useMediaContext } from 'mediastore/contextHooks';

const Home = () => {
  // Use the useMediaContext hook to get the mediaItems
  const { mediaItems } = useMediaContext() as MediaContextType;
  // Pass the mediaItems to the Front component
  return (
    <div>{mediaItems && <Front mediaItems={mediaItems} />}</div>
  )  
};

export default Home;
