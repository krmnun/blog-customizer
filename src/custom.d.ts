// SVG module declaration with named export and default export
declare module '*.svg' {
  import React = require('react');
  const src: string;
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default src;
}

// PNG module declaration
declare module '*.png' {
  const src: string;
  export default src;
}

// JPG module declaration
declare module '*.jpg' {
  const src: string;
  export default src;
}

// JSON module declaration
declare module '*.json' {
  const value: any;
  export default value;
}

// CSS module declaration
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// SCSS module declaration
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// SASS module declaration
declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

