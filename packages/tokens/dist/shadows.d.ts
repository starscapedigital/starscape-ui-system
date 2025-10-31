export declare const shadows: {
    readonly subtle: "0 2px 4px rgba(0, 0, 0, 0.1)";
    readonly default: "0 4px 12px rgba(0, 0, 0, 0.15)";
    readonly elevated: "0 8px 25px rgba(15, 52, 96, 0.3)";
    readonly deep: "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.2) inset";
};
export declare const shadowsNative: {
    readonly subtle: {
        readonly shadowColor: "#000";
        readonly shadowOffset: {
            readonly width: 0;
            readonly height: 2;
        };
        readonly shadowOpacity: 0.1;
        readonly shadowRadius: 4;
        readonly elevation: 2;
    };
    readonly default: {
        readonly shadowColor: "#000";
        readonly shadowOffset: {
            readonly width: 0;
            readonly height: 4;
        };
        readonly shadowOpacity: 0.15;
        readonly shadowRadius: 12;
        readonly elevation: 4;
    };
    readonly elevated: {
        readonly shadowColor: "#0f3460";
        readonly shadowOffset: {
            readonly width: 0;
            readonly height: 8;
        };
        readonly shadowOpacity: 0.3;
        readonly shadowRadius: 25;
        readonly elevation: 8;
    };
    readonly deep: {
        readonly shadowColor: "#000";
        readonly shadowOffset: {
            readonly width: 0;
            readonly height: 20;
        };
        readonly shadowOpacity: 0.4;
        readonly shadowRadius: 60;
        readonly elevation: 16;
    };
};
