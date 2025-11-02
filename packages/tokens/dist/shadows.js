"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadowsNative = exports.shadows = void 0;
// Web shadows (CSS box-shadow values)
exports.shadows = {
    subtle: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)', // 0 2px 4px
    default: '0 0.25rem 0.75rem rgba(0, 0, 0, 0.15)', // 0 4px 12px
    elevated: '0 0.5rem 1.5625rem rgba(15, 52, 96, 0.3)', // 0 8px 25px -> rounded to 1.5625rem
    deep: '0 1.25rem 3.75rem rgba(0, 0, 0, 0.4), 0 0 0.0625rem rgba(255, 255, 255, 0.2) inset', // 0 20px 60px, 0 0 1px
};
// Native shadows (React Native shadow props)
exports.shadowsNative = {
    subtle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // Android
    },
    default: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 4,
    },
    elevated: {
        shadowColor: '#0f3460',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 25,
        elevation: 8,
    },
    deep: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.4,
        shadowRadius: 60,
        elevation: 16,
    },
};
