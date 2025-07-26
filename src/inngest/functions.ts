import { openai, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world2" },
  { event: "test/hello.world" },
  async ({ event }) => {
     // Create a new agent with a system prompt (you can add optional tools, too)
     const codeAgent = createAgent({
        name: "code-agent",
        system: "You are an expert next.js developer. You write readable, maintable code. You write simple Next.js & React snippets",
        model: openai({ model: "gpt-4o"}),
      });

      const { output } = await codeAgent.run(
        `Write the following snippet: ${event.data.value}`
      );

    return { output };
  },
);