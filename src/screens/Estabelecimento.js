import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Estabelecimento = ({ route, navigation }) => {
  // Recebe os dados da clínica via navegação (ou usa o padrão se não houver)
  const { clinica } = route?.params || {
    nome: 'Clínica Médica São Remo',
    endereco: 'Av. Nove de Julho, 854',
    bairro: 'Centro - São Paulo',
    tel: '(11) 0000-0000',
  };

  const servicos = [
    { id: 1, nome: 'Consulta Dr. Alberto Souza', preco: 'R$ 300,00' },
    { id: 2, nome: 'Consulta Dra. Maria Alice', preco: 'R$ 450,00' },
    { id: 3, nome: 'Exame Mamografia', preco: 'R$ 620,00' },
    { id: 4, nome: 'Exame Ultrassom', preco: 'R$ 270,00' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Banner e Botão Voltar */}
        <View style={styles.headerImageContainer}>
          <Image
            source={require('../../assets/clinica.png')} // Certifique-se que a imagem existe neste caminho
            style={styles.banner}
            resizeMode="cover"
          />
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={30} color="#4FD1C5" />
          </TouchableOpacity>
        </View>

        {/* Informações da Clínica */}
        <View style={styles.infoSection}>
          <Text style={styles.title}>{clinica.nome}</Text>
          <Text style={styles.addressText}>{clinica.endereco}</Text>
          <Text style={styles.addressText}>{clinica.bairro}</Text>
          <Text style={styles.addressText}>{clinica.tel}</Text>
        </View>

        <View style={styles.divider} />

        {/* Seção de Serviços */}
        <View style={styles.servicesContainer}>
          <Text style={styles.servicesTitle}>Serviços</Text>

          {servicos.map((servico) => (
  <View key={servico.id} style={styles.serviceItem}>
    <View style={styles.serviceInfo}>
      <Text style={styles.serviceName}>{servico.nome}</Text>
      <Text style={styles.servicePrice}>{servico.preco}</Text>
    </View>
    
    <TouchableOpacity 
      style={styles.agendarButton}
      // ADICIONE ESTA LINHA:
      onPress={() => navigation.navigate("FazerReserva", { servicoSelecionado: servico })}
    >
      <Text style={styles.agendarText}>Agendar</Text>
    </TouchableOpacity>
  </View>
))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerImageContainer: {
    width: '100%',
    height: 250,
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 15,
    padding: 5,
  },
  infoSection: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#718096',
    marginBottom: 8,
  },
  addressText: {
    fontSize: 16,
    color: '#A0AEC0',
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 0,
  },
  servicesContainer: {
    padding: 20,
  },
  servicesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4FD1C5',
    marginBottom: 20,
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F7FAFC',
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 18,
    color: '#718096',
    fontWeight: '500',
  },
  servicePrice: {
    fontSize: 16,
    color: '#4FD1C5',
    marginTop: 4,
  },
  agendarButton: {
    backgroundColor: '#66D2C1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  agendarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Estabelecimento;