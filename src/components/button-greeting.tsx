"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { Hand } from "lucide-react";
import { toast } from "sonner";

export function ButtonGreeting() {
  const [name, setName] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.warning("Name is required.");
      return;
    }

    toast(`Hello, ${name}!`, {
      description: "Nice to meet you!",
    });

    setOpen(false);
    setName("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button size="lg" className="w-full">
            <Hand className="rotate-45" />
            Greetings
          </Button>
        }
      ></DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>What is your name?</DialogTitle>
            <DialogDescription>
              Enter your name to receive a personalized greeting.
            </DialogDescription>
          </DialogHeader>

          <div className="w-full space-y-2 py-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="e.g. Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
