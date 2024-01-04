// String data
import aboutme from "../assets/strings/aboutme.json";
import careerfield from "../assets/strings/careerfield.json";
import hobbies from "../assets/strings/hobbies.json";

const strings = [aboutme, careerfield, hobbies];

/**
 * Generates a new string set with the specified language.
 * @param {string} lang The new language. Possible values: 'en', 'pt'.
 * @returns {object} An object containing the strings of the selected language.
 */
export const changeLanguage = (lang) => {
  let newContent = {};
  let i = 0;

  // too stupid to figure out how to return
  // {'cls': {'text': 'abc', 'class': 'cls'}}
  // for each string set
  while (i < strings.length) {
    newContent[strings[i][lang]["tab_name"]] = {
      "class": strings[i]["class"],
      "text": strings[i][lang]["text"],
    };
    i++;
  }

  return newContent;
};


