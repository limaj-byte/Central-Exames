import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  page: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 22 },
  mark: { width: 54, height: 54, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
  plus: { color: '#FFFFFF', fontSize: 39, fontWeight: '300', lineHeight: 43 },
  brand: { fontSize: 21, fontWeight: '800', marginTop: 13 },
  caption: { fontSize: 8, letterSpacing: 1.6, fontWeight: '700', marginTop: 5 },
  card: { width: '100%', maxWidth: 440, borderWidth: 1, borderRadius: 18, padding: 21, marginTop: 26 },
  eyebrow: { fontSize: 9, fontWeight: '800', letterSpacing: 1 },
  title: { fontSize: 22, lineHeight: 28, fontWeight: '800', marginTop: 9 },
  description: { fontSize: 12, lineHeight: 19, marginTop: 7, marginBottom: 15 },
  fieldLabel: { fontSize: 11, fontWeight: '700', marginBottom: 6 },
  passwordLabel: { marginTop: 12 },
  input: { minHeight: 46, borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, fontSize: 12 },
  button: { minHeight: 48, borderRadius: 11, marginTop: 19, paddingHorizontal: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  buttonText: { color: '#FFFFFF', fontSize: 12, fontWeight: '800' },
  buttonArrow: { color: '#FFFFFF', fontSize: 19 },
  note: { fontSize: 9, lineHeight: 14, textAlign: 'center', marginTop: 12 },
});
