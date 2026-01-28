import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useColors } from '../styles/commonStyles';

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
      fontWeight: '700',
      color: colors.primary,
      marginBottom: 24,
      textAlign: 'center',
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
      fontWeight: '600',
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
    exampleBox: {
      backgroundColor: colors.border,
      padding: 12,
      borderRadius: 8,
      marginVertical: 8,
    },
    exampleTitle: {
      fontSize: 13,
      fontWeight: '600',
      color: colors.primary,
      marginBottom: 6,
    },
    exampleText: {
      fontSize: 13,
      color: colors.text,
      fontFamily: 'monospace',
      lineHeight: 20,
      marginBottom: 4,
    },
    ruleBox: {
      backgroundColor: colors.border,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginVertical: 6,
      borderLeftWidth: 4,
      borderLeftColor: colors.secondary,
    },
    ruleTitle: {
      fontSize: 13,
      fontWeight: '600',
      color: colors.primary,
      marginBottom: 4,
    },
    ruleText: {
      fontSize: 13,
      color: colors.text,
      lineHeight: 20,
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
      title: '📍 Símbolos Básicos',
      content: (
        <View>
          <Text style={styles.sectionText}>
            Los números romanos utilizan siete símbolos fundamentales. Cada uno
            tiene un valor numérico específico:
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
      title: '⚙️ Reglas de Formación',
      content: (
        <View>
          <Text style={styles.sectionText}>
            Los números romanos se forman siguiendo reglas específicas:
          </Text>
          <View style={styles.ruleBox}>
            <Text style={styles.ruleTitle}>1. Adición</Text>
            <Text style={styles.ruleText}>
              Los símbolos se suman cuando están juntos en orden descendente.
            </Text>
            <View style={styles.exampleBox}>
              <Text style={styles.exampleText}>VI = 5 + 1 = 6</Text>
              <Text style={styles.exampleText}>XII = 10 + 1 + 1 = 12</Text>
            </View>
          </View>

          <View style={styles.ruleBox}>
            <Text style={styles.ruleTitle}>2. Sustracción</Text>
            <Text style={styles.ruleText}>
              Un símbolo menor antes de uno mayor se resta. Solo se usan: I, X,
              C en sustracción.
            </Text>
            <View style={styles.exampleBox}>
              <Text style={styles.exampleText}>IV = 5 - 1 = 4</Text>
              <Text style={styles.exampleText}>IX = 10 - 1 = 9</Text>
              <Text style={styles.exampleText}>XL = 50 - 10 = 40</Text>
              <Text style={styles.exampleText}>XC = 100 - 10 = 90</Text>
              <Text style={styles.exampleText}>CD = 500 - 100 = 400</Text>
              <Text style={styles.exampleText}>CM = 1000 - 100 = 900</Text>
            </View>
          </View>

          <View style={styles.ruleBox}>
            <Text style={styles.ruleTitle}>3. Repetición</Text>
            <Text style={styles.ruleText}>
              I, X, C, M pueden repetirse hasta tres veces consecutivas. V, L, D
              no se repiten.
            </Text>
            <View style={styles.exampleBox}>
              <Text style={styles.exampleText}>III = 3 (no IIII)</Text>
              <Text style={styles.exampleText}>XXX = 30 (no XXXX)</Text>
              <Text style={styles.exampleText}>MMM = 3000</Text>
            </View>
          </View>
        </View>
      ),
    },
    {
      id: 'examples',
      title: '📚 Ejemplos Prácticos',
      content: (
        <View>
          <Text style={styles.sectionText}>
            Aquí hay ejemplos de cómo se escriben números comunes en romanos:
          </Text>
          <View style={styles.exampleBox}>
            <Text style={styles.exampleTitle}>Números del 1 al 20:</Text>
            <Text style={styles.exampleText}>I=1, II=2, III=3, IV=4, V=5</Text>
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
          <View style={styles.exampleBox}>
            <Text style={styles.exampleTitle}>Decenas (10s):</Text>
            <Text style={styles.exampleText}>
              X=10, XX=20, XXX=30, XL=40, L=50
            </Text>
            <Text style={styles.exampleText}>
              LX=60, LXX=70, LXXX=80, XC=90
            </Text>
          </View>
          <View style={styles.exampleBox}>
            <Text style={styles.exampleTitle}>Números Grandes:</Text>
            <Text style={styles.exampleText}>
              C=100, CC=200, CCC=300, CD=400, D=500
            </Text>
            <Text style={styles.exampleText}>
              DC=600, DCC=700, DCCC=800, CM=900, M=1000
            </Text>
          </View>
          <View style={styles.exampleBox}>
            <Text style={styles.exampleTitle}>Años Modernos:</Text>
            <Text style={styles.exampleText}>1984 = MCMLXXXIV</Text>
            <Text style={styles.exampleText}>2024 = MMXXIV</Text>
            <Text style={styles.exampleText}>2025 = MMXXV</Text>
          </View>
        </View>
      ),
    },
    {
      id: 'history',
      title: '🏛️ Historia y Uso',
      content: (
        <View>
          <Text style={styles.sectionText}>
            Los números romanos se originaron en la antigua Roma hace más de
            2000 años. Fueron el sistema numérico estándar de Europa occidental
            hasta el siglo XIV.
          </Text>
          <View style={styles.exampleBox}>
            <Text style={styles.exampleTitle}>Usos Modernos:</Text>
            <Text style={styles.exampleText}>• Relojes y esferas</Text>
            <Text style={styles.exampleText}>
              • Números de capítulos en libros
            </Text>
            <Text style={styles.exampleText}>
              • Fechas en películas y obras de arte
            </Text>
            <Text style={styles.exampleText}>
              • Eventos especiales (Superbowl, Olimpiadas)
            </Text>
            <Text style={styles.exampleText}>
              • Numeración de listas en documentos formales
            </Text>
          </View>
          <Text style={styles.sectionText}>
            Aunque los números arábigos reemplazaron a los romanos para la
            mayoría de propósitos matemáticos y científicos, los números romanos
            siguen siendo importantes en contextos históricos, educativos y
            ceremoniales.
          </Text>
        </View>
      ),
    },
    {
      id: 'tips',
      title: '💡 Consejos Útiles',
      content: (
        <View>
          <View style={styles.ruleBox}>
            <Text style={styles.ruleTitle}>Para Escribir Números Romanos:</Text>
            <Text style={styles.ruleText}>
              • Siempre comienza con los símbolos de mayor valor • Agrupa los
              símbolos iguales • Usa la sustracción solo en casos específicos
              (4, 9, 40, 90, 400, 900)
            </Text>
          </View>
          <View style={styles.ruleBox}>
            <Text style={styles.ruleTitle}>Para Leer Números Romanos:</Text>
            <Text style={styles.ruleText}>
              • Lee de izquierda a derecha • Si un símbolo menor está antes de
              uno mayor, se resta • Si un símbolo menor está después de uno
              mayor (o igual), se suma
            </Text>
          </View>
          <View style={styles.ruleBox}>
            <Text style={styles.ruleTitle}>Rango Válido:</Text>
            <Text style={styles.ruleText}>
              Esta aplicación trabaja con números del 1 al 3999. Los números
              romanos pueden escribirse hasta números más grandes usando una
              línea encima (vincularia), pero esto es poco común en el uso
              moderno.
            </Text>
          </View>
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
      </ScrollView>
    </View>
  );
};

export default InfoScreen;
