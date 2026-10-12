import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './LoginScreen.styles';

export default function LoginScreen({ colors, onEnter }) {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return <View style={[styles.page, { backgroundColor: colors.background }]}>
    <View style={[styles.mark, { backgroundColor: colors.blue }]}><Text style={styles.plus}>+</Text></View>
    <Text style={[styles.brand, { color: colors.text }]}>Central de Exames</Text>
    <Text style={[styles.caption, { color: colors.muted }]}>SAÚDE PERTO DE VOCÊ</Text>
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      <Text style={[styles.eyebrow, { color: colors.blue }]}>ACESSO PARA TESTES</Text>
      <Text style={[styles.title, { color: colors.text }]}>Entre na sua conta</Text>
      <Text style={[styles.description, { color: colors.muted }]}>Preencha os campos para visualizar a tela de entrada. Os dados são apenas demonstrativos.</Text>
      <Text style={[styles.fieldLabel, { color: colors.text }]}>Nome</Text>
      <TextInput value={name} onChangeText={setName} placeholder="Digite seu nome" placeholderTextColor={colors.muted} autoCapitalize="words" style={[styles.input, { backgroundColor: colors.background, borderColor: colors.border, color: colors.text }]} accessibilityLabel="Nome" />
      <Text style={[styles.fieldLabel, styles.passwordLabel, { color: colors.text }]}>Senha</Text>
      <TextInput value={password} onChangeText={setPassword} placeholder="Digite sua senha" placeholderTextColor={colors.muted} secureTextEntry style={[styles.input, { backgroundColor: colors.background, borderColor: colors.border, color: colors.text }]} accessibilityLabel="Senha" />
      <Pressable onPress={onEnter} style={[styles.button, { backgroundColor: colors.blue }]} accessibilityRole="button"><Text style={styles.buttonText}>Entrar</Text><Text style={styles.buttonArrow}>→</Text></Pressable>
      <Text style={[styles.note, { color: colors.muted }]}>Acesso de demonstração: nome e senha não são validados nem enviados.</Text>
    </View>
  </View>;
}
