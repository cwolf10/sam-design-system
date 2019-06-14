import {
  INavigationLink,
  NavigationMode
} from '../../common-navigation/common-navigation-model';

export class FooterModel {
  /**
   * List of sections and their links
   */
  linkSections: FooterLinkSection[];
}

export class FooterLinkSection {
  /**
   * Title text for the section
   */
  text: string;

  /**
   * Links in the section
   */
  links: FooterLink[];
}

export class FooterLink implements INavigationLink {
  /**
   * Internal Angualr Routes, External HREF, EVENT: event on parent component
   */
  mode: NavigationMode;

  /**
   * Text to be displayed in the link
   */
  text: string;

  /**
   * Navigation Route
   */
  route: string;
}
