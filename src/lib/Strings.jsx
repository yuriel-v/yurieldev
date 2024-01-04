// String data
import aboutme from "../assets/strings/aboutme.json";
import careerfield from "../assets/strings/careerfield.json";
import hobbies from "../assets/strings/hobbies.json";

const strings = [aboutme, careerfield, hobbies];

export const loadStrings = (lang) => {
  let newContent = {};
  let i = 0;

  // too stupid to figure out how to return
  // {'cls': {'text': 'abc', 'class': 'cls'}}
  // for each string set
  while (i < strings.length) {
    newContent[strings[i]["tab_name"]] = {
      "class": strings[i]["class"],
      "text": strings[i][lang]["text"],
    };
    i++;
  }

  return newContent;
};


