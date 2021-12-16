import dedent from "dedent";

/*
  From pesticide v1.3.0 . @mrmrs . MIT
*/
export default function overlay(selector) {
  return dedent/* css */ `
    ${selector} section {
      background-color: #2980b9 !important;
    }`;
}
