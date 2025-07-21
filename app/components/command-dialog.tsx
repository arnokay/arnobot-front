import { IconPlus } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type Command = {
  id: string;
  name: string;
  description: string;
  cooldown: number;
};

type CommandDialogCommonArgs = {
  command: Command;
};

export type CommandDialogArgs = {
  type: "create";
} | {
  type: "edit";
} & CommandDialogCommonArgs;

export default function CommandDialog(args: CommandDialogArgs) {
  let commandName = "";
  let commandDescription = "";
  let commandCooldown: number = 5;
  if(args.type === "edit") {
    commandName = args.command.name;
    commandDescription = args.command.description;
    commandCooldown = args.command.cooldown;
  }
  return (
    <Dialog>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {args.type === "create" ? "Add Command" : "Edit Command"}
            </DialogTitle>
            <DialogDescription>
              Make changes to your command here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="commandName">Command Name</Label>
              <Input id="commandName" placeholder="-1" defaultValue={commandName} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cooldown">Cooldown (seconds)</Label>
              <Input id="cooldown" type="number" placeholder="30" defaultValue={commandCooldown} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="response">Response</Label>
            <Textarea id="response" placeholder="OMEGALUL missed" rows={3} defaultValue={commandDescription} />
          </div>
          <Button type="submit">Create IconCommand</Button>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
