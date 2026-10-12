import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from './ProfileScreen.styles';
import ScreenHeading from '../components/ScreenHeading';
import { sampleProfile } from '../data';

const fields = [
  { label: 'Nome completo', key: 'name' },
  { label: 'CPF', key: 'cpf' },
  { label: 'Data de nascimento', key: 'birthDate' },
  { label: 'Código único', key: 'code' },
];

export default function ProfileScreen({ colors, onSignOut }) {
  return <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
    <ScreenHeading eyebrow="Minha conta" title="Meu perfil" description="Confira seus dados cadastrados." colors={colors} />
    <View style={[styles.profileCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <View style={[styles.avatar, { backgroundColor: colors.blueSoft }]}><Text style={[styles.avatarText, { color: colors.blue }]}>JP</Text></View>
      <Text style={[styles.profileName, { color: colors.text }]}>{sampleProfile.name}</Text>
      <Text style={[styles.profileCaption, { color: colors.muted }]}>PERFIL DE DEMONSTRAÇÃO</Text>
    </View>
    <View style={[styles.detailsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      {fields.map((field, index) => <View key={field.key} style={[styles.field, index < fields.length - 1 && { borderBottomColor: colors.border, borderBottomWidth: 1 }]}><Text style={[styles.fieldLabel, { color: colors.muted }]}>{field.label}</Text><Text selectable style={[styles.fieldValue, { color: colors.text }]}>{sampleProfile[field.key]}</Text></View>)}
    </View>
    <Text style={[styles.notice, { color: colors.muted }]}>Os dados exibidos são fictícios e servem apenas para demonstração.</Text>
    <Pressable onPress={onSignOut} style={[styles.signOut, { borderColor: colors.border }]} accessibilityRole="button"><Text style={[styles.signOutText, { color: colors.blue }]}>Sair do aplicativo</Text></Pressable>
  </ScrollView>;
}
