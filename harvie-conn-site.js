/* ============================================================================
   The words on the home page (harvie-conn-home.html).
   Edit the text between the quotes to refine it. Keep the commas and brackets.
   To add a principle, copy one { title, text } block and change it.
   ========================================================================== */
window.SITE = {
  eyebrow: "A study project",
  title: "Knowing Harvie Conn",
  lede: "A long, careful study of one man: the person, the missionary, the educator and his ideas. Built the way a doctoral student builds knowledge, and laid out so it can be seen, questioned and added to.",

  whyTitle: "Why this exists",
  why: [
    "Harvie Conn (1933–1999) spent twelve years as a missionary in Korea and twenty-six teaching missions at Westminster Theological Seminary. He asked the church to take the city, the poor and other cultures seriously, and to do it without letting go of Scripture.",
    "This site is a place to get to know him properly: to listen to him teach, read what he wrote, trace where his ideas came from, and keep an honest record of what is known and what is still a guess."
  ],

  principlesTitle: "The philosophy underneath",
  principlesIntro: "These eight commitments shape every page of the site. Change them and the site should change with them.",
  principles: [
    { title: "The person before the ideas",
      text: "Ideas come from a life. The map starts with the man, the missionary and the educator, and only then moves to his thought. Korea comes before contextualization, because that is the order in which he learned it." },
    { title: "One body of knowledge, several views",
      text: "The 3D map, the outline and the list of works all show the same items. A map shows connections, an outline shows structure, a list shows gaps. No single view is the knowledge." },
    { title: "Every claim carries its evidence",
      text: "Each item is marked Sourced, To verify, Open, or AI-suggested, and names where it came from. A doubtful fact that is labelled doubtful is useful. An unlabelled one is a trap." },
    { title: "His own voice first",
      text: "Listen to the lectures and read the books before reading what others say about him. Secondary literature is for testing an understanding, not for supplying one." },
    { title: "Questions belong on the map",
      text: "An open question is an item like any other, with its own place and connections. Knowing exactly what you don't know is half of research." },
    { title: "AI is an assistant, never a source",
      text: "AI can explain, quiz, suggest connections and point to things worth reading. Nothing it says goes into the map as fact until it has been checked against a real source." },
    { title: "Understanding is earned",
      text: "An item is marked Understood only when it can be explained from memory in your own words. Collecting is not the same as knowing." },
    { title: "Built to be used again",
      text: "The content is kept apart from the machinery. The same site can hold a study of another person by swapping one file." }
  ],

  stagesTitle: "How the study moves forward",
  stages: [
    { name: "Scaffold", text: "Lay out the branches: the man, the missionary, the educator, his ideas, his works, his people, and the research questions." },
    { name: "Fill", text: "Add lectures, books, people and events as they are met. Take notes against the item they belong to." },
    { name: "Verify", text: "Check every To verify item against a library record, a primary text or a second source." },
    { name: "Synthesize", text: "Add your own claims and arguments as items, each tied to its evidence. These become chapters." },
    { name: "Share", text: "Publish the notes and the map so the study can teach someone else." }
  ],

  guardrailsTitle: "Known weaknesses, and the guard against each",
  guardrails: [
    { risk: "AI invents facts and citations, especially about a lesser-known figure.",
      guard: "Every built-in prompt demands checkable sources. AI answers are saved with a visible label and stay out of the Sourced category until checked." },
    { risk: "Additions are stored in one browser and can be lost.",
      guard: "Export a backup regularly. Anything worth keeping gets built into the site's data file." },
    { risk: "A 3D map becomes unreadable as it grows.",
      guard: "Filter by kind, tap an item to dim the rest, or switch to the outline and the works list." },
    { risk: "A handsome map can be mistaken for understanding.",
      guard: "Use the Quiz and Challenge prompts. Write a note in your own words before marking anything Understood." },
    { risk: "The list of his works is not complete.",
      guard: "The missing parts are shown on the map as open items, so the gap stays visible until it is filled." }
  ],

  promptingTitle: "Working with AI on this project",
  promptingIntro: "Six habits that get better help, and one prompt to start from.",
  habits: [
    { title: "Say where and how you'll use it", text: "“I mostly use this on my phone” changes what gets built." },
    { title: "Set the evidence standard", text: "“Only what you can source, and label the rest” stops plausible invention." },
    { title: "Rank the pieces", text: "“Books first, articles later” tells the AI where to spend its effort." },
    { title: "Name your limits", text: "Budget, tools and skills change the design." },
    { title: "Ask what was left out", text: "It brings the trade-offs into the open." },
    { title: "One big job per message", text: "Plan, then build, then critique. You can redirect between steps." }
  ],
  examplePrompt: "I'm adding to my Harvie Conn knowledge map. Here is a new source: [paste the link, title, or text].\n\nPlease:\n1. Add it to the map under the right branch and connect it to the items it relates to.\n2. Use only facts you can source. Mark anything uncertain as \"To verify\" and tell me what you could not confirm.\n3. Suggest up to three open questions this source raises.\n4. Show me what you changed before adding any polish, and tell me what you chose not to do."
};
