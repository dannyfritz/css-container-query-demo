// @ts-check
/** @typedef {import("../types").Bird} Bird */
/** @type {Record<Bird["name"]["common"], Bird>} */
export const birds = {
  "wood duck": {
    name: {
      common: "wood duck",
      latin: "aix sponsa",
    },
    description:
      "The Wood Duck is one of the most stunningly pretty of all waterfowl. Males are iridescent chestnut and green, with ornate patterns on nearly every feather; the elegant females have a distinctive profile and delicate white pattern around the eye. These birds live in wooded swamps, where they nest in holes in trees or in nest boxes put up around lake margins. They are one of the few duck species equipped with strong claws that can grip bark and perch on branches.",
    links: {
      allaboutbirds: "https://www.allaboutbirds.org/guide/Wood_Duck",
    },
    taxonomy: {
      group: "ducks",
      family: {
        latin: "anatidae",
      },
      order: {
        latin: "anseriformes",
      },
    },
    traits: {
      behavior: "dabbler",
      food: "plants",
      habitat: "lakes and ponds",
      nesting: "cavity",
    },
    conservation: "low concern",
  },
  "blue jay": {
    conservation: "low concern",
    description:
      "This common, large songbird is familiar to many people, with its perky crest; blue, white, and black plumage; and noisy calls. Blue Jays are known for their intelligence and complex social systems with tight family bonds. Their fondness for acorns is credited with helping spread oak trees after the last glacial period.",
    links: {
      allaboutbirds: "https://www.allaboutbirds.org/guide/Blue_Jay",
    },
    name: {
      common: "blue jay",
      latin: "cyanocitta cristata",
    },
    taxonomy: {
      group: "jays",
      family: {
        latin: "corvidae",
      },
      order: {
        latin: "passeriformes",
      },
    },
    traits: {
      behavior: "ground forager",
      food: "omnivore",
      habitat: "forests",
      nesting: "tree",
    },
  },
  "northern cardinal": {
    conservation: "low concern",
    description:
      "The male Northern Cardinal is perhaps responsible for getting more people to open up a field guide than any other bird. They’re a perfect combination of familiarity, conspicuousness, and style: a shade of red you can’t take your eyes off. Even the brown females sport a sharp crest and warm red accents. Cardinals don’t migrate and they don’t molt into a dull plumage, so they’re still breathtaking in winter’s snowy backyards. In summer, their sweet whistles are one of the first sounds of the morning.",
    links: {
      allaboutbirds: "https://www.allaboutbirds.org/guide/Northern_Cardinal",
    },
    name: {
      common: "northern cardinal",
      latin: "cardinalis cardinalis",
    },
    taxonomy: {
      family: {
        latin: "cardinalidae",
      },
      group: "cardinals",
      order: {
        latin: "passeriformes",
      },
    },
    traits: {
      behavior: "ground forager",
      food: "seeds",
      habitat: "open woodlands",
      nesting: "shrub",
    },
  },
  "green heron": {
    conservation: "common bird in steep decline",
    description:
      "From a distance, the Green Heron is a dark, stocky bird hunched on slender yellow legs at the water’s edge, often hidden behind a tangle of leaves. Seen up close, it is a striking bird with a velvet-green back, rich chestnut body, and a dark cap often raised into a short crest. These small herons crouch patiently to surprise fish with a snatch of their daggerlike bill. They sometimes lure in fish using small items such as twigs or insects as bait.",
    links: {
      allaboutbirds: "https://www.allaboutbirds.org/guide/Green_Heron",
    },
    name: {
      common: "green heron",
      latin: "butorides virescens",
    },
    taxonomy: {
      family: {
        latin: "ardeidae",
      },
      group: "herons",
      order: {
        latin: "ardeidae",
      },
    },
    traits: {
      behavior: "stalking",
      food: "fish",
      habitat: "marshes",
      nesting: "tree",
    },
  },
  "white-breasted nuthatch": {
    conservation: "low concern",
    description:
      "A common feeder bird with clean black, gray, and white markings, White-breasted Nuthatches are active, agile little birds with an appetite for insects and large, meaty seeds. They get their common name from their habit of jamming large nuts and acorns into tree bark, then whacking them with their sharp bill to “hatch” out the seed from the inside. White-breasted Nuthatches may be small but their voices are loud, and often their insistent nasal yammering will lead you right to them.",
    links: {
      allaboutbirds:
        "https://www.allaboutbirds.org/guide/White-breasted_Nuthatch/",
    },
    name: {
      common: "white-breasted nuthatch",
      latin: "sitta carolinensis",
    },
    taxonomy: {
      family: {
        latin: "sittidae",
      },
      group: "nuthatches",
      order: {
        latin: "passeriformes",
      },
    },
    traits: {
      behavior: "bark forager",
      food: "insects",
      habitat: "forests",
      nesting: "cavity",
    },
  },
  "black-capped chickadee": {
    conservation: "low concern",
    description:
      "A bird almost universally considered “cute” thanks to its oversized round head, tiny body, and curiosity about everything, including humans. The chickadee’s black cap and bib; white cheeks; gray back, wings, and tail; and whitish underside with buffy sides are distinctive. Its habit of investigating people and everything else in its home territory, and quickness to discover bird feeders, make it one of the first birds most people learn.",
    links: {
      allaboutbirds:
        "https://www.allaboutbirds.org/guide/Black-capped_Chickadee",
    },
    name: {
      common: "black-capped chickadee",
      latin: "poecile atricapillus",
    },
    taxonomy: {
      family: {
        latin: "paridae",
      },
      group: "chickadees",
      order: {
        latin: "passeriformes",
      },
    },
    traits: {
      behavior: "foliage gleaner",
      food: "insects",
      habitat: "forests",
      nesting: "cavity",
    },
  },
  "american redstart": {
    conservation: "low concern",
    description:
      "A lively warbler that hops among tree branches in search of insects, the male American Redstart is coal-black with vivid orange patches on the sides, wings, and tail. True to its Halloween-themed color scheme, the redstart seems to startle its prey out of the foliage by flashing its strikingly patterned tail and wing feathers. Females and immature males have more subdued yellow “flash patterns” on a gray background. These sweet-singing warblers nest in open woodlands across much of North America.",
    links: {
      allaboutbirds: "https://www.allaboutbirds.org/guide/American_Redstart",
    },
    name: {
      common: "american redstart",
      latin: "setophaga ruticilla",
    },
    taxonomy: {
      family: {
        latin: "parulidae",
      },
      group: "warblers",
      order: {
        latin: "passeriformes",
      },
    },
    traits: {
      behavior: "foliage gleaner",
      food: "insects",
      habitat: "forests",
      nesting: "tree",
    },
  },
  "blackburnian warbler": {
    conservation: "low concern",
    description:
      "No birder can forget that first breeding male Blackburnian Warbler: the intricate black-and-white plumage set off by flame-orange face and throat, the impossibly high-pitched flourish at the end of the song, the cool of north-woods habitat in the morning. These forest-canopy specialists are seldom seen at eye level except during migration, when they may be found among dozens of other warbler species at sites that concentrate migrants in spring and fall. They spend winters in South America in open forests including shade-coffee plantations.",
    links: {
      allaboutbirds: "https://www.allaboutbirds.org/guide/Blackburnian_Warbler",
    },
    name: {
      common: "blackburnian warbler",
      latin: "setophaga fusca",
    },
    taxonomy: {
      family: {
        latin: "parulidae",
      },
      group: "warblers",
      order: {
        latin: "passeriformes",
      },
    },
    traits: {
      behavior: "foliage gleaner",
      food: "insects",
      habitat: "forests",
      nesting: "tree",
    },
  },
};
