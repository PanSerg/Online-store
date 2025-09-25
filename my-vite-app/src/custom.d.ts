declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

// Allow importing plain CSS files in TypeScript
declare module "*.css" {
  const content: { [className: string]: string } | string;
  export default content;
}

// Allow importing SVG files (as URL strings)
declare module "*.svg" {
  const value: string;
  export default value;
}