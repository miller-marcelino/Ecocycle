import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function RecyclersScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Recicladores</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.recyclerCard}>
          <View style={styles.recyclerImage}>
            <Ionicons name="person" size={60} color="#4CAF50" />
          </View>
          <View style={styles.recyclerInfo}>
            <Text style={styles.recyclerTitle}>Recicla Fácil</Text>
            <Text style={styles.recyclerSubtitle}>Recicle plástico</Text>
            <View style={styles.locationInfo}>
              <Ionicons name="location-outline" size={16} color="#666" />
              <Text style={styles.address}>300m Av. Brasil, 90</Text>
            </View>
            <TouchableOpacity style={styles.phoneButton}>
              <Ionicons name="call-outline" size={20} color="#FFFFFF" />
              <Text style={styles.phoneNumber}>(11) 92566-2589</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.recyclerCard}>
          <View style={styles.recyclerImage}>
            <Ionicons name="person" size={60} color="#4CAF50" />
          </View>
          <View style={styles.recyclerInfo}>
            <Text style={styles.recyclerTitle}>EcoColeta</Text>
            <Text style={styles.recyclerSubtitle}>Recicle vidro e alumínio</Text>
            <View style={styles.locationInfo}>
              <Ionicons name="location-outline" size={16} color="#666" />
              <Text style={styles.address}>500m Rua Verde, 123</Text>
            </View>
            <TouchableOpacity style={styles.phoneButton}>
              <Ionicons name="call-outline" size={20} color="#FFFFFF" />
              <Text style={styles.phoneNumber}>(11) 93456-7890</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.recyclerCard}>
          <View style={styles.recyclerImage}>
            <Ionicons name="person" size={60} color="#4CAF50" />
          </View>
          <View style={styles.recyclerInfo}>
            <Text style={styles.recyclerTitle}>Reutiliza Brasil</Text>
            <Text style={styles.recyclerSubtitle}>Recicle papel e metal</Text>
            <View style={styles.locationInfo}>
              <Ionicons name="location-outline" size={16} color="#666" />
              <Text style={styles.address}>1.2km Rua Sustentável, 45</Text>
            </View>
            <TouchableOpacity style={styles.phoneButton}>
              <Ionicons name="call-outline" size={20} color="#FFFFFF" />
              <Text style={styles.phoneNumber}>(11) 91234-5678</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  recyclerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recyclerImage: {
    width: 80,
    height: 80,
    backgroundColor: '#E8F5E8',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  recyclerInfo: {
    flex: 1,
  },
  recyclerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  recyclerSubtitle: {
    fontSize: 14,
    color: '#4CAF50',
    marginBottom: 10,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  phoneButton: {
    backgroundColor: '#9C27B0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  phoneNumber: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
