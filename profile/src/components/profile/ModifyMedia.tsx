import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MediaItem } from '@sharedTypes/DBTypes';
import { useState } from 'react';
import { LuPen } from 'react-icons/lu';
// import useMedia from mediastore mfe
import { useMediaContext  } from 'mediastore/contextHooks';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useForm } from '@/hooks/formHooks';



const ModifyMedia = (props: {
  mediaItem: MediaItem
  // refreshMedia: () => void;
}) => {
  const { mediaItem } = props;

  const [open, setOpen] = useState(false);
  const { updateMediaItem } = useMediaContext();

  const initValues: Pick<MediaItem, 'title' | 'description'> & {
    tags: string;
  } = {
    title: mediaItem.title,
    description: mediaItem.description,
    tags: mediaItem.tags.join(', '),
  };

  const doModify = async () => {
    console.log(inputs);
    try {
      console.log(inputs);
      await updateMediaItem(mediaItem, inputs);

      setOpen(false);
    } catch (error) {
      console.error('update  failed', error);
    }
  };

  const { handleSubmit, handleInputChange, inputs } = useForm(
    doModify,
    initValues,
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <LuPen className="h-5 w-5" />
        <span className="sr-only">Delete</span>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Modify your video details.</DialogTitle>
        <DialogDescription>
          Change the title, description, or tags for your video.
        </DialogDescription>
        <form onSubmit={handleSubmit}>
        <Card>
            <CardContent className="space-y-4 px-6 py-8">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  value={inputs.title}
                  placeholder="Title for your video"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  value={inputs.description}
                  placeholder="Description for your video"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  type="text"
                  name="tags"
                  id="tags"
                  value={inputs.tags}
                  placeholder="Tags for your video"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />
              </div>
            </CardContent>
          </Card>
          <DialogFooter>
            <Button variant="ghost">Save</Button>
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ModifyMedia;
