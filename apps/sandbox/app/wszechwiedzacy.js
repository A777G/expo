import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const scenarios = [
  {
    title: '1) Problem',
    text: '„Oryginalna wersja zniknęła, więc przygotowałem stabilny prototyp demonstracyjny.”',
  },
  {
    title: '2) Rozwiązanie',
    text: '„Mamy 3 czytelne ekrany: Start, Czat AI i Tryb Wszechwiedzący z gotowymi case’ami.”',
  },
  {
    title: '3) Wartość',
    text: '„Użytkownik szybko dostaje odpowiedzi i może przejść przez gotowe scenariusze działania.”',
  },
  {
    title: '4) Plan po prezentacji',
    text: '„Domknięcie formalności publikacji w Google Play i podpięcie produkcyjnego backendu AI.”',
  },
];

export default function WszechwiedzacyScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Tryb Wszechwiedzący</Text>
        <Text style={styles.subtitle}>Gotowe mini-scenariusze wypowiedzi do pokazania na prezentacji.</Text>

        {scenarios.map((item) => (
          <View key={item.title} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#120B2A' },
  container: { padding: 16, gap: 12 },
  title: { color: '#FFFFFF', fontSize: 24, fontWeight: '800' },
  subtitle: { color: '#D5CCEA', marginBottom: 4 },
  card: {
    backgroundColor: '#24184A',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#3D2C70',
    gap: 6,
  },
  cardTitle: { color: '#FFFFFF', fontWeight: '700' },
  cardText: { color: '#D5CCEA', lineHeight: 21 },
});
