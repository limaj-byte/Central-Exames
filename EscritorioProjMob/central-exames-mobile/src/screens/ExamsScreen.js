import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './ExamsScreen.styles';
import ScreenHeading from '../components/ScreenHeading';
import ExamCard from '../components/ExamCard';
import { exams } from '../data';

export default function ExamsScreen({ colors, compact }) {
  const groups = [...new Set(exams.map((exam) => exam.category))];
  return <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
    <ScreenHeading eyebrow="Catálogo" title="Exames" description="Consulte opções e valores demonstrativos." colors={colors} />
    {groups.map((group) => <View key={group} style={styles.group}><Text style={[styles.groupTitle, { color: colors.text }]}>{group}</Text><View style={styles.list}>{exams.filter((exam) => exam.category === group).map((exam) => <ExamCard key={exam.id} exam={exam} colors={colors} compact={compact} />)}</View></View>)}
  </ScrollView>;
}
