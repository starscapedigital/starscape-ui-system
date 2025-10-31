// Starscape Component Styles
import { StyleSheet } from 'react-native';
import { BorderRadius } from './borderRadius';
import { Colors } from './colors';
import { Shadows } from './shadows';
import { Spacing } from './spacing';
import { Typography } from './typography';

export const ComponentStyles = StyleSheet.create({
  // === CONTAINERS ===
  
  cosmicBackground: {
    flex: 1,
    backgroundColor: Colors.darkNavy,
  },
  
  glassCard: {
    backgroundColor: Colors.glassWhite,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    padding: Spacing.lg,
    ...Shadows.deep,
  },
  
  darkGlassCard: {
    backgroundColor: Colors.darkGlass,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderColor: Colors.borderBlue,
    padding: Spacing.lg,
    ...Shadows.elevated,
  },
  
  // === TYPOGRAPHY ===
  
  heroTitle: {
    ...Typography.hero,
    color: Colors.white,
    textAlign: 'center',
  },
  
  h1: {
    ...Typography.h1,
    color: Colors.white,
  },
  
  h2: {
    ...Typography.h2,
    color: Colors.white,
  },
  
  h3: {
    ...Typography.h3,
    color: Colors.white,
  },
  
  bodyText: {
    ...Typography.body,
    color: Colors.white,
  },
  
  bodyTextLight: {
    ...Typography.body,
    color: Colors.white,
    opacity: 0.9,
  },
  
  caption: {
    ...Typography.caption,
    color: Colors.white,
    opacity: 0.7,
  },
  
  // === BUTTONS ===
  
  primaryButton: {
    backgroundColor: Colors.deepBlue,
    borderRadius: BorderRadius.md,
    paddingVertical: 14,
    paddingHorizontal: 28,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.default,
  },
  
  primaryButtonText: {
    ...Typography.button,
    color: Colors.white,
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    borderRadius: BorderRadius.md,
    borderWidth: 2,
    borderColor: Colors.lightBlue,
    paddingVertical: 12,
    paddingHorizontal: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  secondaryButtonText: {
    ...Typography.button,
    color: Colors.lightBlue,
  },
  
  // === INPUTS ===
  
  textInput: {
    backgroundColor: '#f9f9f9',
    borderRadius: BorderRadius.md,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000',
  },
  
  textInputFocused: {
    backgroundColor: Colors.white,
    borderColor: Colors.deepBlue,
    ...Shadows.subtle,
  },
  
  // === ICONS & IMAGES ===
  
  starLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  
  avatar: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.midNavy,
    ...Shadows.default,
  },
  
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.midNavy,
    ...Shadows.elevated,
  },
  
  // === MESSAGING SPECIFIC ===
  
  messageContainer: {
    flexDirection: 'row',
    marginVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
  
  messageBubbleOwn: {
    backgroundColor: Colors.deepBlue,
    borderRadius: BorderRadius.lg,
    borderBottomRightRadius: 4,
    padding: Spacing.md,
    maxWidth: '75%',
    marginLeft: 'auto',
    ...Shadows.default,
  },
  
  messageBubbleOther: {
    backgroundColor: Colors.darkGlass,
    borderRadius: BorderRadius.lg,
    borderBottomLeftRadius: 4,
    padding: Spacing.md,
    maxWidth: '75%',
    marginRight: 'auto',
    ...Shadows.default,
  },
  
  messageText: {
    ...Typography.body,
    color: Colors.white,
  },
  
  messageTimestamp: {
    ...Typography.caption,
    color: Colors.white,
    opacity: 0.6,
    marginTop: Spacing.xs,
  },
  
  // === LIST ITEMS ===
  
  chatListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.darkGlass,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginHorizontal: Spacing.md,
    marginVertical: Spacing.xs,
    ...Shadows.default,
  },
  
  chatListItemUnread: {
    backgroundColor: Colors.deepBlue,
    borderWidth: 1,
    borderColor: Colors.lightBlue,
  },
  
  // === HEADERS ===
  
  header: {
    backgroundColor: Colors.darkNavy,
    paddingTop: 60, // Account for status bar
    paddingBottom: Spacing.md,
    paddingHorizontal: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBlue,
    ...Shadows.default,
  },
  
  headerTitle: {
    ...Typography.h3,
    color: Colors.white,
    textAlign: 'center',
  },
  
  // === BADGES ===
  
  badge: {
    backgroundColor: Colors.error,
    borderRadius: BorderRadius.full,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xs,
  },
  
  badgeText: {
    ...Typography.caption,
    color: Colors.white,
    fontWeight: '700',
  },
  
  // === DIVIDERS ===
  
  divider: {
    height: 1,
    backgroundColor: Colors.borderBlue,
    marginVertical: Spacing.md,
  },
  
  // === LOADING ===
  
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkNavy,
  },
});

