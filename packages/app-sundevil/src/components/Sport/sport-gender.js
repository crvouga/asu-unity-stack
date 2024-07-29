export const SportGender = {
  MEN: "MEN",
  WOMEN: "WOMEN",
  MEN_AND_WOMEN: "MEN_AND_WOMEN",
};

export const sportGenderToString = sportGender => {
  switch (sportGender) {
    case SportGender.MEN: {
      return "Men";
    }
    case SportGender.WOMEN: {
      return "Women";
    }
    case SportGender.MEN_AND_WOMEN: {
      return "Men and women";
    }
    default: {
      return "Men and women";
    }
  }
};

const WOMAN_WORDS = ["woman", "women", "female", "girl", "lady", "gal", "w"];

const MAN_WORDS = ["man", "men", "male", "boy", "guy", "dude", "m"];

const MEN_AND_WOMEN_WORDS = [
  "mixed",
  "coed",
  "both",
  "all",
  "everyone",
  "everybody",
];

const removeWords = (words, string) => {
  return words.reduce((acc, word) => acc.replace(word, ""), string);
};

export const stringToSportGender = string => {
  if (typeof string !== "string") {
    return SportGender.MEN_AND_WOMEN;
  }

  const cleaned = string.toLowerCase().trim();

  if (WOMAN_WORDS.some(word => cleaned.includes(word))) {
    const withoutWomanWords = removeWords(WOMAN_WORDS, cleaned);

    if (MAN_WORDS.some(word => withoutWomanWords.includes(word))) {
      return SportGender.MEN_AND_WOMEN;
    }

    return SportGender.WOMEN;
  }

  if (MEN_AND_WOMEN_WORDS.some(word => cleaned.includes(word))) {
    return SportGender.MEN_AND_WOMEN;
  }

  if (MAN_WORDS.some(word => cleaned.includes(word))) {
    return SportGender.MEN;
  }

  return SportGender.MEN_AND_WOMEN;
};
