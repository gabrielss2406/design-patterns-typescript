import { Device } from "../device/Device";

// Purpose in bridge pattern: Abstraction
export class RemoteControl {
    constructor(protected device: Device) { }

    togglePower(): void {
        this.device.setPower(!this.device.getPower());
        console.log(`${this.device.getName()} power is ${this.device.getPower() ? 'on' : 'off'}`);
    }
}