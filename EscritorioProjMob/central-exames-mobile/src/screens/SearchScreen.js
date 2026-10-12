import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './SearchScreen.styles';
import ScreenHeading from '../components/ScreenHeading';
import SearchField from '../components/SearchField';
import ExamCard from '../components/ExamCard';
import { clinics, exams } from '../data';

export default function SearchScreen({ colors, compact }) {
  const [query, setQuery] = React.useState('');
  const term = query.trim().toLowerCase();
  const foundExams = term ? exams.filter((exam) => `${exam.name} ${exam.category} ${exam.detail}`.toLowerCase().includes(term)) : [];
  const foundClinics = term ? clinics.filter((clinic) => `${clinic.name} ${clinic.neighborhood} ${clinic.address} ${clinic.specialties}`.toLowerCase().includes(term)) : [];
  return <ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
    <ScreenHeading eyebrow="Pesquisa" title="O que você procura?" description="Busque por exame, especialidade ou clínica." colors={colors} />
    <SearchField value={query} onChangeText={setQuery} colors={colors} placeholder="Ex.: hemograma, imagem, Centro" />
    {!term ? <View style={[styles.emptyCard, { backgroundColor: colors.surface, borderColor: colors.border }]}><Text style={[styles.emptyIcon, { color: colors.blue }]}>⌕</Text><Text style={[styles.emptyTitle, { color: colors.text }]}>Encontre seu atendimento</Text><Text style={[styles.emptyText, { color: colors.muted }]}>Digite o nome de um exame ou clínica para ver resultados.</Text></View> : <>
      <Text style={[styles.resultCount, { color: colors.muted }]}>{foundExams.length + foundClinics.length} resultado(s) para “{query}”</Text>
      {foundExams.length > 0 && <><Text style={[styles.groupTitle, { color: colors.text }]}>Exames</Text><View style={styles.list}>{foundExams.map((exam) => <ExamCard key={exam.id} exam={exam} colors={colors} compact={compact} />)}</View></>}
      {foundClinics.length > 0 && <><Text style={[styles.groupTitle, styles.clinicHeading, { color: colors.text }]}>Clínicas</Text><View style={styles.list}>{foundClinics.map((clinic) => <View key={clinic.id} style={[styles.clinicCard, { backgroundColor: colors.surface, borderColor: colors.border }]}><Text style={[styles.clinicName, { color: colors.text }]}>{clinic.name}</Text><Text style={[styles.clinicDetail, { color: colors.muted }]}>{clinic.neighborhood} · {clinic.specialties}</Text></View>)}</View></>}
      {foundExams.length + foundClinics.length === 0 && <Text style={[styles.noResults, { color: colors.muted }]}>Nenhum resultado encontrado. Tente outro termo.</Text>}
    </>}
  </ScrollView>;
}
