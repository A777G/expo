import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const demoAnswers = [
  'Jasne. Najpierw pokaż problem, potem rozwiązanie, na końcu efekt i następny krok.',
  'Skrót na prezentację: działający prototyp > roadmapa > konkretna data publikacji.',
  'Powiedz: “To wersja demo, produkcja po formalnościach sklepowych i testach końcowych”.',
  'Twoja przewaga: szybkie iteracje, czytelny UX i gotowość do feedbacku użytkowników.',
];

export default function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Cześć, jestem AI Boguś. Jak mogę pomóc przed prezentacją?' },
  ]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');

    setTimeout(() => {
      const answer = demoAnswers[Math.floor(Math.random() * demoAnswers.length)];
      setMessages((prev) => [...prev, { role: 'ai', text: answer }]);
    }, 400);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Czat AI (demo)</Text>

        <ScrollView contentContainerStyle={styles.list}>
          {messages.map((message, index) => (
            <View
              key={`${message.role}-${index}`}
              style={[styles.message, message.role === 'user' ? styles.userMessage : styles.aiMessage]}>
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputRow}>
          <TextInput
            placeholder="Napisz pytanie..."
            placeholderTextColor="#9F94BF"
            value={input}
            onChangeText={setInput}
            style={styles.input}
          />
          <Pressable onPress={sendMessage} style={({ pressed }) => [styles.send, pressed && styles.sendPressed]}>
            <Text style={styles.sendText}>Wyślij</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#120B2A' },
  container: { flex: 1, padding: 16, gap: 12 },
  title: { color: '#FFFFFF', fontSize: 22, fontWeight: '700' },
  list: { gap: 10, paddingVertical: 4 },
  message: { borderRadius: 12, padding: 12, maxWidth: '90%' },
  userMessage: { alignSelf: 'flex-end', backgroundColor: '#6F3CFF' },
  aiMessage: { alignSelf: 'flex-start', backgroundColor: '#2B1E55' },
  messageText: { color: '#FFFFFF' },
  inputRow: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  input: {
    flex: 1,
    backgroundColor: '#1E143D',
    color: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#3A2A6C',
  },
  send: { backgroundColor: '#6F3CFF', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 10 },
  sendPressed: { opacity: 0.85 },
  sendText: { color: '#FFFFFF', fontWeight: '700' },
});
