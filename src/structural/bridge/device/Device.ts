// Purpose in bridge pattern: Implementor
export interface Device {
    getName(): string;
    setPower(power: boolean): void;
    getPower(): boolean;
    setVolume(percent: number): void;
    getVolume(): number;
}