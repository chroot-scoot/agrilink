import { format } from 'date-fns';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Post } from '@/app/dashboard/community/data';

interface MailDisplayProps {
  mail: Post | null;
}

export function PostDislplay({ mail: post }: MailDisplayProps) {
  const today = new Date();

  return (
    <div className="flex h-fit flex-col">
      {post ? (
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar>
                <AvatarImage alt={post.name} />
                <AvatarFallback>
                  {post.name
                    .split(' ')
                    .map((chunk) => chunk[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{post.subject}</div>
                <div className="line-clamp-1 text-xs">{post.name}</div>
              </div>
            </div>
            {post.date && (
              <div className="ml-auto text-xs text-muted-foreground">
                {format(new Date(post.date), 'PPpp')}
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
            {post.text}
          </div>
          <Separator className="mt-auto" />
          <div className="z-10 p-4 pt-8">
            <form>
              <div className="grid gap-4">
                <Textarea className="p-4" placeholder="Reply..." />
                <div className="flex items-center">
                  <Label
                    htmlFor="mute"
                    className="flex items-center gap-2 text-xs font-normal"
                  >
                    <Switch id="mute" aria-label="Mute thread" /> Mute this
                    thread
                  </Label>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="ml-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No Post selected
        </div>
      )}
    </div>
  );
}
