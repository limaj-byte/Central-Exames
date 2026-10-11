
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
  StatusBar,
} from 'react-native';

const exames = [
  {
    nome: 'Ultrassom de abdômen total',
    descricao: 'Avaliação dos órgãos abdominais.',
    preco: 'R$ 120,00',
  },
  {
    nome: 'Mamografia',
    descricao: 'Exame de imagem das mamas.',
    preco: 'R$ 90,00',
  },
  {
    nome: 'Tomografia computadorizada',
    descricao: 'Imagens detalhadas para diagnóstico.',
    preco: 'R$ 250,00',
  },
];

export default function App() {
  const [busca, setBusca] = React.useState('');

  const examesFiltrados = exames.filter((exame) =>
    exame.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F8FD" />

      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.cabecalho}>
          <View>
            <Text style={styles.logo}>✚ Central de Exames</Text>
            <Text style={styles.subLogo}>CLÍNICAS CONVENIADAS</Text>
          </View>
          <Text style={styles.menu}>☰</Text>
        </View>

        <View style={styles.banner}>
          <Text style={styles.tituloBanner}>
            Cuidar da sua saúde é o nosso compromisso
          </Text>
          <Text style={styles.textoBanner}>
            Encontre exames e compare clínicas conveniadas.
          </Text>
        </View>

        <TextInput
          style={styles.busca}
          placeholder="Buscar um exame..."
          placeholderTextColor="#7186A5"
          value={busca}
          onChangeText={setBusca}
        />

        <Text style={styles.tituloSecao}>Acesso rápido</Text>

        <View style={styles.categorias}>
          <Text style={styles.categoria}>🔬 Exames</Text>
          <Text style={styles.categoria}>🏥 Clínicas</Text>
          <Text style={styles.categoria}>📅 Agenda</Text>
        </View>

        <Text style={styles.tituloSecao}>Exames em destaque</Text>

        {examesFiltrados.map((exame) => (
          <Pressable
            key={exame.nome}
            style={styles.cartao}
            onPress={() => {}}
          >
            <Text style={styles.nomeExame}>{exame.nome}</Text>
            <Text style={styles.descricao}>{exame.descricao}</Text>
            <Text style={styles.preco}>A partir de {exame.preco}</Text>
          </Pressable>
        ))}

        {examesFiltrados.length === 0 && (
          <Text style={styles.vazio}>
            Nenhum exame encontrado.
          </Text>
        )}
      </ScrollView>

      <View style={styles.navegacao}>
        <Text style={styles.itemAtivo}>⌂ Início</Text>
        <Text style={styles.itemNav}>⌕ Buscar</Text>
        <Text style={styles.itemNav}>▦ Agendamentos</Text>
        <Text style={styles.itemNav}>♙ Perfil</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FD',
  },
  conteudo: {
    padding: 20,
    paddingTop: 45,
    paddingBottom: 25,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  logo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#123B70',
  },
  subLogo: {
    fontSize: 11,
    letterSpacing: 3,
    color: '#7890B1',
    marginTop: 5,
  },
  menu: {
    fontSize: 28,
    color: '#123B70',
  },
  banner: {
    backgroundColor: '#DCEBFC',
    borderRadius: 18,
    padding: 22,
    marginBottom: 22,
  },
  tituloBanner: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#123B70',
    marginBottom: 12,
  },
  textoBanner: {
    fontSize: 15,
    lineHeight: 23,
    color: '#405C82',
  },
  busca: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D7E3F2',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 25,
  },
  tituloSecao: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#123B70',
    marginBottom: 15,
  },
  categorias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
    gap: 8,
  },
  categoria: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    color: '#174C88',
    borderRadius: 12,
    paddingVertical: 17,
    paddingHorizontal: 4,
    overflow: 'hidden',
    fontSize: 12,
    fontWeight: '600',
  },
  cartao: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#E6EDF7',
  },
  nomeExame: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#123B70',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    color: '#607795',
    marginBottom: 12,
  },
  preco: {
    fontSize: 15,
    color: '#1769C2',
    fontWeight: 'bold',
  },
  vazio: {
    color: '#607795',
    textAlign: 'center',
    padding: 20,
  },
  navegacao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E9F4',
    paddingVertical: 15,
    paddingBottom: 25,
  },
  itemAtivo: {
    color: '#1769C2',
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemNav: {
    color: '#7186A5',
    fontSize: 12,
  },
});
