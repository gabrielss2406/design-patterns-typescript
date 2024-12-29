import { Device } from "./Device";

export class Radio implements Device {
    private power = false;
    private volume = 50;
    private name = 'Radio';

    getName(): string {
        return this.name;
    }

    setPower(power: boolean): void {
        this.power = power;
    }

    getPower(): boolean {
        return this.power;
    }

    setVolume(percent: number): void {
        if (percent < 0) this.volume = 0;
        else if (percent > 100) this.volume = 100;
        else this.volume = percent;
    }

    getVolume(): number {
        return this.volume;
    }
}