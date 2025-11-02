import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Gradients, Spacing, Typography } from '../../theme';

interface NovaCardProps {
  onPress?: () => void;
  isCompact?: boolean;
}

export const NovaCard: React.FC<NovaCardProps> = ({ onPress, isCompact }) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;
  const sparkle1Anim = React.useRef(new Animated.Value(0)).current;
  const sparkle2Anim = React.useRef(new Animated.Value(0)).current;
  const sparkle3Anim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    // Animated sparkles with staggered timing
    const animateSparkle = (anim: Animated.Value, delay: number) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animateSparkle(sparkle1Anim, 0);
    animateSparkle(sparkle2Anim, 500);
    animateSparkle(sparkle3Anim, 1000);
  }, [sparkle1Anim, sparkle2Anim, sparkle3Anim]);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress?.();
  };

  const sparkleStyle1 = {
    opacity: sparkle1Anim,
    transform: [
      {
        scale: sparkle1Anim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1.2],
        }),
      },
    ],
  };

  const sparkleStyle2 = {
    opacity: sparkle2Anim,
    transform: [
      {
        scale: sparkle2Anim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1.2],
        }),
      },
    ],
  };

  const sparkleStyle3 = {
    opacity: sparkle3Anim,
    transform: [
      {
        scale: sparkle3Anim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1.2],
        }),
      },
    ],
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
      style={styles.touchable}
    >
      <Animated.View style={[styles.container, isCompact && styles.containerCompact, { transform: [{ scale: scaleAnim }] }]}>
        <LinearGradient
          colors={Gradients.pinkPurple.colors}
          start={Gradients.pinkPurple.start}
          end={Gradients.pinkPurple.end}
          style={[styles.gradient, isCompact && styles.gradientCompact]}
        >
          <View style={styles.sparklesContainer}>
            <Animated.View style={[styles.sparkle1, isCompact && styles.sparkle1Compact, sparkleStyle1]}>
              <Ionicons name="sparkles" size={isCompact ? 20 : 28} color={Colors.white} />
            </Animated.View>
            <Animated.View style={[styles.sparkle2, isCompact && styles.sparkle2Compact, sparkleStyle2]}>
              <Ionicons name="sparkles" size={isCompact ? 24 : 35} color={Colors.white} />
            </Animated.View>
            <Animated.View style={[styles.sparkle3, isCompact && styles.sparkle3Compact, sparkleStyle3]}>
              <Ionicons name="sparkles" size={isCompact ? 16 : 22} color={Colors.white} />
            </Animated.View>
          </View>

          <View style={[styles.content, isCompact && styles.contentCompact]}>
            <Text style={[styles.title, isCompact && styles.titleCompact]}>✨ Nova AI Assistant</Text>
            {!isCompact && <Text style={styles.subtitle}>Chat with your AI assistant →</Text>}
          </View>
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    marginHorizontal: Spacing.md,
  },
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    height: 180,
  },
  containerCompact: {
    height: 120,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  gradientCompact: {
    padding: Spacing.md,
  },
  sparklesContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  sparkle1: {
    position: 'absolute',
    top: 25,
    left: 35,
  },
  sparkle1Compact: {
    top: 20,
    left: 30,
  },
  sparkle2: {
    position: 'absolute',
    top: 55,
    right: 45,
  },
  sparkle2Compact: {
    top: 50,
    right: 40,
  },
  sparkle3: {
    position: 'absolute',
    bottom: 35,
    left: 55,
  },
  sparkle3Compact: {
    bottom: 30,
    left: 50,
  },
  content: {
    alignItems: 'center',
    zIndex: 1,
  },
  contentCompact: {
    paddingTop: Spacing.sm,
  },
  title: {
    ...Typography.h3,
    color: Colors.white,
    marginBottom: Spacing.xs,
    textAlign: 'center',
  },
  titleCompact: {
    ...Typography.bodyLarge,
  },
  subtitle: {
    ...Typography.body,
    color: Colors.white,
    opacity: 0.9,
    textAlign: 'center',
  },
});

