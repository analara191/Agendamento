import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importe suas telas
import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Explorar from "./src/screens/Explorar";
import Reservas from "./src/screens/Reservas";
import Perfil from "./src/screens/Perfil";
import Estabelecimento from "./src/screens/Estabelecimento";
import FazerReserva from "./src/screens/FazerReserva";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Aqui você pode carregar dados, verificar tokens, etc.
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 segundos de Splash
  }, []);

  // Se estiver carregando, mostra apenas a Splash
  if (isLoading) {
    return <Splash />;
  }

  // Quando termina o loading, o Navigation assume o controle
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Explorar"
          component={Explorar}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Reservas"
          component={Reservas}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Estabelecimento"
          component={Estabelecimento}
          options={{ headerShown: false }}
        />

         <Stack.Screen
          name="FazerReserva"
          component={FazerReserva}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
