import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from './ClinicsScreen.styles';
import ScreenHeading from '../components/ScreenHeading';
import { clinics } from '../data';

export default function ClinicsScreen({ colors }) {
  return <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
    <ScreenHeading eyebrow="Rede de atendimento" title="Clínicas" description="Unidades de exemplo em Manaus." colors={colors} />
    <View style={[styles.notice, { backgroundColor: colors.blueSoft }]}><Text style={[styles.noticeText, { color: colors.blue }]}>Unidades e endereços abaixo são fictícios e servem apenas para demonstração.</Text></View>
    <View style={styles.list}>{clinics.map((clinic) => <Pressable key={clinic.id} style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]} accessibilityRole="button">
      <View style={[styles.iconBox, { backgroundColor: colors.blueSoft }]}><Text style={[styles.icon, { color: colors.blue }]}>＋</Text></View>
      <View style={styles.cardContent}><Text style={[styles.name, { color: colors.text }]}>{clinic.name}</Text><Text style={[styles.neighborhood, { color: colors.blue }]}>{clinic.neighborhood}</Text><Text style={[styles.detail, { color: colors.muted }]}>{clinic.address}</Text><Text style={[styles.detail, { color: colors.muted }]}>{clinic.specialties}</Text><Text style={[styles.hours, { color: colors.muted }]}>{clinic.hours}</Text></View>
      <Text style={[styles.chevron, { color: colors.blue }]}>›</Text>
    </Pressable>)}</View>
  </ScrollView>;
}
