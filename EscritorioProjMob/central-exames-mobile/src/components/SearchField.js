import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './SearchField.styles';

export default function SearchField({ value, onChangeText, colors, placeholder = 'Buscar' }) {
  return <View style={[styles.container, { backgroundColor: colors.surface, borderColor: colors.border }]}>
    <Text style={[styles.icon, { color: colors.blue }]}>⌕</Text>
    <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={colors.muted} style={[styles.input, { color: colors.text }]} returnKeyType="search" accessibilityLabel={placeholder} />
    {!!value && <Pressable onPress={() => onChangeText('')} accessibilityRole="button" accessibilityLabel="Limpar pesquisa"><Text style={[styles.clear, { color: colors.muted }]}>×</Text></Pressable>}
  </View>;
}
