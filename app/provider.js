"use client"
import { Users } from "/configs/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";
import { db } from "/configs/db";

function Provider({ children }) {
  const { user } = useUser();
  useEffect(() => {
    user && isNewUser();
  }, [user]);

  const isNewUser = async () => {
    const result = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));
      console.log(result,"result",user,"user",user.fullName,Users,"db",db);
      
    if (!result[0]) {
      await db.insert(Users).values({
        name: user.fullName || "Kristiana",
        email: user?.emailAddresses?.emailAddress || "Trupja",
        imageUrl: user?.imageUrl || "url:test",
      });
    }
  };
  return <div>{children}</div>;
}

export default Provider;
