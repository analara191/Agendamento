import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

// Dados fictícios baseados no seu print
const ESTABELECIMENTOS = [
  {
    id: "1",
    nome: "Clínica São Gabriel",
    endereco: "Av. Brasil, 1500",
    bairro: "Jardins - São Paulo",
    tel: "(11) 0000-0000",
  },
  {
    id: "2",
    nome: "Clínica Médica São Remo",
    endereco: "Av. Nove de Julho, 854",
    bairro: "Centro - São Paulo",
    tel: "(11) 0000-0000",
  },
  {
    id: "3",
    nome: "Clínica Médica Assis",
    endereco: "Rua Itapura, 695",
    bairro: "Bela Vista - São Paulo",
    tel: "(11) 0000-0000",
  },
  {
    id: "4",
    nome: "Clínica Médica Integrada",
    endereco: "Rua Cardoso de Almeida, 997",
    bairro: "Perdizes - São Paulo",
    tel: "(11) 0000-0000",
  },
];

export default function Explorar({ navigation }) {
 const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemCard} 
      onPress={() => navigation.navigate("Estabelecimento", { clinica: item })}
    >
      <Text style={styles.itemNome}>{item.nome}</Text>
      <Text style={styles.itemSub}>{item.endereco}</Text>
      <Text style={styles.itemSub}>{item.bairro}</Text>
      <Text style={styles.itemSub}>{item.tel}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com Botão Voltar e Título */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={require("../../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Explorar</Text>
          <Text style={styles.headerSub}>Médico</Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* Barra de Pesquisa */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            placeholderTextColor="#bbb"
          />
        </View>

        {/* Lista de Clínicas */}
        <FlatList
          data={ESTABELECIMENTOS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Footer (Simulado) */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../../assets/home.png")}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../../assets/search.png")}
            style={styles.footerIconActive}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Reservas")}>
          <Image
            source={require("../../assets/calendar.png")}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
          <Image
            source={require("../../assets/user.png")}
            style={styles.footerIcon}
          />
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: { position: "absolute", left: 15, zIndex: 1 },
  backIcon: { width: 30, height: 30, tintColor: "#58c4b9" },
  titleContainer: { flex: 1, alignItems: "center" },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#58c4b9" },
  headerSub: { fontSize: 16, color: "#999" },

  content: { flex: 1 },

  searchContainer: {
    padding: 15,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 45,
    backgroundColor: "#f1f4f4",
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#666",
  },

  itemCard: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  itemNome: { fontSize: 18, fontWeight: "600", color: "#666", marginBottom: 4 },
  itemSub: { fontSize: 15, color: "#999", lineHeight: 20 },

  separator: {
    height: 1,
    backgroundColor: "#eee",
    width: "100%",
  },

  footer: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingBottom: 10,
  },
  footerIcon: { width: 28, height: 28, tintColor: "#ccc" },
  footerIconActive: { width: 28, height: 28, tintColor: "#58c4b9" },
});
