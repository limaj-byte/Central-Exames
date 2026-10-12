import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './ExamCard.styles';

export default function ExamCard({ exam, colors, compact = false }) {
  return <Pressable accessibilityRole="button" style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
    <View style={[styles.iconBox, { backgroundColor: colors.blueSoft }]}><Text style={[styles.icon, { color: colors.blue }]}>{exam.icon}</Text></View>
    <View style={styles.body}>
      <Text style={[styles.category, { color: colors.green }]}>{exam.category.toUpperCase()}</Text>
      <Text style={[styles.name, { color: colors.text }]}>{exam.name}</Text>
      {!compact && <Text style={[styles.detail, { color: colors.muted }]}>{exam.detail}</Text>}
    </View>
    <View style={styles.priceBox}><Text style={[styles.priceLabel, { color: colors.muted }]}>A partir de</Text><Text style={[styles.price, { color: colors.text }]}>R$ {exam.price}</Text></View>
  </Pressable>;
}
