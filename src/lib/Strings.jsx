// String data
import aboutme from "../assets/strings/aboutme.json";
import careerfield from "../assets/strings/careerfield.json";
import hobbies from "../assets/strings/hobbies.json";
import misc from "../assets/strings/misc.json";

const tabs = [aboutme, careerfield, hobbies];

/**
 * Generates a new string set with the specified language.
 * @param {string} lang The new language. Possible values: 'en', 'pt'.
 * @returns {object} An object containing the strings of the selected language.
 */
export const changeLanguage = (lang) => {
  let newContent = {
    tabs: {},
    misc: {},
  };
  let i = 0;

  // too stupid to figure out how to return
  // {'cls': {'text': 'abc', 'class': 'cls'}}
  // for each string set
  while (i < tabs.length) {
    newContent["tabs"][tabs[i][lang]["tab_name"]] = {
      "class": tabs[i]["class"],
      "text": tabs[i][lang]["text"],
    };
    i++;
  }
  newContent["misc"] = misc[lang]

  return newContent;
};


