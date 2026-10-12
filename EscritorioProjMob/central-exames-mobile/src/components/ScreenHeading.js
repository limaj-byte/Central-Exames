import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './ScreenHeading.styles';

export default function ScreenHeading({ eyebrow, title, description, colors }) {
  return <View style={styles.container}>
    {!!eyebrow && <Text style={[styles.eyebrow, { color: colors.blue }]}>{eyebrow.toUpperCase()}</Text>}
    <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
    {!!description && <Text style={[styles.description, { color: colors.muted }]}>{description}</Text>}
  </View>;
}
