const questions = [
  {
    question: {
      text: 'Which project was known as "WORST NFT PROJECT EVER"?',
      answer: "Kevin Pixelmon",
      hint: "Raised $70M from mint sales.",
    },
  },
  {
    question: {
      text: "Who is the most notorious NFT influencer that was running scams?",
      answer: "Beanie",
      hint: "Owner of a Beanie Punk.",
    },
  },
  {
    question: {
      text: "This founder/marketer went on CNBC live from Dubai on 2/10/2022 and created this meme",
      answer: "Gary Vee",
      hint: "He runs VeeCon.",
    },
  },
  {
    question: {
      text: "This project represents the world's most valuable generative art algorithm",
      answer: "Fidenza",
      hint: "A Tyler Hobbs creation.",
    },
  },
  {
    question: {
      text: "This former UCLA film student founded two of the top NFT projects. Take shot from your show, bro.",
      answer: "Frankdagodz",
      hint: "PFP of Rohun Vora",
    },
  },
  {
    question: {
      text: "I just buy bitcoins. I don't buy shitcoins. Just to get no coins. We the XXXXXX boys.",
      answer: "Island Boys",
      hint: "twin brothers Kodiyakredd and Flyysoulja",
    },
  },
  {
    question: {
      text: "This meme started after someone typed in banger accidentally in a group chat",
      answer: "Banger",
      hint: "Paper bag",
    },
  },
  {
    question: {
      text: "The web3 sleuth that is a scammer's worst nightmare.",
      answer: "Zachxbt",
      hint: "The On-chain sleuth.",
    },
  },
  {
    question: {
      text: "“ₕₑaₕ wₐₜ dₒ dₐ ₛₑᵣᵢᵤₛ ₑₙᵥₑₛₜᵤᵣₛ dₒ fᵤᵣ wᵤᵣₖ?”",
      answer: "Goblintown",
      hint: "We're going to *****town",
    },
  },
  {
    question: {
      text: "The moment SQUID rugged live",
      answer: "Squid Game Token",
      hint: "Owww! We went to zero! Eeeooowwww!",
    },
  },
  {
    question: {
      text: "Promo art vs the actual thing",
      answer: "Horse Drawing Meme",
      hint: "Don't mint without seeing the art.",
    },
  },
  {
    question: {
      text: "Lost $350K in the market and then set his apartment on fire.",
      answer: "Crypto Bitlord",
      hint: "Shitcoin Lord",
    },
  },
  {
    question: {
      text: "The mastermind of a 119,756 BTC hack",
      answer: "Razzlekhan",
      hint: "Morgan the money launderer.",
    },
  },
  {
    question: {
      text: "The worst leveraged crypto trader of all time",
      answer: "Caroline Ellison",
      hint: "SBF's right hand.",
    },
  },
  {
    question: {
      text: "Flips apes for 00016 ETH profit and loves to gamble.",
      answer: "Franklinisbored",
      hint: "Lost 2000 ETH and left the space.",
    },
  },
  {
    question: {
      text: "This self-doxxed Texan degen loved feet and shilling defi projects. RIP",
      answer: "S🅰️v🅰️ge $crooge",
      hint: "QuickPack King.",
    },
  },
  {
    question: {
      text: "Steady lads... deploying more capital",
      answer: "Do Kwon",
      hint: "Indicted in US after Montenegro arrest",
    },
  },
  {
    question: {
      text: "May 22 celebrates the first item purchased in crypto history..",
      answer: "BTC Pizzas",
      hint: "10,000 BTC",
    },
  },
  {
    question: {
      text: "Former CEO of a software company that owns billions in BTC",
      answer: "Michael Saylor",
      hint: "Buys Another $150 Million in Bitcoin",
    },
  },
  {
    question: {
      text: "Thiel Fellow who was the world's youngest crypto billionaire at age 27",
      answer: "Vitalik Buterin",
      hint: "All your Eth belongs to me.",
    },
  },
  {
    question: {
      text: "Refuses to do his job and give clear regulatory guidance",
      answer: "Gary Gensler",
      hint: "SEC goon",
    },
  },
  {
    question: {
      text: "Anti-crypto Senator who wants to regulate the market.",
      answer: "Elizabeth Warren",
      hint: "Vowed to raise an 'anti-crypto' army",
    },
  },
  {
    question: {
      text: 'Commited "one of the biggest financial frauds in history."',
      answer: "SBF",
      hint: "I fucked up, and should have done better.",
    },
  },
  {
    question: {
      text: "Runs one of the most recognizable crypto channels on youtube",
      answer: "Bitboy",
      hint: "Author or “Catching Up to Crypto.”",
    },
  },
  {
    question: {
      text: 'Epic trolling of bitcoin maxis with “DOGECOIN TO THE MOON!" at a bitcoin conference.',
      answer: "'DOGECOIN TO THE MOON!!!' bitcoin conference",
      hint: "Bitcoin Miami Conference 2021",
    },
  },
  {
    question: {
      text: "“Can devs do something?”",
      answer: "Hard Rock Nick",
      hint: "The Face of Cryptocurrency",
    },
  },
  {
    question: {
      text: "“Told her I was taking pics of her, she said yes @BoredApeYC”",
      answer: "Papasito",
      hint: "She has an onlyfans too",
    },
  },
  {
    question: {
      text: "When you get rugged but u still that motherfucker",
      answer: "Zeb Ross",
      hint: "#1 stepper",
    },
  },
  {
    question: {
      text: "This Actor and producer was robbed of a bored ape after falling for a phishing scam",
      answer: "Seth Green",
      hint: "Family Guy",
    },
  },
  {
    question: {
      text: "Hello - it's me. Created the greatest crypto music video of all time.",
      answer: "Randi Zuckerberg",
      hint: "Mark's sister.",
    },
  },
  {
    question: {
      text: "“Just a weirdo who took photos of myself everyday and turned it into NFTs”",
      answer: "Ghozali",
      hint: "NFT selfies",
    },
  },
  {
    question: {
      text: "Crypto's Comedian.",
      answer: "Kmoney",
      hint: "Makes funny videos about web3",
    },
  },
];

const mergeArray = () => {
  const questions = allQuestions.map((quest, index) => {
    return {
      text: quest,
      answer: answers[index] || "",
      hint: hintArray[index],
    };
  });

  console.log(questions);
};

mergeArray();
