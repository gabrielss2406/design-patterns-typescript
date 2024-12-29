import { RemoteControl } from "./RemoteControl";

export class RemoteControlVolume extends RemoteControl {
    volumeUp(): void {
        this.device.setVolume(this.device.getVolume() + 10);
        console.log(`${this.device.getName()} volume is ${this.device.getVolume()}`);
    }

    volumeDown(): void {
        this.device.setVolume(this.device.getVolume() - 10);
        console.log(`${this.device.getName()} volume is ${this.device.getVolume()}`);
    }
}