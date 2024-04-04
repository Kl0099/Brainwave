import React, { useEffect, useState } from "react";
import Section from "./components/Section";
import OpenAI from "openai";
const test = () => {
  const [text, settext] = useState("");
  const generator = async () => {
    const openai = new OpenAI({
      apiKey: "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",
      dangerouslyAllowBrowser: true,
    });

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);

    // console.log(image.data);
  };
  useEffect(() => {}, []);

  return (
    <Section>
      <div className=" container relative">
        <div>
          <input
            type="text"
            name="prompt"
            id="prompt"
          />
          <button
            type="button"
            onClick={() => generator()}
          >
            submit
          </button>
        </div>
      </div>
    </Section>
  );
};

export default test;
