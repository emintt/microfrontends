import { LuLogOut, LuMail } from 'react-icons/lu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import ProfileThumbnail from './ProfileThumbnail';
// import useUserContext from mediastore mfe
import { useUserContext } from 'mediastore/contextHooks';
import { MediaItem, UserWithNoPassword } from '@sharedTypes/DBTypes';

const UserInfo = ( 
  props: { 
    user: UserWithNoPassword, 
    userMediaItems: MediaItem[], 
  }
  ) => {

  const { user, userMediaItems } = props;
  const { handleLogout } = useUserContext();

  console.log('userMediaItems', userMediaItems);

  return (
    <>
      {user && (
        <>
          <div className="bg-muted rounded-t-lg p-6 flex items-center gap-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 flex-1">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{user.username}</h1>
                <Button onClick={handleLogout} className="rounded-full">
                  Logout &nbsp;
                  <LuLogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-b-lg p-6 grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-lg font-semibold">Contact</h2>
              <div className="grid gap-1 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <LuMail className="h-5 w-5" />
                  <span>{user.email}</span>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <h2 className="text-lg font-semibold">Videos</h2>
              <div className="flex flex-wrap">
                {userMediaItems &&
                  userMediaItems.map((mediaItem: MediaItem) => (
                    <ProfileThumbnail
                      key={mediaItem._id}
                      mediaItem={mediaItem}
                    />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserInfo;
