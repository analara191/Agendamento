import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const DATA = [
  { id: "1", title: "Médico", icon: require("../../assets/medico.png") },
  { id: "2", title: "Dentista", icon: require("../../assets/dentista.png") },
  { id: "3", title: "Cabeleireiro", icon: require("../../assets/cabelo.png") },
  { id: "4", title: "Personal", icon: require("../../assets/personal.png") },
  { id: "5", title: "Petshop", icon: require("../../assets/pet.png") },
  { id: "6", title: "Pilates", icon: require("../../assets/pilates.png") },
  { id: "7", title: "Manicure", icon: require("../../assets/manicure.png") },
  {
    id: "8",
    title: "Nutricionista",
    icon: require("../../assets/nutricao.png"),
  },
  { id: "9", title: "Lava Car", icon: require("../../assets/lavacar.png") },
];

export default function Home({ navigation }) {
  // Corrigido: Recebendo navigation aqui

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate("Explorar")} // Agora o navigation existe!
    >
      <View style={styles.iconContainer}>
        <Image source={item.icon} style={styles.categoryIcon} />
      </View>
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/loginlogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Agende os seus serviços</Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Qual cidade você está?"
            placeholderTextColor="#999"
          />
          <Image
            source={require("../../assets/pin.png")}
            style={styles.pinIcon}
          />
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/home.png")}
            style={styles.footerIconActive}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Explorar")}>
          <Image
            source={require("../../assets/search.png")}
            style={styles.footerIcon}
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
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  logo: { width: 120, height: 40 },
  content: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  title: { fontSize: 18, color: "#333", marginBottom: 15, fontWeight: "500" },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 50,
    marginBottom: 20,
  },
  searchInput: { flex: 1, fontSize: 16 },
  pinIcon: { width: 20, height: 20, tintColor: "#58c4b9" },

  list: { paddingBottom: 20 },
  categoryItem: {
    flex: 1,
    alignItems: "center",
    marginBottom: 25,
    maxWidth: "33.3%",
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: "#f8f8f8",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryIcon: { width: 50, height: 50 },
  categoryText: { fontSize: 14, color: "#666" },

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
