export declare const shadows: {
    readonly subtle: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)";
    readonly default: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.15)";
    readonly elevated: "0 0.5rem 1.5625rem rgba(15, 52, 96, 0.3)";
    readonly deep: "0 1.25rem 3.75rem rgba(0, 0, 0, 0.4), 0 0 0.0625rem rgba(255, 255, 255, 0.2) inset";
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
