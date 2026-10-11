import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';

const exams = [
  { name: 'Hemograma completo', category: 'Laboratório', price: '35,00', time: 'Resultado em até 24h', icon: '≋' },
  { name: 'Ultrassom abdominal', category: 'Imagem', price: '120,00', time: 'Agendamento disponível', icon: '◉' },
  { name: 'Mamografia digital', category: 'Imagem', price: '90,00', time: 'Agendamento disponível', icon: '✳' },
];

const tabs = [
  { label: 'Início', icon: '⌂' },
  { label: 'Exames', icon: '⌕' },
  { label: 'Clínicas', icon: '＋' },
  { label: 'Perfil', icon: '○' },
];

const palettes = {
  light: { bg: '#F3F5F8', surface: '#FFFFFF', text: '#172B4D', muted: '#5F6F86', border: '#E1E6ED', blue: '#1351B4', blueDark: '#0C3B82', blueSoft: '#E8F0FC', green: '#16845B', shadow: '#16325C' },
  dark: { bg: '#111923', surface: '#1A2635', text: '#F1F5FA', muted: '#A4B1C3', border: '#2B394A', blue: '#74A7FF', blueDark: '#9BBEFF', blueSoft: '#233750', green: '#64C99A', shadow: '#000000' },
};

function loadTheme() {
  try { return globalThis.localStorage?.getItem('central-exames-theme') === 'dark' ? 'dark' : 'light'; }
  catch { return 'light'; }
}

function persistTheme(value) {
  try { globalThis.localStorage?.setItem('central-exames-theme', value); }
  catch { /* A tela continua funcionando sem armazenamento do navegador. */ }
}

function AppContent() {
  const { width } = useWindowDimensions();
  const wide = width >= 900;
  const compact = width < 360;
  const [theme, setTheme] = React.useState(loadTheme);
  const [query, setQuery] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('Início');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const colors = palettes[theme];
  const visibleExams = exams.filter((exam) => `${exam.name} ${exam.category}`.toLowerCase().includes(query.trim().toLowerCase()));

  function toggleTheme() {
    setTheme((current) => {
      const next = current === 'light' ? 'dark' : 'light';
      persistTheme(next);
      return next;
    });
  }

  function tabButton(tab, isSidebar = false) {
    const selected = activeTab === tab.label;
    return (
      <Pressable
        key={tab.label}
        onPress={() => { setActiveTab(tab.label); setMenuOpen(false); }}
        accessibilityRole="button"
        accessibilityState={{ selected }}
        accessibilityLabel={tab.label}
        style={[
          isSidebar ? styles.sideItem : styles.bottomItem,
          selected && { backgroundColor: colors.blueSoft },
        ]}
      >
        <Text style={[isSidebar ? styles.sideIcon : styles.tabIcon, { color: selected ? colors.blue : colors.muted }]}>{tab.icon}</Text>
        <Text style={[isSidebar ? styles.sideLabel : styles.tabLabel, { color: selected ? colors.blue : colors.muted, fontWeight: selected ? '700' : '500' }]}>{tab.label}</Text>
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.bg }]}>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={colors.bg} />
      <View style={[styles.app, { backgroundColor: colors.bg }]}>
        {wide && (
          <View style={[styles.sidebar, { backgroundColor: colors.surface, borderRightColor: colors.border }]}>
            <View style={styles.brand}>
              <View style={[styles.brandIcon, { backgroundColor: colors.blue }]}><Text style={styles.brandPlus}>+</Text></View>
              <View><Text style={[styles.brandName, { color: colors.text }]}>Central de Exames</Text><Text style={[styles.brandCaption, { color: colors.muted }]}>SAÚDE PERTO DE VOCÊ</Text></View>
            </View>
            <Text style={[styles.menuCaption, { color: colors.muted }]}>SEU ATENDIMENTO</Text>
            <View style={styles.sideNavigation}>{tabs.map((tab) => tabButton(tab, true))}</View>
            <View style={styles.sideFooter}>
              <Pressable onPress={toggleTheme} style={[styles.themeButton, { borderColor: colors.border }]} accessibilityRole="button" accessibilityLabel="Alternar tema">
                <Text style={[styles.sideIcon, { color: colors.blue }]}>{theme === 'light' ? '☾' : '☀'}</Text><Text style={[styles.themeLabel, { color: colors.text }]}>{theme === 'light' ? 'Modo escuro' : 'Modo claro'}</Text>
              </Pressable>
              <Text style={[styles.sideCaption, { color: colors.muted }]}>CENTRAL DE EXAMES · 1.0</Text>
            </View>
          </View>
        )}

        <View style={styles.main}>
          <View style={[styles.header, { borderBottomColor: colors.border, backgroundColor: colors.bg }]}>
            {!wide && <Pressable onPress={() => setMenuOpen((value) => !value)} style={[styles.headerIconButton, { backgroundColor: colors.surface }]} accessibilityRole="button" accessibilityLabel="Abrir navegação"><Text style={[styles.headerIcon, { color: colors.text }]}>{menuOpen ? '×' : '☰'}</Text></Pressable>}
            <View style={styles.headerBrand}>
              {!wide && <View style={[styles.brandIconSmall, { backgroundColor: colors.blue }]}><Text style={styles.brandPlusSmall}>+</Text></View>}
              <View><Text style={[styles.headerTitle, { color: colors.text }]}>{wide ? 'Central de Exames' : 'Central+'}</Text>{wide && <Text style={[styles.headerSubtitle, { color: colors.muted }]}>Serviços de saúde em um só lugar</Text>}</View>
            </View>
            <View style={styles.headerActions}>
              <Pressable onPress={toggleTheme} style={[styles.headerIconButton, { backgroundColor: colors.surface }]} accessibilityRole="button" accessibilityLabel="Alternar tema"><Text style={[styles.headerIcon, { color: colors.text }]}>{theme === 'light' ? '☾' : '☀'}</Text></Pressable>
              <Pressable onPress={() => setActiveTab('Perfil')} style={[styles.profileButton, { backgroundColor: colors.blueSoft }]} accessibilityRole="button" accessibilityLabel="Abrir perfil"><Text style={[styles.profileInitials, { color: colors.blue }]}>JP</Text></Pressable>
            </View>
          </View>

          {!wide && menuOpen && (
            <View style={[styles.mobileMenu, { backgroundColor: colors.surface, borderColor: colors.border }]}>{tabs.map((tab) => tabButton(tab, true))}</View>
          )}

          <ScrollView contentContainerStyle={[styles.content, wide && styles.contentWide, compact && styles.contentCompact]} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <View style={styles.greeting}>
              <Text style={[styles.greetingLabel, { color: colors.muted }]}>BEM-VINDO(A)</Text>
              <Text style={[styles.greetingTitle, { color: colors.text }]}>Olá, João <Text style={{ color: colors.blue }}>👋</Text></Text>
              <Text style={[styles.greetingSubtitle, { color: colors.muted }]}>Como podemos cuidar de você hoje?</Text>
            </View>

            <View style={[styles.search, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={[styles.searchIcon, { color: colors.blue }]}>⌕</Text>
              <TextInput value={query} onChangeText={setQuery} placeholder="Qual exame você procura?" placeholderTextColor={colors.muted} style={[styles.searchInput, { color: colors.text }]} returnKeyType="search" accessibilityLabel="Buscar exame" />
              {query.length > 0 && <Pressable onPress={() => setQuery('')} accessibilityRole="button" accessibilityLabel="Limpar busca"><Text style={[styles.clearSearch, { color: colors.muted }]}>×</Text></Pressable>}
            </View>

            <View style={[styles.hero, { backgroundColor: colors.blue }]}>
              <View style={styles.heroTextBlock}>
                <View style={styles.heroTag}><Text style={styles.heroTagText}>CUIDADO ACESSÍVEL</Text></View>
                <Text style={[styles.heroTitle, compact && styles.heroTitleCompact]}>Seu próximo exame,{ '\n' }sem complicação.</Text>
                <Text style={styles.heroDescription}>Compare opções e encontre atendimento perto de você.</Text>
                <Pressable onPress={() => setActiveTab('Exames')} style={styles.heroButton} accessibilityRole="button"><Text style={[styles.heroButtonText, { color: colors.blueDark }]}>Buscar exames</Text><Text style={[styles.heroButtonArrow, { color: colors.blueDark }]}>→</Text></Pressable>
              </View>
              <View style={styles.healthIllustration} accessible accessibilityLabel="Símbolo de saúde">
                <View style={styles.healthRing}><View style={styles.healthCrossHorizontal} /><View style={styles.healthCrossVertical} /></View>
                <View style={styles.healthDot} />
              </View>
            </View>

            <View style={styles.sectionHeader}>
              <View><Text style={[styles.sectionTitle, { color: colors.text }]}>Acesso rápido</Text><Text style={[styles.sectionDescription, { color: colors.muted }]}>O que você precisa, em poucos toques</Text></View>
            </View>
            <View style={styles.quickActions}>
              {[
                { label: 'Exames', detail: 'Encontre seu exame', icon: '⌕', tab: 'Exames' },
                { label: 'Clínicas', detail: 'Veja as unidades', icon: '＋', tab: 'Clínicas' },
                { label: 'Agendamentos', detail: 'Consulte horários', icon: '▦', tab: 'Perfil' },
              ].map((item) => <Pressable key={item.label} onPress={() => setActiveTab(item.tab)} style={[styles.quickCard, { backgroundColor: colors.surface, borderColor: colors.border }]} accessibilityRole="button">
                <View style={[styles.quickIconBox, { backgroundColor: colors.blueSoft }]}><Text style={[styles.quickIcon, { color: colors.blue }]}>{item.icon}</Text></View>
                <View style={styles.quickCopy}><Text style={[styles.quickTitle, { color: colors.text }]}>{item.label}</Text><Text style={[styles.quickDetail, { color: colors.muted }]}>{item.detail}</Text></View>
                <Text style={[styles.quickArrow, { color: colors.blue }]}>›</Text>
              </Pressable>)}
            </View>

            <View style={[styles.sectionHeader, styles.examHeading]}>
              <View><Text style={[styles.sectionTitle, { color: colors.text }]}>Exames populares</Text><Text style={[styles.sectionDescription, { color: colors.muted }]}>Opções para começar seu cuidado</Text></View>
              <Pressable onPress={() => setActiveTab('Exames')} style={styles.seeAllButton}><Text style={[styles.seeAll, { color: colors.blue }]}>Ver todos</Text><Text style={[styles.quickArrow, { color: colors.blue }]}>›</Text></Pressable>
            </View>
            <View style={styles.examList}>
              {visibleExams.map((exam) => <Pressable key={exam.name} style={[styles.examCard, { backgroundColor: colors.surface, borderColor: colors.border }]} accessibilityRole="button">
                <View style={[styles.examIconBox, { backgroundColor: colors.blueSoft }]}><Text style={[styles.examIcon, { color: colors.blue }]}>{exam.icon}</Text></View>
                <View style={styles.examBody}>
                  <Text style={[styles.examCategory, { color: colors.green }]}>{exam.category.toUpperCase()}</Text>
                  <Text style={[styles.examName, { color: colors.text }]}>{exam.name}</Text>
                  <Text style={[styles.examMeta, { color: colors.muted }]}>{exam.time}</Text>
                </View>
                <View style={styles.examPriceBlock}><Text style={[styles.examPriceLabel, { color: colors.muted }]}>A partir de</Text><Text style={[styles.examPrice, { color: colors.text }]}>R$ {exam.price}</Text><Text style={[styles.examChevron, { color: colors.blue }]}>›</Text></View>
              </Pressable>)}
              {visibleExams.length === 0 && <Text style={[styles.emptyState, { color: colors.muted }]}>Não encontramos esse exame. Tente outro termo.</Text>}
            </View>
            <Text style={[styles.footer, { color: colors.muted }]}>Informações de valores e horários podem variar por clínica.</Text>
          </ScrollView>

          {!wide && (
            <View style={[styles.bottomBar, { backgroundColor: colors.surface, borderTopColor: colors.border }]}>
              {tabs.map((tab) => {
                const selected = activeTab === tab.label;
                return <Pressable key={tab.label} onPress={() => setActiveTab(tab.label)} style={styles.bottomItem} accessibilityRole="button" accessibilityState={{ selected }} accessibilityLabel={tab.label}>
                  <Text style={[styles.tabIcon, { color: selected ? colors.blue : colors.muted }]}>{tab.icon}</Text>
                  <Text style={[styles.tabLabel, { color: selected ? colors.blue : colors.muted, fontWeight: selected ? '700' : '500' }]}>{tab.label}</Text>
                  {selected && <View style={[styles.tabIndicator, { backgroundColor: colors.blue }]} />}
                </Pressable>;
              })}
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return <AppContent />;
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  app: { flex: 1, flexDirection: 'row' },
  sidebar: { width: 264, paddingHorizontal: 20, paddingTop: 28, paddingBottom: 20, borderRightWidth: 1 },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 11, marginBottom: 44 },
  brandIcon: { width: 42, height: 42, borderRadius: 13, justifyContent: 'center', alignItems: 'center' },
  brandPlus: { color: '#FFFFFF', fontSize: 31, fontWeight: '300', lineHeight: 35 },
  brandName: { fontSize: 15, fontWeight: '800', letterSpacing: -0.3 },
  brandCaption: { fontSize: 8, fontWeight: '700', letterSpacing: 1, marginTop: 3 },
  menuCaption: { fontSize: 9, fontWeight: '800', letterSpacing: 1.3, marginBottom: 11, marginLeft: 9 },
  sideNavigation: { gap: 6 },
  sideItem: { minHeight: 48, borderRadius: 12, paddingHorizontal: 11, flexDirection: 'row', alignItems: 'center', gap: 12 },
  sideIcon: { width: 20, fontSize: 19, textAlign: 'center' },
  sideLabel: { fontSize: 12 },
  sideFooter: { marginTop: 'auto' },
  themeButton: { minHeight: 45, borderTopWidth: 1, flexDirection: 'row', alignItems: 'center', gap: 10, paddingTop: 11 },
  themeLabel: { fontSize: 12, fontWeight: '600' },
  sideCaption: { fontSize: 8, letterSpacing: 0.8, marginTop: 17 },
  main: { flex: 1, minWidth: 0 },
  header: { minHeight: 62, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1 },
  headerBrand: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 9 },
  brandIconSmall: { width: 34, height: 34, borderRadius: 11, alignItems: 'center', justifyContent: 'center' },
  brandPlusSmall: { color: '#FFFFFF', fontSize: 26, lineHeight: 29, fontWeight: '300' },
  headerTitle: { fontSize: 14, fontWeight: '800' },
  headerSubtitle: { fontSize: 10, marginTop: 3 },
  headerActions: { flexDirection: 'row', alignItems: 'center', gap: 9 },
  headerIconButton: { height: 40, width: 40, borderRadius: 13, justifyContent: 'center', alignItems: 'center' },
  headerIcon: { fontSize: 20 },
  profileButton: { width: 38, height: 38, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  profileInitials: { fontSize: 11, fontWeight: '800' },
  mobileMenu: { flexDirection: 'row', flexWrap: 'wrap', gap: 7, padding: 12, borderBottomWidth: 1 },
  content: { paddingHorizontal: 16, paddingTop: 20, paddingBottom: 24 },
  contentCompact: { paddingHorizontal: 12, paddingTop: 16 },
  contentWide: { width: '100%', maxWidth: 1060, alignSelf: 'center', paddingHorizontal: 36, paddingTop: 27 },
  greeting: { marginBottom: 16 },
  greetingLabel: { fontSize: 9, fontWeight: '800', letterSpacing: 1.2, marginBottom: 4 },
  greetingTitle: { fontSize: 23, fontWeight: '800', letterSpacing: -0.5 },
  greetingSubtitle: { fontSize: 12, marginTop: 4 },
  search: { minHeight: 50, borderWidth: 1, borderRadius: 12, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 17 },
  searchIcon: { fontSize: 24, marginRight: 9 },
  searchInput: { flex: 1, minWidth: 0, fontSize: 12, paddingVertical: 10 },
  clearSearch: { fontSize: 21, paddingHorizontal: 5 },
  hero: { borderRadius: 17, minHeight: 202, padding: 18, flexDirection: 'row', alignItems: 'center', overflow: 'hidden', marginBottom: 23 },
  heroTextBlock: { flex: 1, zIndex: 1 },
  heroTag: { alignSelf: 'flex-start', backgroundColor: '#FFFFFF30', paddingHorizontal: 8, paddingVertical: 5, borderRadius: 20, marginBottom: 9 },
  heroTagText: { color: '#FFFFFF', fontSize: 8, fontWeight: '800', letterSpacing: 0.8 },
  heroTitle: { color: '#FFFFFF', fontSize: 21, lineHeight: 26, fontWeight: '800', letterSpacing: -0.4 },
  heroTitleCompact: { fontSize: 18, lineHeight: 23 },
  heroDescription: { color: '#E9F1FF', fontSize: 10, lineHeight: 15, maxWidth: 260, marginTop: 5 },
  heroButton: { minHeight: 38, borderRadius: 10, backgroundColor: '#FFFFFF', alignSelf: 'flex-start', paddingHorizontal: 12, marginTop: 12, flexDirection: 'row', alignItems: 'center', gap: 11 },
  heroButtonText: { fontSize: 10, fontWeight: '800' },
  heroButtonArrow: { fontSize: 14 },
  healthIllustration: { width: 78, height: 100, alignItems: 'center', justifyContent: 'center', marginLeft: 5 },
  healthRing: { width: 69, height: 69, borderRadius: 23, backgroundColor: '#FFFFFF20', borderWidth: 1, borderColor: '#FFFFFF55', alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '-8deg' }] },
  healthCrossHorizontal: { position: 'absolute', width: 36, height: 12, borderRadius: 5, backgroundColor: '#FFFFFF' },
  healthCrossVertical: { position: 'absolute', width: 12, height: 36, borderRadius: 5, backgroundColor: '#FFFFFF' },
  healthDot: { position: 'absolute', width: 9, height: 9, borderRadius: 5, backgroundColor: '#A8DC71', right: 1, top: 9 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 11 },
  sectionTitle: { fontSize: 15, fontWeight: '800', letterSpacing: -0.2 },
  sectionDescription: { fontSize: 10, marginTop: 3 },
  quickActions: { gap: 8, marginBottom: 23 },
  quickCard: { minHeight: 63, borderRadius: 12, borderWidth: 1, paddingHorizontal: 11, flexDirection: 'row', alignItems: 'center', gap: 10 },
  quickIconBox: { width: 38, height: 38, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  quickIcon: { fontSize: 20 },
  quickCopy: { flex: 1 },
  quickTitle: { fontSize: 11, fontWeight: '700' },
  quickDetail: { fontSize: 9, marginTop: 3 },
  quickArrow: { fontSize: 23 },
  examHeading: { marginBottom: 10 },
  seeAllButton: { flexDirection: 'row', alignItems: 'center', gap: 2, paddingVertical: 8, paddingLeft: 8 },
  seeAll: { fontSize: 10, fontWeight: '700' },
  examList: { gap: 8 },
  examCard: { minHeight: 82, borderRadius: 12, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'row', alignItems: 'center', gap: 10 },
  examIconBox: { width: 39, height: 39, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  examIcon: { fontSize: 20 },
  examBody: { flex: 1, minWidth: 0 },
  examCategory: { fontSize: 8, fontWeight: '800', letterSpacing: 0.7, marginBottom: 3 },
  examName: { fontSize: 11, fontWeight: '700' },
  examMeta: { fontSize: 9, marginTop: 4 },
  examPriceBlock: { alignItems: 'flex-end', minWidth: 66 },
  examPriceLabel: { fontSize: 8 },
  examPrice: { fontSize: 11, fontWeight: '800', marginTop: 3 },
  examChevron: { position: 'absolute', right: -4, top: -26, fontSize: 20 },
  emptyState: { fontSize: 11, paddingVertical: 14 },
  footer: { fontSize: 8, lineHeight: 13, textAlign: 'center', marginTop: 17, marginBottom: 7 },
  bottomBar: { minHeight: 58, borderTopWidth: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'stretch', paddingHorizontal: 4 },
  bottomItem: { flex: 1, minHeight: 56, alignItems: 'center', justifyContent: 'center', gap: 2, position: 'relative', paddingTop: 4 },
  tabIcon: { fontSize: 20, lineHeight: 23 },
  tabLabel: { fontSize: 9 },
  tabIndicator: { position: 'absolute', top: 0, width: 24, height: 2, borderBottomLeftRadius: 2, borderBottomRightRadius: 2 },
});
