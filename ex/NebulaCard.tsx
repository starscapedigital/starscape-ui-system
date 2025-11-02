import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, Gradients, Spacing, Typography } from '../../theme';
import { AnimatedStar } from '../AnimatedStar';

interface NebulaCardProps {
  onPress?: () => void;
  isCompact?: boolean;
}

export const NebulaCard: React.FC<NebulaCardProps> = ({ onPress, isCompact }) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;
  const star1Anim = React.useRef(new Animated.Value(0)).current;
  const star2Anim = React.useRef(new Animated.Value(0)).current;
  const star3Anim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    // Animated stars with staggered timing
    const animateStar = (anim: Animated.Value, delay: number) => {
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

    animateStar(star1Anim, 0);
    animateStar(star2Anim, 500);
    animateStar(star3Anim, 1000);
  }, [star1Anim, star2Anim, star3Anim]);

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

  const starStyle1 = {
    opacity: star1Anim,
    transform: [
      {
        scale: star1Anim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1.2],
        }),
      },
    ],
  };

  const starStyle2 = {
    opacity: star2Anim,
    transform: [
      {
        scale: star2Anim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1.2],
        }),
      },
    ],
  };

  const starStyle3 = {
    opacity: star3Anim,
    transform: [
      {
        scale: star3Anim.interpolate({
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
          colors={Gradients.purpleBlue.colors}
          start={Gradients.purpleBlue.start}
          end={Gradients.purpleBlue.end}
          style={[styles.gradient, isCompact && styles.gradientCompact]}
        >
          <View style={styles.starsContainer}>
            <Animated.View style={[styles.star1, isCompact && styles.star1Compact, starStyle1]}>
              <AnimatedStar size={isCompact ? 22 : 30} />
            </Animated.View>
            <Animated.View style={[styles.star2, isCompact && styles.star2Compact, starStyle2]}>
              <AnimatedStar size={isCompact ? 28 : 40} />
            </Animated.View>
            <Animated.View style={[styles.star3, isCompact && styles.star3Compact, starStyle3]}>
              <AnimatedStar size={isCompact ? 18 : 25} />
            </Animated.View>
          </View>

          <View style={[styles.content, isCompact && styles.contentCompact]}>
            <Text style={[styles.title, isCompact && styles.titleCompact]}>🌌 Starscape Nebula</Text>
            {!isCompact && <Text style={styles.subtitle}>Jump to your collaborative whiteboard →</Text>}
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
  starsContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  star1: {
    position: 'absolute',
    top: 30,
    right: 25,
  },
  star1Compact: {
    top: 15,
    right: 15,
  },
  star2: {
    position: 'absolute',
    bottom: 40,
    right: 35,
  },
  star2Compact: {
    bottom: 20,
    right: 25,
  },
  star3: {
    position: 'absolute',
    top: 60,
    left: 25,
  },
  star3Compact: {
    top: 40,
    left: 20,
  },
  content: {
    alignItems: 'center',
    zIndex: 1,
  },
  contentCompact: {
    padding: Spacing.md,
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

