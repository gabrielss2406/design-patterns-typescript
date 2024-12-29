import { Radio } from "./device/Radio";
import { Tv } from "./device/Tv";
import { RemoteControl } from "./remoteControls/RemoteControl";
import { RemoteControlVolume } from "./remoteControls/RemoteControlVolume";

// Client code, which should be executed in the main function
// This function demonstrates how the bridge pattern works
export function clientCode(
    abstraction: RemoteControl | RemoteControlVolume,
): void {
    abstraction.togglePower();

    // Type guard
    if (!('volumeUp' in abstraction)) return;

    abstraction.volumeUp();
    abstraction.volumeUp();
    abstraction.volumeDown();
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);

const tvRemoteControl = new RemoteControlVolume(tv);
clientCode(tvRemoteControl);