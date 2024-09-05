import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Text, Card, Title, Paragraph, Badge} from 'react-native-paper';

const OfferCard = ({
  title,
  description,
  validUntil,
  backgroundColor,
  badgeText,
  badgeColor,
}: any) => {
  return (
    <Card style={[styles.card, {backgroundColor}]}>
      <View style={styles.cardContent}>
        <View style={styles.textContent}>
          <Title style={styles.title}>{title}</Title>
          <Paragraph>{description}</Paragraph>
          <Paragraph style={styles.validText}>
            Valid until {validUntil}
          </Paragraph>
        </View>
        {badgeText && (
          <Badge style={[styles.badge, {backgroundColor: badgeColor}]}>
            {badgeText}
          </Badge>
        )}
      </View>
    </Card>
  );
};

const OffersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: '#5F95FF'}}>
        <Text style={styles.header}>Offers</Text>
      </View>
      <ScrollView style={{marginHorizontal: 20, marginTop: 20}}>
        <Card style={styles.specialOfferCard}>
          <View style={styles.specialOfferContent}>
            <Text style={styles.specialOfferText}>Special Offers 🎉</Text>
            <Paragraph style={styles.specialOfferDescription}>
              We make sure you get the offer you need at best prices
            </Paragraph>
          </View>
        </Card>

        <Text style={styles.sectionTitle}>Big Sale</Text>
        <OfferCard
          title="Buy 1 Get 1 Free"
          description="For every shoe cleaning service, get a free laundry service for one item."
          validUntil="August 31, 2024"
          backgroundColor="#fff7e6"
          badgeText=""
          badgeColor=""
        />

        <Text style={styles.sectionTitle}>Discounts</Text>
        <OfferCard
          title="Big Summer Sale"
          description="Get 50% off on all shoe polishing services. Make your shoes shine like new!"
          validUntil="August 31, 2024"
          backgroundColor="#ffe6e6"
          badgeText="50%"
          badgeColor="#d32f2f"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
    // marginBottom: 16,
  },
  specialOfferCard: {
    marginBottom: 16,
    backgroundColor: '#5F95FF',
    padding: 16,
    borderRadius: 8,
  },
  specialOfferContent: {
    alignItems: 'center',
  },
  specialOfferText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  specialOfferDescription: {
    textAlign: 'center',
    marginTop: 8,
    color: 'white',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  card: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  validText: {
    marginTop: 8,
    color: '#888',
    fontSize: 12,
  },
  badge: {
    fontSize: 14,
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
});

export default OffersScreen;
