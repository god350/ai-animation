import { gemini15Flash } from '@genkit-ai/googleai';
import { defineFlow, z } from 'genkit';

export const generateVideoScriptFlow = defineFlow(
  {
    name: 'generateVideoScript',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (prompt) => {
    const llmResponse = await gemini15Flash.generate({
      prompt: `You are a creative AI assistant. Your task is to generate a short video script based on the following prompt: ${prompt}. The script should be detailed, including scene descriptions, camera shots, and dialogue.`,
    });

    return llmResponse.text();
  }
);
