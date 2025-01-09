"use client"
import Link from "next/link";
import EmptyState from "./_components/EmptyState";
import { Button } from "/components/ui/button";
import React, { useState } from "react";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl text-primary">Dashboard</h2>
        <Link href={"/dashboard/create-new"}><Button>+ Create New</Button></Link>

        {/* Empty state */}
      </div>
        {videoList.length === 0 && <div><EmptyState/></div>}
    </div>
  );
}

export default Dashboard;
