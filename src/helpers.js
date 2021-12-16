import global from "global";

export const clearOverlays = (selector) => {
  const selectors = Array.isArray(selector) ? selector : [selector];
  selectors.forEach(clearOverlay);
};

const clearOverlay = (selector) => {
  const element = global.document.getElementById(selector);
  if (element && element.parentElement) {
    element.parentElement.removeChild(element);
  }
};

export const addOverlays = (selector, css) => {
  const existingStyle = global.document.getElementById(selector);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    const style = global.document.createElement("style");
    style.setAttribute("id", selector);
    style.innerHTML = css;
    global.document.head.appendChild(style);
  }
};
