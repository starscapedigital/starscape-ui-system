"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadowsNative = exports.shadows = void 0;
// Web shadows (CSS box-shadow values)
exports.shadows = {
    subtle: '0 2px 4px rgba(0, 0, 0, 0.1)',
    default: '0 4px 12px rgba(0, 0, 0, 0.15)',
    elevated: '0 8px 25px rgba(15, 52, 96, 0.3)',
    deep: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.2) inset',
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
