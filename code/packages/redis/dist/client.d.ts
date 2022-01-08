interface IPublish {
    message: string;
    channel: 'dogs' | 'cats';
}
export declare function publish({ message, channel }: IPublish): void;
export declare function subscribe(): void;
export {};
//# sourceMappingURL=client.d.ts.map