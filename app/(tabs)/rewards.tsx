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

export default function RewardsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Recompensas</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.rewardsButton}>
          <Ionicons name="gift" size={40} color="#4CAF50" />
          <Text style={styles.rewardsButtonText}>Recompensas</Text>
        </TouchableOpacity>

        <View style={styles.pointsSection}>
          <Text style={styles.sectionTitle}>Seus pontos</Text>
          <View style={styles.pointsCard}>
            <Text style={styles.pointsValue}>3.200/8.900</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '36%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.rewardItems}>
          <View style={styles.rewardCard}>
            <View style={styles.rewardInfo}>
              <Text style={styles.discount}>15% off</Text>
              <Text style={styles.rewardTitle}>Produtos sustentáveis</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '53%' }]} />
              </View>
              <Text style={styles.pointsText}>3.200/6.000</Text>
            </View>
          </View>

          <View style={styles.rewardCard}>
            <View style={styles.rewardInfo}>
              <Ionicons name="ticket-outline" size={24} color="#9C27B0" />
              <Text style={styles.rewardTitle}>Cupons de desconto</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '45%' }]} />
              </View>
              <Text style={styles.pointsText}>4.000/8.900</Text>
            </View>
          </View>

          <View style={styles.rewardCard}>
            <View style={styles.rewardInfo}>
              <Ionicons name="bag-outline" size={24} color="#9C27B0" />
              <Text style={styles.rewardTitle}>Lojas Eco</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '45%' }]} />
              </View>
              <Text style={styles.pointsText}>4.000/8.900</Text>
            </View>
          </View>

          <View style={styles.rewardCard}>
            <View style={styles.rewardInfo}>
              <Ionicons name="leaf-outline" size={24} color="#9C27B0" />
              <Text style={styles.rewardTitle}>Sacola Ecológica</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '46%' }]} />
              </View>
              <Text style={styles.pointsText}>3.200/7.000</Text>
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
  rewardsButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    padding: 25,
    marginVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rewardsButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  pointsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  pointsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pointsValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9C27B0',
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  rewardItems: {
    marginBottom: 20,
  },
  rewardCard: {
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
  rewardInfo: {
    flex: 1,
  },
  discount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF9800',
    marginBottom: 5,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  pointsText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
