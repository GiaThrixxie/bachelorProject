import type { MetaFunction } from "@remix-run/node";
import db from "../../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import type { MouseEventHandler } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

function addData(): MouseEventHandler<HTMLButtonElement> {
  const docRef = doc(db, "/games/VTM_5e/character/disciplines/data/thinBloodAlchemy/powers/awakenTheSleeper");
  const payload = {
    title: "Awaken the Sleeper",
lvl: 5,
description: "This formula results in an elixir which, when added to human blood, can awaken a vampire from Torpor.",
ingredients: "The alchemist's Blood, choleric or sanguine human blood, adrenaline, ammonium carbonate, hartshorn, caffeine or benzedrine, melatonin.",
system: "The alchemist taps their vessel (Calcinatio), or their own vein (Athanor Corporis) to get the Awaken the Sleeper elixir if they do not use Fixatio. They then mix the elixir into human blood. For each success above 2 on the distillation roll, the elixir can awaken a vampire of that Blood Potency. Example: Hari gets 5 successes on his Awaken the Sleeper distillation roll: this elixir can awaken a torpid vampire of Blood Potency 3 or less (5 - 2 = 3).",
distillationMethod: [
    {
    title: "Athanor Corporis",
    description: "The alchemist can tap their own vein once per night for this elixir until their next feeding, or until they reach Hunger 5. They need not pay the distillation cost again."
    },
    {
    title: "Calcinatio",
    description: "If the vessel survives the tap, the alchemist can tap them again in a week for more elixir. They need not pay the distillation cost again, but the vessel pays the Health cost (5 Aggravated damage) each time they are tapped. The Alchemist can also simply feed the vessel's blood to the sleeper directly."
    }
],
}

  setDoc(docRef, payload);

  return () => {};
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>

      <button onClick={addData} className="w-16 h-8 bg-teal-500">Add</button>
    </div>
  );
}


/* 
COLLECTION
traits: {
  max_dots: 5,

  dotDistribution: {
    attribute: {
      atFour: 1,
      atThree: 3,
      atTwo: 4,
      atOne: 1,
    },
    skill: {
      balanced: {
        skillsAtOne: 7,
        skillsAtTwo: 5,
        skillsAtThree: 3,
      },
      jackOfAllTrades: {
        skillsAtOne: 10,
        skillsAtTwo: 8,
        skillsAtThree: 1,
      },
      specialist: {
        skillsAtOne: 1,
        skillsAtTwo: 3,
        skillsAtThree: 3,
        skillsAtFour: 1,
      }
    }
  },

  typeDescription: {
    attribute: {
      mental: "Mental Attributes describe your character’s mental faculties. They are Intelligence, Wits and Resolve. Mental Attributes are used to solve puzzles, recall information and resist mental attacks.",
      physical: "Physical Attributes describe your character’s physical capabilities. They are Strength, Dexterity and Stamina. Physical Attributes are used to perform feats of strength, dexterity and endurance.",
      social: "Social Attributes describe your character’s social skills. They are Presence, Manipulation and Composure. Social Attributes are used to persuade, deceive and intimidate others.",
    },
    skill: {
      mental: "Mental Skills describe your character’s mental faculties. They are Academics, Computer and Investigation. Mental Skills are used to solve puzzles, recall information and resist mental attacks.",
      physical: "Physical Skills describe your character’s physical capabilities. They are Athletics, Brawl and Drive. Physical Skills are used to perform feats of strength, dexterity and endurance.",
      social: "Social Skills describe your character’s social skills. They are Empathy, Expression and Intimidation. Social Skills are used to persuade, deceive and intimidate others.",
    }
  }
  attributes: [
    {
      title: "Intelligence",
      description: "Intelligence measures your ability to reason, research and apply logic. You can recall and analyze information from books or from your senses. No puzzle or mystery can elude the truly intelligent."
      dot_description: [
        "You can read and write competently, though some terms confound you.",
      ]
      type: "Mental"
    },
  ]
  skills: [
    {
      title: "Academics",
      description: "Academics measures your knowledge of the sciences and humanities. You can recall information from books or from your senses. No puzzle or mystery can elude the truly intelligent."
      dotDescription: [
        "You can read and write competently, though some terms confound you.",
      ],
      specialties: [
        "Mathematics",
      ]
      type: "Mental"
    }
  ]
}

traits: [
  {
    title: "Attributes",
    max_dots: 5,
    typeDescription: {
      mental: "Mental Attributes describe your character’s mental faculties. They are Intelligence, Wits and Resolve. Mental Attributes are used to solve puzzles, recall information and resist mental attacks.",
      physical: "Physical Attributes describe your character’s physical capabilities. They are Strength, Dexterity and Stamina. Physical Attributes are used to perform feats of strength, dexterity and endurance.",
      social: "Social Attributes describe your character’s social skills. They are Presence, Manipulation and Composure. Social Attributes are used to persuade, deceive and intimidate others.",
    },
    dotDistribution: {
      atFour: 1,
      atThree: 3,
      atTwo: 4,
      atOne: 1,
    },
    attributes: [
      {
        title: "Intelligence",
      description: "Intelligence measures your ability to reason, research and apply logic. You can recall and analyze information from books or from your senses. No puzzle or mystery can elude the truly intelligent."
      dot_description: [
        oneDot: "You can read and write competently, though some terms confound you.",
        twoDot: "You can read and write competently, though some terms confound you.",
      ]
      type: "Mental"
      }
    ]
  }
  {
    title: "Skills",
    max_dots: 5,
    typeDescription: {
      mental: "Mental Skills describe your character’s mental faculties. They are Academics, Computer and Investigation. Mental Skills are used to solve puzzles, recall information and resist mental attacks.",
      physical: "Physical Skills describe your character’s physical capabilities. They are Athletics, Brawl and Drive. Physical Skills are used to perform feats of strength, dexterity and endurance.",
      social: "Social Skills describe your character’s social skills. They are Empathy, Expression and Intimidation. Social Skills are used to persuade, deceive and intimidate others.",
    },
    dotDistribution: {
      balanced: {
        skillsAtOne: 7,
        skillsAtTwo: 5,
        skillsAtThree: 3,
      },
      jackOfAllTrades: {
        skillsAtOne: 10,
        skillsAtTwo: 8,
        skillsAtThree: 1,
      },
      specialist: {
        skillsAtOne: 1,
        skillsAtTwo: 3,
        skillsAtThree: 3,
        skillsAtFour: 1,
      }
    },
    skills: [
      {
        title: "Academics",
      description: "Academics measures your knowledge of the sciences and humanities. You can recall information from books or from your senses. No puzzle or mystery can elude the truly intelligent."
      dot_description: [
        oneDot: "You can read and write competently, though some terms confound you.",
        twoDot: "You can read and write competently, though some terms confound you.",
      ]
      type: "Mental"
      }
    ]
  }
]
firebase.firestore().doc('games/VTM_5e/attributes/intelligence')
firebase.firestore().doc('games/VTM_5e/traits/attributes/intelligence')
firebase.firestore().doc('games/VTM_5e/traits/attributes/typeDescription/mental')
firebase.firestore().doc('games/VTM_5e/traits/attributes/dotDistribution')
firebase.firestore().doc('games/VTM_5e/traits/attributes/attributeList')
firebase.firestore().doc('games/VTM_5e/traits/attributes/attribute')
firebase.firestore().doc('games/VTM_5e/traits/attributes/allAttributes')
firebase.firestore().doc('games/VTM_5e/traits/attributeData/attributes')
firebase.firestore().doc('games/VTM_5e/traits/attributes/data')
firebase.firestore().doc('games/VTM_5e/traits/distribution/attributes')


attributes needs to be a document

COLLECTION
coreTraits: {

  DOCUMENT
  attributes: {
    maxDots: 5
    distribution: {
      atFour: 1,
      atThree: 3,
      atTwo: 4,
      atOne: 1,
    }
    descriptions: {
      mental: "Mental Attributes describe your character’s mental faculties. They are Intelligence, Wits and Resolve. Mental Attributes are used to solve puzzles, recall information and resist mental attacks.",
      physical: "Physical Attributes describe your character’s physical capabilities. They are Strength, Dexterity and Stamina. Physical Attributes are used to perform feats of strength, dexterity and endurance.",
      social: "Social Attributes describe your character’s social skills. They are Presence, Manipulation and Composure. Social Attributes are used to persuade, deceive and intimidate others.",
    }

    SUBCOLLECTION
    data: [

      DOCUMENT
      intelligence: {

      }
    ]
  },

  DOCUMENT
  skills: {
    maxDots: 5
    distribution: {
      balanced: {
        skillsAtOne: 7,
        skillsAtTwo: 5,
        skillsAtThree: 3,
      },
      jackOfAllTrades: {
        skillsAtOne: 10,
        skillsAtTwo: 8,
        skillsAtThree: 1,
      },
      specialist: {
        skillsAtOne: 1,
        skillsAtTwo: 3,
        skillsAtThree: 3,
        skillsAtFour: 1,
      }
    }
    descriptions: {
      mental: "Mental Attributes describe your character’s mental faculties. They are Intelligence, Wits and Resolve. Mental Attributes are used to solve puzzles, recall information and resist mental attacks.",
      physical: "Physical Attributes describe your character’s physical capabilities. They are Strength, Dexterity and Stamina. Physical Attributes are used to perform feats of strength, dexterity and endurance.",
      social: "Social Attributes describe your character’s social skills. They are Presence, Manipulation and Composure. Social Attributes are used to persuade, deceive and intimidate others.",
    }

    SUBCOLLECTION
    data: [
      
      DOCUMENT
      intelligence: {

      }
    ]
  }
}

COLLECTION
beliefs: {

  DOCUMENT
  convictions: {
    description: "Convictions are the things that your character believes in. They are the things that your character would die for.",

    SUBCOLLECTION
    data: [

      DOCUMENT
      convictionName: {
        title: "Conviction 1",
        description: "This is a description of your conviction.",
      }
    ]
  }

  DOCUMENT
  touchstones: {
    description: "Touchstones are the things that your character cares about. They are the things that your character would kill for.",
    
    SUBCOLLECTION
    data: [

      DOCUMENT
      touchstoneName: {
        title: "Touchstone 1",
        description: "This is a description of your touchstone.",
      }
    ]
  }
  DOCUMENT
  ambitions: {
    description: "Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for.""
    
    SUBCOLLECTION
    data: [
      
      DOCUMENT
      ambitionName: {
        title: "Ambition 1",
        description: "This is a description of your ambition.",
      }
    ]
  }
}

COLLECTION
character: {

  DOCUMENT
  disciplines: {
    description: "Disciplines are special abilities that your character has. They are the things that your character would kill for.",

    SUBCOLLECTION
    data: [

      DOCUMENT
      animalism: {
        description: "Animalism is the discipline of the Beast. It allows you to commune with animals and control the Beast within yourself.",
        characteristics: {

        }

        COLLECTION
        powers: {

          DOCUMENT
          bondFamulus: {

          }
        }
      }
    ]
  }

  DOCUMENT
  predatorTypes: 
  {
    description: "Your character’s Predator Type is the way in which they feed. This is a reflection of their personality and the way they interact with others. Your character’s Predator Type determines how they regain Willpower.",
    
    SUBCOLLECTION
    data: [

      DOCUMENT
      predatorTypeName:
      {
        title: "Architect",
        description: "You feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny.",
        bonus: "You regain Willpower when you are praised or complimented.",
        penalty: "You lose Willpower when you are insulted or humiliated.",
      }
    ]
    
  }

  DOCUMENT
  compulsions: {
    description: "Compulsions are the things that your character must do. They are the things that your character would kill for.",
    randomCompulsions: {
    }

    SUBCOLLECTION
    clanCompulsions: {

        DOCUMENT
        brujah: {
          title: "Rebellion",
          description: "This is a description of your clan compulsion.",
        }
      ]
    }
  }
}

COLLECTION
advantages: {

  DOCUMENT
  merits: {
    description: "Merits are special abilities that your character has. They are the things that your character would kill for.",
    
    SUBCOLLECTION
    data: [

      DOCUMENT
      meritName: {
        title: "Merit 1",
        description: "This is a description of your merit.",
      }
    ]
  }

  DOCUMENT
  backgrounds: {
    description: "Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for.",
    
    SUBCOLLECTION
    data: [

      DOCUMENT
      backgroundName:
      {
        title: "Background 1",
        description: "This is a description of your background.",
      }
    ]
  }
}

COLLECTION
coterie: {

  DOCUMENT
  types: {
    description: ""

    COLLECTION
    data: [
      DOCUMENT
      coterieTypeName: {
        title: "Blood Cult",
        description: "This is a description of your coterie.",
        domain: {
          lien: {
            dotAmount: 1
          }
          chasse: ref,
          portillon: ref,
        }
        advantages: [
          {
            ref: {
              dotAmount: 2
              merit: true
            }
          }
        ]
      }
    ]
  }

  DOCUMENT
  domain: {
    description: "This is a description of your domain.",
    chasse: {
      description: "This is a description of your domain.",
      dotDescription: {
        1: "One city block, one suburban gated community",
        2: "One city block, one suburban gated community",
      }
    }
    lien: {
      description: "This is a description of your domain.",
      dotDescription: {
        1: "One city block, one suburban gated community",
        2: "One city block, one suburban gated community",
      }
    }
    portillon: {
      description: "This is a description of your domain.",
      dotDescription: {
        1: "One city block, one suburban gated community",
        2: "One city block, one suburban gated community",
      }
    }
  }
}




















characters: {
  COLLECTION
  coreTraits: {
    max_dots: 5
    physicalAttributes: {
      description: "Physical Attributes describe your character’s physical capabilities. They are Strength, Dexterity and Stamina. Physical Attributes are used to perform feats of strength, dexterity and endurance.",
      data: [

      ]
    }
    socialAttributes: {
      description: "Social Attributes describe your character’s social skills. They are Presence, Manipulation and Composure. Social Attributes are used to persuade, deceive and intimidate others.",
      data: [

      ]
    }
    mentalAttributes: {
      description: "Mental Attributes describe your character’s mental faculties. They are Intelligence, Wits and Resolve. Mental Attributes are used to solve puzzles, recall information and resist mental attacks.",
      data: [

      ]
    }
    physicalSkills: {
      description: "Physical Skills describe your character’s physical capabilities. They are Athletics, Brawl and Drive. Physical Skills are used to perform feats of strength, dexterity and endurance.",
      data: [

      ]
    }
    socialSkills: {
      description: "Social Skills describe your character’s social skills. They are Empathy, Expression and Intimidation. Social Skills are used to persuade, deceive and intimidate others.",
      data: [

      ]
    }
    mentalSkills: {
      description: "Mental Skills describe your character’s mental faculties. They are Academics, Computer and Investigation. Mental Skills are used to solve puzzles, recall information and resist mental attacks.",
      data: [

      ]
    }
  }

  COLLECTIONS
  beliefs: {
    C
    convictions: {
      description: "Convictions are the things that your character believes in. They are the things that your character would die for.",
      data: [
        {
          title: "Conviction 1",
          description: "This is a description of your conviction.",
        }
      ]
    }
    touchstones: {
      description: "Touchstones are the things that your character cares about. They are the things that your character would kill for.",
      data: [
        {
          title: "Touchstone 1",
          description: "This is a description of your touchstone.",
        }
      ]
    }
    ambitions: {
      description: "Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for. Ambitions are the things that your character wants. They are the things that your character would kill for.""
      data: [
        {
          title: "Ambition 1",
          description: "This is a description of your ambition.",
        }
      ]
    }
  }
  predatorTypes: 
  {
    description: "Your character’s Predator Type is the way in which they feed. This is a reflection of their personality and the way they interact with others. Your character’s Predator Type determines how they regain Willpower.",
    data: [
      {
        title: "Architect",
        description: "You feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny and you feed from those who are in awe of you. You are the master of your own destiny.",
        bonus: "You regain Willpower when you are praised or complimented.",
        penalty: "You lose Willpower when you are insulted or humiliated.",
      }
    ]
    
  }
  advantages: {
    merits: {
      description: "Merits are special abilities that your character has. They are the things that your character would kill for. Merits are special abilities that your character has. They are the things that your character would kill for. Merits are special abilities that your character has. They are the things that your character would kill for. Merits are special abilities that your character has. They are the things that your character would kill for. Merits are special abilities that your character has. They are the things that your character would kill for. Merits are special abilities that your character has. They are the things that your character would kill for. Merits are special abilities that your character has. They are the things that your character would kill for. Merits are special abilities that your character has. They are the things that your character would kill for.",
      data: [
        {
          title: "Merit 1",
          description: "This is a description of your merit.",
        }
      ]
    }
    backgrounds: {
      description: "Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for.",
      data: [
        {
          title: "Background 1",
          description: "This is a description of your background.",
        }
      ]
    }
  }
  coterie: {
    types: {
      description: ""
      data: [
        {
          title: "Blood Cult",
          description: "This is a description of your coterie.",
          domain: {
            lien: {
              dotAmount: 1
            }
            chasse: ref,
            portillon: ref,
          }
          advantages: [
            {
              ref: {
                dotAmount: 2
                merit: true
              }
            }
          ]
        }
      ]
    }
    domain: {
      chasse: {
        description: "This is a description of your domain.",
        dotDescription: {
          1: "One city block, one suburban gated community",
          2: "One city block, one suburban gated community",
        }
      }
      lien: {
        description: "This is a description of your domain.",
        dotDescription: {
          1: "One city block, one suburban gated community",
          2: "One city block, one suburban gated community",
        }
      }
      portillon: {
        description: "This is a description of your domain.",
        dotDescription: {
          1: "One city block, one suburban gated community",
          2: "One city block, one suburban gated community",
        }
      }
    }
    backgrounds: {
      description: "Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for. Backgrounds are special abilities that your character has. They are the things that your character would kill for.",
      data: [
        {
          title: "Background 1",
          description: "This is a description of your background.",
        }
      ]
    }
  }
}



*/