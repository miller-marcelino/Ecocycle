import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function DisposalPointsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pontos De Descartes</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            <Ionicons name="map-outline" size={60} color="#9C27B0" />
            <Text style={styles.mapText}>Recupere seu perto EcoCycle</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.navigationButton}>
          <Ionicons name="navigate-outline" size={24} color="#FFFFFF" />
          <Text style={styles.navigationButtonText}>Abrir Navegações</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Empresas Parceiras</Text>
          
          <View style={styles.partnerCard}>
            <View style={styles.partnerInfo}>
              <Text style={styles.partnerName}>PubriPlast</Text>
              <Text style={styles.partnerDistance}>1.2 km</Text>
              <View style={styles.rating}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>1.004 avaliações</Text>
              </View>
              <Text style={styles.collectionTime}>Coleta: 15-30 minutos</Text>
            </View>
          </View>

          <View style={styles.partnerCard}>
            <View style={styles.partnerInfo}>
              <Text style={styles.partnerName}>Reciclar Mais</Text>
              <Text style={styles.partnerDistance}>2.8 km</Text>
              <View style={styles.rating}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>1.024 avaliações</Text>
              </View>
              <Text style={styles.collectionTime}>Coleta: 20-40 minutos</Text>
            </View>
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
  mapContainer: {
    marginVertical: 20,
  },
  mapPlaceholder: {
    height: 200,
    backgroundColor: '#E8F5E8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    fontSize: 16,
    color: '#4CAF50',
    marginTop: 10,
    fontWeight: 'bold',
  },
  navigationButton: {
    backgroundColor: '#9C27B0',
    borderRadius: 25,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  navigationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  partnerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  partnerInfo: {
    flex: 1,
  },
  partnerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  partnerDistance: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  collectionTime: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});
