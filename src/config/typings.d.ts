interface INavLink {
  text: string;
  icon?: React.ReactElement;
  path?: string;
  children?: Array<{ text: string; path?: string }>;
}
