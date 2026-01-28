import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColors } from '../styles/commonStyles';

interface CardProps {
  variant?: 'feature' | 'example' | 'rule';
  title?: string;
  children: React.ReactNode;
}

const Card = ({ variant = 'feature', title, children }: CardProps) => {
  const colors = useColors();

  const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.background,
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: colors.border,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    header: {
      marginBottom: 12,
      borderBottomWidth: variant === 'rule' ? 1 : 0,
      borderBottomColor: colors.border,
      paddingBottom: variant === 'rule' ? 8 : 0,
    },
    title: {
      fontSize: 16,
      color: colors.primary,
      fontFamily: 'ChowFun-Regular',
    },
  });

  return (
    <View style={styles.card}>
      {title && (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      <View>{children}</View>
    </View>
  );
};

export default Card;
