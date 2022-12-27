import { normal as blendRGBA } from "color-blend";
import { interactionStates } from "./theme";

export const addAlpha = (color: string, opacity: number) => {
  const _opacity = Math.round(Math.min(Math.max(opacity ?? 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};

export const hexToRGB = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  if (hex.length > 7) alpha = parseInt(hex.slice(7, 9), 16) / 255;

  if (alpha !== undefined) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgba(${r}, ${g}, ${b}, 1)`;
};

export const parseRGBA = (rgba: string) => {
  if (rgba.startsWith("rgba")) rgba = rgba.replace("rgba", "");
  else rgba = rgba.replace("rgb", "");
  const rgbaList = rgba.substring(1, rgba.length - 1).split(",");
  return {
    r: parseInt(rgbaList[0].trim()),
    g: parseInt(rgbaList[1].trim()),
    b: parseInt(rgbaList[2].trim()),
    a: rgbaList.length > 3 ? parseFloat(rgbaList[3].trim()) : 1,
  };
};

export const blend = (colorA: string, colorB: string, ...otherColors: string[]) => {
  let rgbaA = { r: 0, g: 0, b: 0, a: 0 };
  let rgbaB = { r: 0, g: 0, b: 0, a: 0 };
  if (colorA.startsWith("#")) colorA = hexToRGB(colorA);
  rgbaA = parseRGBA(colorA);
  if (colorB.startsWith("#")) colorB = hexToRGB(colorB);
  rgbaB = parseRGBA(colorB);

  let result = blendRGBA(rgbaA, rgbaB);
  otherColors.forEach((color) => {
    if (color.startsWith("#")) color = hexToRGB(color);
    const currentRGB = parseRGBA(color);
    result = blendRGBA(result, currentRGB);
  });

  return `rgba(${result.r}, ${result.g}, ${result.b}, ${result.a})`;
};

export const generateInteractionStates = (baseColor: string) => {
  return {
    hover: addAlpha(baseColor, interactionStates.hover),
    focus: addAlpha(baseColor, interactionStates.focus),
    press: addAlpha(baseColor, interactionStates.press),
    drag: addAlpha(baseColor, interactionStates.drag),
  };
};

export const lightenDarkenColor = (col: string, amt: number) => {
  let usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};
export const combineLayers = (...layers: string[]) => {
  return layers.map((layer) => `linear-gradient(0deg, ${layer}, ${layer})`).join(",");
};
