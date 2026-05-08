import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  const menuItems = [
    { id: 1, title: 'Minha conta', icon: 'person-outline' as const },
    { id: 2, title: 'Central de segurança', icon: 'shield-checkmark-outline' as const },
    { id: 3, title: 'Meus serviços', icon: 'apps-outline' as const },
    { id: 4, title: 'Privacidade', icon: 'lock-closed' as const },
    { id: 5, title: 'Central de ajuda', icon: 'help-circle' as const },
    { id: 6, title: 'Sobre o aplicativo', icon: 'information-circle' as const },
  ];

  const handleLogout = () => {
    router.replace('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>EcoCycle</Text>
        <View style={styles.profileCircle}>
          <Text style={styles.profileInitial}>PB</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileInfo}>
          <View style={styles.profileAvatar}>
            <Text style={styles.avatarText}>PB</Text>
          </View>
          <Text style={styles.profileName}>Pedro Barros</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <Ionicons name={item.icon} size={24} color="#666" />
              <Text style={styles.menuText}>{item.title}</Text>
              <Ionicons name="chevron-forward" size={20} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#FF5252" />
          <Text style={styles.logoutText}>Sair do aplicativo</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#9C27B0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 30,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#9C27B0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutText: {
    fontSize: 16,
    color: '#FF5252',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
