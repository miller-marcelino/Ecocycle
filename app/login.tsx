import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [login, setLogin] = useState('oliviahelena540@gmail.com');
  const [senha, setSenha] = useState('sixseven');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Ionicons name="leaf" size={60} color="#4CAF50" />
          <Ionicons name="refresh" size={40} color="#4CAF50" style={styles.refreshIcon} />
        </View>
        <Text style={styles.logoText}>Eco Cycle</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="LOGIN"
            placeholderTextColor="#9E9E9E"
            value={login}
            onChangeText={setLogin}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="SENHA"
            placeholderTextColor="#9E9E9E"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E8F5E8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  refreshIcon: {
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 20,
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#E1BEE7',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#9C27B0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
