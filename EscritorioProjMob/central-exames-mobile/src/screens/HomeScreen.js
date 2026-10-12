import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from './HomeScreen.styles';
import ScreenHeading from '../components/ScreenHeading';
import { exams } from '../data';
import ExamCard from '../components/ExamCard';

export default function HomeScreen({ colors, compact, onNavigate }) {
  return <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
    <ScreenHeading eyebrow="Início" title="Olá, João 👋" description="O que você precisa hoje?" colors={colors} />
    <Pressable onPress={() => onNavigate('Buscar')} style={[styles.searchShortcut, { backgroundColor: colors.surface, borderColor: colors.border }]} accessibilityRole="button">
      <Text style={[styles.searchIcon, { color: colors.blue }]}>⌕</Text><Text style={[styles.searchText, { color: colors.muted }]}>Buscar exame ou clínica</Text><Text style={[styles.arrow, { color: colors.blue }]}>→</Text>
    </Pressable>
    <View style={[styles.banner, { backgroundColor: colors.blue }]}>
      <View style={styles.bannerText}><Text style={styles.bannerLabel}>CENTRAL DE EXAMES</Text><Text style={[styles.bannerTitle, compact && styles.bannerTitleCompact]}>Cuide da saúde{ '\n' }com mais facilidade.</Text><Pressable onPress={() => onNavigate('Exames')} style={styles.bannerButton}><Text style={[styles.bannerButtonText, { color: colors.blue }]}>Ver exames</Text></Pressable></View>
      <View style={styles.healthMark}><Text style={styles.healthPlus}>+</Text></View>
    </View>
    <Text style={[styles.sectionTitle, { color: colors.text }]}>Acesso rápido</Text>
    <View style={styles.actions}>
      {[
        { icon: '⌕', label: 'Exames', description: 'Ver catálogo', page: 'Exames' },
        { icon: '＋', label: 'Clínicas', description: 'Encontrar unidade', page: 'Clínicas' },
        { icon: '○', label: 'Meu perfil', description: 'Ver meus dados', page: 'Perfil' },
      ].map((item) => <Pressable key={item.page} onPress={() => onNavigate(item.page)} style={[styles.action, { backgroundColor: colors.surface, borderColor: colors.border }]} accessibilityRole="button">
        <View style={[styles.actionIconBox, { backgroundColor: colors.blueSoft }]}><Text style={[styles.actionIcon, { color: colors.blue }]}>{item.icon}</Text></View><View style={styles.actionText}><Text style={[styles.actionTitle, { color: colors.text }]}>{item.label}</Text><Text style={[styles.actionDescription, { color: colors.muted }]}>{item.description}</Text></View><Text style={[styles.actionArrow, { color: colors.blue }]}>›</Text>
      </Pressable>)}
    </View>
    <Text style={[styles.disclaimer, { color: colors.muted }]}>Valores e horários são demonstrativos.</Text>
  </ScrollView>;
}
