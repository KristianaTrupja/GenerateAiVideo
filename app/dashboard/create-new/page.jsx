"use client";
import React, { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "/components/ui/button";
import axios from "axios";
import CustomLoading from "./_components/CustomLoading";
import { v4 as uuidv4 } from "uuid";

const scriptData =
  "Narrator: Deep in the woods, stood an old cabin, forgotten by time. Narrator: Twisted trees surrounded it, their branches like grasping claws. Narrator: Locals whispered of a presence... something watching in the night. Narrator: A swing set creaked in the dark, a silent invitation. Narrator: But the cabin itself...held a different terror. Narrator: Down a long hallway, the air grew cold and heavy. Narrator: Whispers of a child's presence, their story etched on the walls... Narrator: And a rocking chair that moved, even with no one near. Narrator: A gaze from the shadows, hidden beneath the bed. Narrator: Then, the door opened… and a giggle echoed. Narrator: It was beckoning someone, to come… and play.";
function CreateNew() {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState();
  const handleInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  //Get Video Script
  const onCreateClickHendler = () => {
    // GetVideoScript();
    GenerateAudioFile(scriptData)
  };
  const GetVideoScript = async () => {
    setLoading(true);
    const prompt =
      "Write a script to generate " +
      formData.duration +
      " video on topic: " +
      formData.topic +
      " along with AI image prompt in " +
      formData.imageStyle +
      " format for each scene and give me result in JSON format with imagePrompt and ContentText as field, no Plain text";

    const result = await axios
      .post("/api/get-video-script", {
        prompt: prompt,
      })
      .then((resp) => {
        console.log(resp.data.result);
        setVideoScript(resp.data.result);
        GenerateAudioFile(resp.data.result);
      });
    console.log(prompt, result, "result");
    setLoading(false);
  };

  const GenerateAudioFile = async (videoScriptData) => {
    setLoading(true);
    let script = "";
    const id = uuidv4();
    // videoScriptData.forEach((item) => {
    //   script = script + item.ContentText + " ";
    // });
    console.log(script, "script");

        await axios.post('/api/generate-audio',{
          text: videoScriptData,
          id: id
        }).then((resp)=>{
    console.log(resp);

        })
        setLoading(false);
  };
  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-primary text-center">
        Create New
      </h2>
      <div className="mt-10 shadow-md p-10">
        {/* Select Topic */}
        <SelectTopic onUserSelect={handleInputChange} />
        {/* Select Style */}
        <SelectStyle onUserSelect={handleInputChange} />
        {/* Duration */}
        <SelectDuration onUserSelect={handleInputChange} />
        {/* Create Button */}
        <Button className="mt-10 w-full" onClick={onCreateClickHendler}>
          Create Short Video
        </Button>
      </div>
      <CustomLoading loading={loading} />
    </div>
  );
}

export default CreateNew;
