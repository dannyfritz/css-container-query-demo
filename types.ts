export type Bird = {
  name: {
    common: string;
    latin: string;
  };
  description: string;
  links: {
    allaboutbirds: string;
  };
  taxonomy: {
		group: string;
    order: {
      latin: string;
    };
    family: {
      latin: string;
    };
  };
  traits: {
    habitat: "lakes and ponds" | "forests" | "open woodlands" | "marshes";
    food: "plants" | "omnivore" | "seeds" | "fish" | "insects";
    nesting: "cavity" | "tree" | "shrub";
    behavior: "dabbler" | "ground forager" | "stalking" | "bark forager" | "foliage gleaner";
  };
	conservation: "low concern" | "common bird in steep decline";
};
