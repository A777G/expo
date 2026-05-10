import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function ActionButton({ label, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.badge}>FIOLETOWY SATURN</Text>
        <Text style={styles.title}>AI Boguś Wszechwiedzący</Text>
        <Text style={styles.subtitle}>
          Prototyp asystenta do szybkich odpowiedzi, pomysłów i gotowych scenariuszy prezentacyjnych.
        </Text>

        <View style={styles.actions}>
          <ActionButton label="Przejdź do czatu AI" onPress={() => router.push('/chat')} />
          <ActionButton label="Tryb Wszechwiedzący" onPress={() => router.push('/wszechwiedzacy')} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Co działa teraz</Text>
          <Text style={styles.cardText}>• szybkie odpowiedzi demonstracyjne</Text>
          <Text style={styles.cardText}>• 3 ekrany i gotowy flow do pokazu</Text>
          <Text style={styles.cardText}>• branding pod prezentację awaryjną</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#120B2A' },
  container: { flex: 1, padding: 20, gap: 18 },
  badge: { alignSelf: 'flex-start', color: '#D9C8FF', fontWeight: '700', letterSpacing: 1 },
  title: { color: '#FFFFFF', fontSize: 30, fontWeight: '800' },
  subtitle: { color: '#D5CCEA', lineHeight: 22 },
  actions: { gap: 10 },
  button: {
    backgroundColor: '#6F3CFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  buttonPressed: { opacity: 0.85 },
  buttonText: { color: '#FFFFFF', fontWeight: '700', textAlign: 'center' },
  card: {
    marginTop: 'auto',
    backgroundColor: '#24184A',
    borderRadius: 14,
    padding: 14,
    gap: 6,
    borderWidth: 1,
    borderColor: '#3D2C70',
  },
  cardTitle: { color: '#FFFFFF', fontWeight: '700' },
  cardText: { color: '#D5CCEA' },
});
