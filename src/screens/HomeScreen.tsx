import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useColors } from '../styles/commonStyles';
import Card from '../components/Card';
import { texts } from '../utils/i18n';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : 'ca-app-pub-2899284558865652/4679996788';

const HomeScreen = () => {
  const colors = useColors();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 30,
    },
    title: {
      fontSize: 32,
      color: colors.primary,
      marginBottom: 8,
      textAlign: 'center',
      fontFamily: 'ChowFun-Regular',
    },
    subtitle: {
      fontSize: 16,
      color: colors.lightText,
      textAlign: 'center',
      marginBottom: 32,
    },
    section: {
      marginBottom: 28,
    },
    sectionTitle: {
      fontSize: 18,
      color: colors.primary,
      marginBottom: 12,
      fontFamily: 'ChowFun-Regular',
    },
    sectionText: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.text,
    },
    highlight: {
      color: colors.secondary,
      fontWeight: '600',
    },
    exampleText: {
      fontSize: 13,
      color: colors.text,
      fontFamily: 'monospace',
    },
    featureText: {
      fontSize: 13,
      color: colors.text,
      lineHeight: 20,
    },
    exampleContent: {
      gap: 4,
    },
    footer: {
      alignItems: 'center',
      paddingTop: 20,
      borderTopWidth: 1,
      borderTopColor: '#E0E0E0',
    },
    footerText: {
      fontSize: 12,
      color: '#666',
      textAlign: 'center',
      marginBottom: 8,
      fontFamily: 'ChowFun-Regular',
    },
    footerSubtext: {
      fontSize: 11,
      color: '#999',
      textAlign: 'center',
      marginBottom: 8,
      fontFamily: 'ChowFun-Regular',
    },
    footerVersion: {
      fontSize: 10,
      color: '#BBB',
      textAlign: 'center',
      fontFamily: 'ChowFun-Regular',
    },
    footerLogo: {
      width: 150,
      height: 150,
      marginTop: 16,
      marginBottom: 32,
      resizeMode: 'contain',
      borderRadius: 30,
    },
  });

  return (
    <View style={styles.container}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          networkExtras: {
            collapsible: 'bottom',
          },
        }}
      />
      <ScrollView style={styles.scrollContent}>
        <Text style={styles.title}>{texts.title}</Text>
        <Text style={styles.subtitle}>{texts.subtitle}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{texts.welcome.title}</Text>
          <Text style={styles.sectionText}>
            {texts.welcome.text1}
            <Text style={styles.highlight}>{texts.welcome.highlight1}</Text>
            {texts.welcome.text2}
            <Text style={styles.highlight}>{texts.welcome.highlight2}</Text>
            {texts.welcome.text3}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{texts.features.title}</Text>
          <Card variant="feature" title={texts.features.f1.title}>
            <Text style={styles.featureText}>{texts.features.f1.text}</Text>
          </Card>
          <Card variant="feature" title={texts.features.f2.title}>
            <Text style={styles.featureText}>{texts.features.f2.text}</Text>
          </Card>
          <Card variant="feature" title={texts.features.f3.title}>
            <Text style={styles.featureText}>{texts.features.f3.text}</Text>
          </Card>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{texts.whatAre.title}</Text>
          <Text style={styles.sectionText}>{texts.whatAre.text}</Text>
          <Card variant="example">
            <View style={styles.exampleContent}>
              <Text style={styles.exampleText}>I = 1 V = 5 X = 10</Text>
              <Text style={styles.exampleText}>L = 50 C = 100 D = 500</Text>
              <Text style={styles.exampleText}>M = 1000</Text>
            </View>
          </Card>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{texts.examples.title}</Text>
          <Card variant="example">
            <View style={styles.exampleContent}>
              <Text style={styles.exampleText}>3 = III</Text>
              <Text style={styles.exampleText}>10 = X</Text>
              <Text style={styles.exampleText}>49 = XLIX</Text>
              <Text style={styles.exampleText}>2024 = MMXXIV</Text>
            </View>
          </Card>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{texts.range.title}</Text>
          <Text style={styles.sectionText}>
            {texts.range.text1}
            <Text style={styles.highlight}>{texts.range.highlight}</Text>
            {texts.range.text2}
          </Text>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>{texts.footer.rights}</Text>
          <Text style={styles.footerSubtext}>{texts.footer.subtext}</Text>
          <Text style={styles.footerVersion}>v1.0.0</Text>
          <Image
            source={require('../assets/images/gaelectronica.png')}
            style={styles.footerLogo}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
