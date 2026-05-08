import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Adicionamos { navigation } como parâmetro da função
export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Perfil</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.infoSection}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>Heber Stein Mazutti</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoSection}>
          <Text style={styles.label}>E-mail</Text>
          <Text style={styles.value}>heber@99coders.com.br</Text>
        </View>

        <View style={styles.divider} />
      </View>

      {/* Bottom Tab Navigation - Agora com rotas */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../../assets/home.png")}
            style={styles.footerIcon}
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
            style={styles.footerIconActive}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ... (seus estilos continuam os mesmos abaixo)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4DB6AC",
  },
  content: {
    flex: 1,
    paddingTop: 10,
  },
  infoSection: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  label: {
    fontSize: 16,
    color: "#7F8C8D",
    fontWeight: "600",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "#A0A0A0",
  },
  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
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
