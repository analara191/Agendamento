import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

const RESERVAS = [
  {
    id: "1",
    servico: "Consulta Dr. Alberto Souza",
    local: "Clínica Médica São Remo",
    data: "18/02/2021",
    hora: "09:30h",
    valor: "R$ 350,00",
    endereco: "Av. Nove de Julho, 854\nCentro - São Paulo\n(11) 0000-0000",
  },
  {
    id: "2",
    servico: "Consulta Dr. Alberto Souza",
    local: "Clínica Médica São Remo",
    data: "18/02/2021",
    hora: "09:30h",
    valor: "R$ 350,00",
    endereco: "Av. Nove de Julho, 854\nCentro - São Paulo\n(11) 0000-0000",
  },
];

export default function Reservas({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.servicoTitle}>{item.servico}</Text>
      <Text style={styles.localText}>{item.local}</Text>

      {/* Info Row: Data e Hora */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Image
            source={require("../../assets/calendar.png")}
            style={styles.iconSmall}
          />
          <Text style={styles.infoText}>{item.data}</Text>
        </View>
        <View style={styles.infoRow}>
          <Image
            source={require("../../assets/clock.png")}
            style={styles.iconSmall}
          />
          <Text style={styles.infoText}>{item.hora}</Text>
        </View>
      </View>

      {/* Info Row: Valor */}
      <View style={styles.infoRow}>
        <Image
          source={require("../../assets/valor.png")}
          style={styles.iconSmall}
        />
        <Text style={styles.infoText}>{item.valor}</Text>
      </View>

      {/* Info Row: Endereço */}
      <View style={[styles.infoRow, { alignItems: "flex-start" }]}>
        <Image
          source={require("../../assets/pin.png")}
          style={styles.iconSmall}
        />
        <Text style={styles.infoText}>{item.endereco}</Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonReagendar]}>
          <Text style={styles.buttonText}>Reagendar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonExcluir]}>
          <Text style={styles.buttonText}>Excluir Reserva</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Minhas Reservas</Text>
      </View>

      <FlatList
        data={RESERVAS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {/* Footer Fixo */}
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
        <TouchableOpacity>
          <Image
            source={require("../../assets/calendar.png")}
            style={styles.footerIconActive}
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
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#58c4b9" },
  list: { padding: 15 },

  card: {
    backgroundColor: "#fff",
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  servicoTitle: { fontSize: 18, fontWeight: "bold", color: "#666" },
  localText: { fontSize: 16, color: "#999", marginBottom: 15 },

  infoContainer: { flexDirection: "row", marginBottom: 8 },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 30,
    marginBottom: 8,
  },
  iconSmall: { width: 22, height: 22, marginRight: 8, tintColor: "#58c4b9" },
  infoText: { fontSize: 15, color: "#999" },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    flex: 0.48, // Quase metade da tela cada um
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonReagendar: { backgroundColor: "#58c4b9" },
  buttonExcluir: { backgroundColor: "#e66055" }, // Vermelho do seu print
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "500" },

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
