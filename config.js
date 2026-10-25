/*
  PER-PROSPECT CONFIG
  To re-skin the demo for a new prospect, change this file only, then re-run record.js.
  Keep the company fictional or use the prospect's own public wording; do not copy logos.
*/
window.DEMO_CONFIG = {
  company: {
    name: "Marlow & Finch",
    descriptor: "Heat pumps and solar",
    assistantName: "Marlow & Finch assistant",
    monogram: "M&F",
    phone: "0113 496 0123",          // 0113 496 0xxx is an Ofcom drama range (never allocated)
    email: "hello@marlowfinch.example",
    region: "Yorkshire",
    areas: "Leeds, York, Harrogate and the surrounding area",
    teamMember: "Dan"
  },

  theme: {
    paper: "#F3EFE6",
    paperDeep: "#E8E1CF",
    ink: "#1B2A22",
    forest: "#23483A",
    moss: "#5E7F5C",
    clay: "#C8643B",
    line: "#D8D1BF"
  },

  // "scripted" works with no API key. "live" sends messages to liveEndpoint (see worker.js).
  mode: "scripted",
  liveEndpoint: "",

  clock: { day: "Sunday", start: "21:41" },   // shown in the chat so the after-hours point is visible
  slots: ["Wed 10:00", "Thu 14:00", "Fri 09:30"],
  retentionDays: 60,

  // Shown on the closing card of the video
  agency: {
    name: "Husnain Rasool",
    line: "AI enquiry assistants for heat pump and solar installers"
  },

  // Approved answers. The scripted bot uses these; the live bot gets them as its knowledge base.
  faq: {
    grant:
      "The Boiler Upgrade Scheme takes **£7,500** off an air source or ground source heat pump in England and Wales. From 21 July 2026 to 31 March 2027, eligible homes off the gas grid that heat with oil or LPG can get **£9,000**. You need to own the home, and the installer must be MCS certified. We make the application for you, and the surveyor confirms eligibility on the visit.",
    cost:
      "I can't give a reliable price without a survey, because it depends on your home's heat loss, radiators and hot water needs. After the visit our surveyor sends a fixed written quote with the grant already taken off.",
    solar:
      "Yes, we fit solar panels with or without a battery. Whether a battery pays off depends on how much electricity you use during the day, and the surveyor goes through that with you on the visit.",
    time:
      "Once the survey, design and grant application are done, the work on site usually takes a few days. Your written quote includes a timeline.",
    human:
      "Of course. I'll flag this chat for the team and someone will call you in office hours. They'll see everything we've discussed, so you won't have to repeat yourself.",
    fallback:
      "I'm not certain about that one, so I'd rather not guess. I can pass it to the team, or book a free home survey where the surveyor can answer it properly."
  }
};
