"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.radiiNative = exports.radii = void 0;
exports.radii = {
    xs: '0.25rem', // 4px
    sm: '0.375rem', // 6px
    md: '0.5rem', // 8px
    default: '0.75rem', // 12px
    lg: '0.75rem', // 12px
    xl: '1rem', // 16px
    xxl: '1.5rem', // 24px
    full: '9999px', // Keep px for full (circular elements)
};
// Native radii (numbers)
exports.radiiNative = {
    xs: 4,
    sm: 6, // Between xs (4) and md (8)
    md: 8,
    default: 12,
    lg: 12,
    xl: 16,
    xxl: 24,
    full: 9999,
};
