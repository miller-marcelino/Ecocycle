import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ChatScreen() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Olá, Usuário! Eu sou o assistente do EcoCycle. Posso te ajudar a descartar resíduos ou encontrar postos próximos.',
      isBot: true,
    },
    {
      id: 2,
      text: 'Descartar um Item',
      isBot: false,
      isButton: true,
    },
    {
      id: 3,
      text: 'Qual item você deseja descartar?',
      isBot: true,
    },
    {
      id: 4,
      text: 'Plástico',
      isBot: false,
      isButton: true,
    },
    {
      id: 5,
      text: 'Eletrônico',
      isBot: false,
      isButton: true,
    },
    {
      id: 6,
      text: 'Óleo',
      isBot: false,
      isButton: true,
    },
    {
      id: 7,
      text: 'Papel',
      isBot: false,
      isButton: true,
    },
    {
      id: 8,
      text: 'Buscando informações...',
      isBot: true,
    },
    {
      id: 9,
      text: 'Resíduos eletrônicos não devem ser descartados no lixo comum. Deseja ver pontos de coleta?',
      isBot: true,
    },
    {
      id: 10,
      text: 'Ver no mapa',
      isBot: false,
      isButton: true,
    },
    {
      id: 11,
      text: 'Ver impacto ambiental',
      isBot: false,
      isButton: true,
    },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: message,
        isBot: false,
      }]);
      setMessage('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>EcoCycle IA</Text>
        <View style={styles.placeholder} />
      </View>

      <KeyboardAvoidingView 
        style={styles.flexContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
          {messages.map((msg) => (
            <View key={msg.id} style={styles.messageContainer}>
              {msg.isBot ? (
                <View style={styles.botMessage}>
                  <Text style={styles.botMessageText}>{msg.text}</Text>
                </View>
              ) : (
                <View style={styles.userMessageContainer}>
                  {msg.isButton ? (
                    <TouchableOpacity style={styles.messageButton}>
                      <Text style={styles.messageButtonText}>{msg.text}</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.userMessage}>
                      <Text style={styles.userMessageText}>{msg.text}</Text>
                    </View>
                  )}
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Próxima pergunta"
            placeholderTextColor="#9E9E9E"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  flexContainer: {
    flex: 1,
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
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  messageContainer: {
    marginBottom: 10,
  },
  botMessage: {
    backgroundColor: '#E1BEE7',
    borderRadius: 15,
    padding: 15,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  botMessageText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  userMessageContainer: {
    alignItems: 'flex-end',
  },
  userMessage: {
    backgroundColor: '#9C27B0',
    borderRadius: 15,
    padding: 15,
    maxWidth: '80%',
  },
  userMessageText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  messageButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#9C27B0',
    marginBottom: 5,
  },
  messageButtonText: {
    fontSize: 14,
    color: '#9C27B0',
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight: 100,
    fontSize: 14,
  },
  sendButton: {
    backgroundColor: '#9C27B0',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
