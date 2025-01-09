const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Write a script to generate 30 seconds video on topic :Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "imagePrompt": "A bustling marketplace in ancient Rome, filled with people in togas, vendors selling goods, and Roman architecture in the background, bathed in warm sunlight. Realistic style, detailed.",\n    "ContentText": "Narrator: In the heart of ancient Rome, life teemed with activity."\n  },\n  {\n    "imagePrompt": "A close-up of a Roman vendor holding up a piece of pottery with intricate designs, his weathered hands telling a story of hard work. Realistic style, shallow depth of field.",\n   "ContentText": "Narrator: Imagine a craftsman, proud of his work, presenting his wares."\n  },\n   {\n    "imagePrompt": "A Roman soldier in full armor, standing guard at the entrance of a public building, a serious expression on his face. Realistic style, slightly angled shot.",\n    "ContentText": "Narrator: And the watchful eye of the Roman soldier, ensuring peace."\n  },\n  {\n    "imagePrompt": "An old scroll unfurling, with faded Latin script and intricate illustrations, resting on a worn wooden table. Realistic style, focused on the details.",\n    "ContentText": "Narrator: But today, our story unfolds through an ancient scroll…"\n  },\n   {\n    "imagePrompt": "A group of people in togas gathered around, listening intently as a man reads from a scroll, their faces showing a mix of emotions: surprise, concern, and intrigue. Realistic style, low angle shot.",\n    "ContentText": "Narrator: a tale whispered through the ages."\n  },\n  {\n    "imagePrompt": "A close-up of a cat, with piercing green eyes and a regal posture, sitting on a windowsill overlooking the Roman marketplace. Realistic style, soft lighting.",\n    "ContentText": "Narrator: It wasn’t a king or a general… but a cat… named Pyewacket."\n  },\n    {\n    "imagePrompt": "A scene of chaos in the marketplace, with people scrambling, overturned carts, and broken pottery, suggesting some sort of minor incident. Realistic style, wide shot.",\n     "ContentText":"Narrator: Pyewacket\'s arrival coincided with some strange happenings..."\n  },\n  {\n    "imagePrompt": "A person in a toga looking bewilderedly at a small, harmless looking fire that seemed to have sprung out of nowhere. Realistic style, medium shot focusing on the expression.",\n    "ContentText": "Narrator: small fires that ignited seemingly from nowhere"\n  },\n   {\n     "imagePrompt": "A concerned Roman family inside their home, looking confused as objects moved on their own. Realistic style, from the side as they watch things move.",\n     "ContentText": "Narrator: and objects that moved with no hand pushing them."\n   },\n  {\n    "imagePrompt": "A woman pointing accusingly at Pyewacket, who sits calmly, seemingly unbothered, in the middle of the Roman marketplace. Realistic style, medium shot.",\n     "ContentText": "Narrator: The Romans, in their superstition, pointed their fingers at Pyewacket."\n  },\n  {\n    "imagePrompt": "A scene of Roman people gathering, holding torches and looking angry and fearful, preparing to act upon their suspicions towards Pyewacket. Realistic style, wide shot with fire reflecting on faces.",\n   "ContentText": "Narrator: They accused her of witchcraft, convinced she was the cause of the chaos."\n  },\n   {\n    "imagePrompt": "A dramatic close up of Pyewacket\'s eyes as she watches Roman people gather around and prepare to take action. Realistic style, focus on the eye.",\n     "ContentText": "Narrator: But Pyewacket, in her feline wisdom, simply observed."\n  },\n  {\n    "imagePrompt": "A sudden burst of laughter from a man in the crowd, followed by others joining, breaking the tension as they realize their fears were unfounded. Realistic style, medium shot.",\n   "ContentText": "Narrator: Then, a laugh. One man realized how silly they were."\n  },\n  {\n    "imagePrompt": "Roman people now laughing with each other and chatting while the small fire disappears, the tensions easing. Realistic style, wide shot of the marketplace.",\n    "ContentText": "Narrator: Pyewacket wasn’t a witch, just a cat with an uncanny knack for being in the wrong place at the right time."\n  },\n   {\n     "imagePrompt": "Pyewacket, now a beloved companion, being petted by a Roman child, in a loving and peaceful Roman home. Realistic style, medium shot focus on cat and child.",\n     "ContentText": "Narrator: and from then on, Pyewacket was loved, a constant reminder of how quickly fear can turn into laughter."\n  }\n]\n```\n',
        },
      ],
    },
  ],
});

