import React from 'react';
import {Text} from 'react-native';
import css from '../theme/CommonCSS';
export default function TextComp({
  children,
  color = css.blackC,
  family = css.fm,
  size = css.f14,
  styles = '',
  style = '',
}) {
  return <Text style={[color, family, size, styles, style]}>{children}</Text>;
}
