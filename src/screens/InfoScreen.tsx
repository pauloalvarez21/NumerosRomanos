import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { useColors } from '../styles/commonStyles';
import Card from '../components/Card';
import { texts } from '../utils/i18n';

const InfoScreen = () => {
  const colors = useColors();
  const [expandedSection, setExpandedSection] = useState<string | null>(
    'symbols',
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      paddingBottom: 30,
    },
    title: {
      fontSize: 28,
      color: colors.primary,
      marginBottom: 24,
      textAlign: 'center',
      fontFamily: 'ChowFun-Regular',
    },
    section: {
      marginBottom: 16,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 14,
      backgroundColor: colors.border,
      borderRadius: 10,
    },
    sectionHeaderText: {
      fontSize: 16,
      fontFamily: 'ChowFun-Regular',
      color: colors.primary,
      flex: 1,
    },
    expandIcon: {
      fontSize: 18,
      color: colors.secondary,
      fontWeight: 'bold',
    },
    sectionContent: {
      paddingVertical: 12,
      paddingHorizontal: 14,
      backgroundColor: colors.background,
      borderLeftWidth: 3,
      borderLeftColor: colors.secondary,
      marginTop: 4,
      borderRadius: 8,
    },
    sectionText: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.text,
      marginBottom: 8,
    },
    tableContainer: {
      marginTop: 12,
    },
    tableRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    tableRowHeader: {
      backgroundColor: colors.border,
      fontWeight: '600',
    },
    tableCell: {
      flex: 1,
      fontSize: 14,
    },
    tableCellLabel: {
      color: colors.primary,
      fontWeight: '600',
    },
    tableCellValue: {
      color: colors.text,
    },
    exampleText: {
      fontSize: 13,
      color: colors.text,
      fontFamily: 'monospace',
      lineHeight: 20,
      marginBottom: 4,
    },
    ruleText: {
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

  interface SectionItem {
    id: string;
    title: string;
    content: React.ReactNode;
  }

  const sections: SectionItem[] = [
    {
      id: 'symbols',
      title: 'Símbolos Básicos',
      content: (
        <View>
          <Text style={styles.sectionText}>
            Los números romanos se basan en siete símbolos con valores fijos:
          </Text>
          <View style={styles.tableContainer}>
            <View style={[styles.tableRow, styles.tableRowHeader]}>
              <Text style={[styles.tableCell, styles.tableCellLabel]}>
                Símbolo
              </Text>
              <Text style={[styles.tableCell, styles.tableCellLabel]}>
                Valor
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.tableCellLabel]}>I</Text>
              <Text style={[styles.tableCell, styles.tableCellValue]}>1</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.tableCellLabel]}>V</Text>
              <Text style={[styles.tableCell, styles.tableCellValue]}>5</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.tableCellLabel]}>X</Text>
              <Text style={[styles.tableCell, styles.tableCellValue]}>10</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.tableCellLabel]}>L</Text>
              <Text style={[styles.tableCell, styles.tableCellValue]}>50</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.tableCellLabel]}>C</Text>
              <Text style={[styles.tableCell, styles.tableCellValue]}>100</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.tableCellLabel]}>D</Text>
              <Text style={[styles.tableCell, styles.tableCellValue]}>500</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.tableCellLabel]}>M</Text>
              <Text style={[styles.tableCell, styles.tableCellValue]}>
                1000
              </Text>
            </View>
          </View>
        </View>
      ),
    },
    {
      id: 'rules',
      title: 'Reglas de Formación',
      content: (
        <View>
          <Text style={styles.sectionText}>
            Para escribir números romanos correctamente, sigue estas reglas:
          </Text>
          <Card variant="rule" title="Adición (Suma)">
            <Text style={styles.ruleText}>
              Si una letra está a la derecha de otra de igual o mayor valor, se
              suma.
            </Text>
            <Card variant="example">
              <View style={styles.exampleContent}>
                <Text style={styles.exampleText}>VI = 5 + 1 = 6</Text>
                <Text style={styles.exampleText}>XII = 10 + 1 + 1 = 12</Text>
              </View>
            </Card>
          </Card>

          <Card variant="rule" title="Sustracción (Resta)">
            <Text style={styles.ruleText}>
              Si una letra de menor valor está a la izquierda de una mayor, se
              resta.
            </Text>
            <Card variant="example">
              <View style={styles.exampleContent}>
                <Text style={styles.exampleText}>IV = 5 - 1 = 4</Text>
                <Text style={styles.exampleText}>IX = 10 - 1 = 9</Text>
                <Text style={styles.exampleText}>XL = 50 - 10 = 40</Text>
                <Text style={styles.exampleText}>XC = 100 - 10 = 90</Text>
                <Text style={styles.exampleText}>CD = 500 - 100 = 400</Text>
                <Text style={styles.exampleText}>CM = 1000 - 100 = 900</Text>
              </View>
            </Card>
          </Card>

          <Card variant="rule" title="Repetición">
            <Text style={styles.ruleText}>
              Los símbolos I, X, C y M pueden repetirse hasta tres veces
              seguidas. V, L y D no se repiten.
            </Text>
            <Card variant="example">
              <View style={styles.exampleContent}>
                <Text style={styles.exampleText}>III = 3 (no IIII)</Text>
                <Text style={styles.exampleText}>XXX = 30 (no XXXX)</Text>
                <Text style={styles.exampleText}>MMM = 3000</Text>
              </View>
            </Card>
          </Card>
        </View>
      ),
    },
    {
      id: 'examples',
      title: 'Ejemplos Comunes',
      content: (
        <View>
          <Text style={styles.sectionText}>
            Aquí tienes algunos ejemplos útiles:
          </Text>
          <Card variant="example" title="Números del 1 al 20">
            <View style={styles.exampleContent}>
              <Text style={styles.exampleText}>
                I=1, II=2, III=3, IV=4, V=5
              </Text>
              <Text style={styles.exampleText}>
                VI=6, VII=7, VIII=8, IX=9, X=10
              </Text>
              <Text style={styles.exampleText}>
                XI=11, XII=12, XIII=13, XIV=14, XV=15
              </Text>
              <Text style={styles.exampleText}>
                XVI=16, XVII=17, XVIII=18, XIX=19, XX=20
              </Text>
            </View>
          </Card>
          <Card variant="example" title="Decenas">
            <View style={styles.exampleContent}>
              <Text style={styles.exampleText}>
                X=10, XX=20, XXX=30, XL=40, L=50
              </Text>
              <Text style={styles.exampleText}>
                LX=60, LXX=70, LXXX=80, XC=90
              </Text>
            </View>
          </Card>
          <Card variant="example" title="Centenas y Millares">
            <View style={styles.exampleContent}>
              <Text style={styles.exampleText}>
                C=100, CC=200, CCC=300, CD=400, D=500
              </Text>
              <Text style={styles.exampleText}>
                DC=600, DCC=700, DCCC=800, CM=900, M=1000
              </Text>
            </View>
          </Card>
          <Card variant="example" title="Años">
            <View style={styles.exampleContent}>
              <Text style={styles.exampleText}>1984 = MCMLXXXIV</Text>
              <Text style={styles.exampleText}>2024 = MMXXIV</Text>
              <Text style={styles.exampleText}>2025 = MMXXV</Text>
            </View>
          </Card>
        </View>
      ),
    },
    {
      id: 'history',
      title: 'Historia',
      content: (
        <View>
          <Text style={styles.sectionText}>
            El sistema de numeración romana se originó en la antigua Roma y se
            utilizó en todo el Imperio Romano.
          </Text>
          <Card variant="example" title="Usos Modernos">
            <View style={styles.exampleContent}>
              <Text style={styles.exampleText}>• Relojes</Text>
              <Text style={styles.exampleText}>• Capítulos de libros</Text>
              <Text style={styles.exampleText}>
                • Eventos deportivos (Super Bowl)
              </Text>
              <Text style={styles.exampleText}>• Nombres de reyes y papas</Text>
            </View>
          </Card>
          <Text style={styles.sectionText}>
            Aunque hoy usamos el sistema arábigo, los números romanos siguen
            presentes en nuestra cultura.
          </Text>
        </View>
      ),
    },
    {
      id: 'tips',
      title: 'Consejos',
      content: (
        <View>
          <Card variant="rule" title="Escritura">
            <Text style={styles.ruleText}>
              Descompón el número en millares, centenas, decenas y unidades.
            </Text>
          </Card>
          <Card variant="rule" title="Lectura">
            <Text style={styles.ruleText}>
              Lee de izquierda a derecha, sumando o restando según la posición.
            </Text>
          </Card>
          <Card variant="rule" title="Rango">
            <Text style={styles.ruleText}>
              Esta calculadora soporta números del 1 al 3999.
            </Text>
          </Card>
        </View>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Información</Text>

        {sections.map(section => (
          <View key={section.id} style={styles.section}>
            <Pressable
              style={styles.sectionHeader}
              onPress={() =>
                setExpandedSection(
                  expandedSection === section.id ? null : section.id,
                )
              }
            >
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
              <Text style={styles.expandIcon}>
                {expandedSection === section.id ? '−' : '+'}
              </Text>
            </Pressable>

            {expandedSection === section.id && (
              <View style={styles.sectionContent}>{section.content}</View>
            )}
          </View>
        ))}
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

export default InfoScreen;
