import { CSSObjects } from 'types/styles';

export type ParagraphProps = React.HTMLProps<HTMLParagraphElement> & {
  type: TextType.BODY;
  as: TextComponent.P;
};

export type LabelProps = React.HTMLProps<HTMLLabelElement> & {
  type: TextType.BODY | TextType.SUBHEADER;
  as: TextComponent.LABEL;
};

export type HeadingProps = React.HTMLProps<HTMLHeadingElement> &
  (
    | {
        type: TextType.HEADER;
        as: TextComponent.H1;
      }
    | {
        type: TextType.SUBHEADER;
        as: TextComponent.H2;
      }
  );

export type SharedTextProps = {
  styles?: CSSObjects;
};

export type TextProps = (ParagraphProps | LabelProps | HeadingProps) & SharedTextProps;

export enum TextType {
  HEADER = 'HEADER',
  SUBHEADER = 'SUBHEADER',
  BODY = 'BODY'
}

export enum TextComponent {
  H1 = 'H1',
  H2 = 'H2',
  P = 'P',
  LABEL = 'LABEL'
}
