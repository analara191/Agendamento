import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FazerReserva = ({ route, navigation }) => {
  // 1. Recebe os dados do serviço vindo da tela de Estabelecimento
  const { servicoSelecionado } = route.params || {};

  // 2. Estados para seleção de data e hora
  const [selectedDate, setSelectedDate] = useState(22);
  const [selectedTime, setSelectedTime] = useState("09:30");

  const diasSemana = ["D", "S", "T", "Q", "Q", "S", "S"];

  // Estrutura do calendário (Fevereiro)
  const diasMes = [
    null,
    null,
    null,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
  ];

  const horarios = ["09:00", "09:30", "10:00", "10:30"];

  const handleConfirmar = () => {
    Alert.alert(
      "Reserva Confirmada",
      `Seu agendamento para ${servicoSelecionado?.nome} no dia ${selectedDate} às ${selectedTime} foi realizado!`,
      [{ text: "OK", onPress: () => navigation.navigate("Reservas") }],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#4FD1C5" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fazer uma reserva</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Calendário */}
        <View style={styles.calendarContainer}>
          <View style={styles.monthHeader}>
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.monthText}>FEVEREIRO</Text>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.weekDaysRow}>
            {diasSemana.map((dia, index) => (
              <Text key={index} style={styles.weekDayText}>
                {dia}
              </Text>
            ))}
          </View>

          <View style={styles.daysGrid}>
            {diasMes.map((dia, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dayButton,
                  selectedDate === dia && styles.selectedDayButton,
                ]}
                onPress={() => dia && setSelectedDate(dia)}
                disabled={!dia}
              >
                <Text
                  style={[
                    styles.dayText,
                    selectedDate === dia && styles.selectedDayText,
                  ]}
                >
                  {dia}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Seleção de Horário */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Horário</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.timeList}
          >
            {horarios.map((hora) => (
              <TouchableOpacity
                key={hora}
                style={[
                  styles.timeButton,
                  selectedTime === hora && styles.selectedTimeButton,
                ]}
                onPress={() => setSelectedTime(hora)}
              >
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === hora && styles.selectedTimeText,
                  ]}
                >
                  {hora}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.divider} />

        {/* Info do Serviço Dinâmica */}
        <View style={styles.infoService}>
          <Text style={styles.serviceName}>
            {servicoSelecionado?.nome || "Consulta Dr. Alberto Souza"}
          </Text>
          <Text style={styles.servicePrice}>
            {servicoSelecionado?.preco || "R$ 300,00"}
          </Text>
        </View>

        {/* Botão Confirmar - Corrigido */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmar}
        >
          <Text style={styles.confirmButtonText}>Confirmar reserva</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#4FD1C5",
    marginRight: 30,
  },
  calendarContainer: { padding: 20 },
  monthHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  monthText: { fontWeight: "bold", fontSize: 16, color: "#4A4A4A" },
  weekDaysRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  weekDayText: { color: "#A0AEC0", fontWeight: "500" },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  dayButton: {
    width: "13%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 2,
  },
  dayText: { fontSize: 16, color: "#4A4A4A", fontWeight: "bold" },
  selectedDayButton: { backgroundColor: "#1ABC9C", borderRadius: 20 },
  selectedDayText: { color: "#FFF" },
  section: { padding: 20 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#718096",
    marginBottom: 15,
  },
  timeList: { flexDirection: "row" },
  timeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginRight: 10,
    minWidth: 80,
    alignItems: "center",
  },
  selectedTimeButton: { backgroundColor: "#66D2C1", borderColor: "#66D2C1" },
  timeText: { color: "#A0AEC0", fontSize: 16 },
  selectedTimeText: { color: "#FFF" },
  divider: { height: 1, backgroundColor: "#F0F0F0" },
  infoService: { padding: 20 },
  serviceName: { fontSize: 18, color: "#A0AEC0", marginBottom: 5 },
  servicePrice: { fontSize: 18, color: "#4FD1C5", fontWeight: "500" },
  confirmButton: {
    backgroundColor: "#66D2C1",
    margin: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 40,
  },
  confirmButtonText: { color: "#FFF", fontSize: 20, fontWeight: "bold" },
});

export default FazerReserva;
