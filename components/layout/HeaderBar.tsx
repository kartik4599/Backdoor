"use client";

import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import userStore from "@/hooks/user-store";
import { useEffect, useState } from "react";

const HeaderBar = () => {
  const userData = userStore((state) => state.userData);
  const [initials, setInitials] = useState("");

  useEffect(() => {
    if (!userData) return;
    const [firstword, secondword] = userData.name.split(" ");
    let word = "";
    if (firstword) word += firstword[0];
    if (secondword) word += secondword[0];
    setInitials(word);
  }, [userData]);

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <FiSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search passwords..."
          className="pl-8 pr-4 sm:w-[200px] md:w-[300px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="bg-primary text-background">
              {initials}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderBar;
