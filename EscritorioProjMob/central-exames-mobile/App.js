import React from 'react';
import { Pressable, SafeAreaView, StatusBar, Text, View, useWindowDimensions } from 'react-native';
import { palettes } from './src/theme';
import { styles } from './src/App.styles';
import HomeScreen from './src/screens/HomeScreen';
import ExamsScreen from './src/screens/ExamsScreen';
import ClinicsScreen from './src/screens/ClinicsScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';

const pages = [
  { id: 'Início', icon: '⌂' },
  { id: 'Exames', icon: '⌕' },
  { id: 'Clínicas', icon: '＋' },
  { id: 'Buscar', icon: '↗' },
  { id: 'Perfil', icon: '○' },
];

export default function App() {
  const { width } = useWindowDimensions();
  const wide = width >= 900;
  const compact = width < 360;
  const [theme, setTheme] = React.useState('light');
  const [page, setPage] = React.useState('Login');
  const colors = palettes[theme];

  function enterApp() { setPage('Início'); }
  function signOut() { setPage('Login'); }
  function goTo(nextPage) { setPage(nextPage); }
  function toggleTheme() { setTheme((value) => value === 'light' ? 'dark' : 'light'); }

  function renderPage() {
    const props = { colors, compact, onNavigate: goTo };
    switch (page) {
      case 'Exames': return <ExamsScreen {...props} />;
      case 'Clínicas': return <ClinicsScreen {...props} />;
      case 'Buscar': return <SearchScreen {...props} />;
      case 'Perfil': return <ProfileScreen {...props} onSignOut={signOut} />;
      default: return <HomeScreen {...props} />;
    }
  }

  if (page === 'Login') {
    return <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}><StatusBar barStyle="dark-content" backgroundColor={colors.background} /><LoginScreen colors={colors} onEnter={enterApp} /></SafeAreaView>;
  }

  function navItem(item, sidebar = false) {
    const active = page === item.id;
    return (
      <Pressable key={item.id} onPress={() => goTo(item.id)} accessibilityRole="button" accessibilityState={{ selected: active }} accessibilityLabel={item.id} style={[sidebar ? styles.sideItem : styles.bottomItem, active && styles.navItemActive]}>
        <Text style={[sidebar ? styles.sideIcon : styles.bottomIcon, active ? styles.navTextActive : styles.navText]}>{item.icon}</Text>
        <Text style={[sidebar ? styles.sideLabel : styles.bottomLabel, active ? styles.navTextActive : styles.navText]}>{item.id}</Text>
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <StatusBar barStyle="light-content" backgroundColor={'#1351B4'} />
      <View style={styles.app}>
        {wide && <View style={styles.sidebar}>
          <View style={styles.brand}><View style={styles.brandMark}><Text style={styles.brandPlus}>+</Text></View><View><Text style={styles.brandName}>Central de Exames</Text><Text style={styles.brandCaption}>SAÚDE PERTO DE VOCÊ</Text></View></View>
          <Text style={styles.navHeading}>MENU PRINCIPAL</Text>
          <View style={styles.sideNavigation}>{pages.map((item) => navItem(item, true))}</View>
          <Pressable onPress={toggleTheme} style={styles.themeButton}><Text style={styles.sideIcon}>{theme === 'light' ? '☾' : '☀'}</Text><Text style={styles.sideLabel}>{theme === 'light' ? 'Modo escuro' : 'Modo claro'}</Text></Pressable>
        </View>}
        <View style={styles.main}>
          <View style={styles.header}>
            {!wide && <View style={styles.headerMark}><Text style={styles.brandPlusSmall}>+</Text></View>}
            <View style={styles.headerCopy}><Text style={styles.headerTitle}>{wide ? 'Central de Exames' : 'Central+'}</Text>{wide && <Text style={styles.headerSubtitle}>Serviços de saúde em um só lugar</Text>}</View>
            <Pressable onPress={toggleTheme} style={styles.headerAction} accessibilityRole="button" accessibilityLabel="Alternar tema"><Text style={styles.headerActionText}>{theme === 'light' ? '☾' : '☀'}</Text></Pressable>
            <Pressable onPress={() => goTo('Perfil')} style={styles.avatar} accessibilityRole="button" accessibilityLabel="Abrir perfil"><Text style={styles.avatarText}>JP</Text></Pressable>
          </View>
          <View style={styles.pageFrame}>{renderPage()}</View>
          {!wide && <View style={styles.bottomBar}>{pages.map((item) => navItem(item))}</View>}
        </View>
      </View>
    </SafeAreaView>
  );
}

