import React from "react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "/components/ui/alert-dialog"
  import Image from "next/image";

function CustomLoading({loading}) {
  return (
    <div>
    <AlertDialog open={loading}>
  <AlertDialogContent>
   <div className="flex flex-col items-center my-10 justify-center">
    <Image src={'/loading.gif'} width={100} height={100} alt="loading"/>
    <h2>Generating video... Do not Refresh</h2>
   </div>
  </AlertDialogContent>
</AlertDialog>

    </div>
  );
}

export default CustomLoading;
