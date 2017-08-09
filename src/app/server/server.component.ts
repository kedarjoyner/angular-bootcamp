// components are a typescript class

// needs decorator that tells Angular this is a component
import { Component } from '@angular/core';

// now need to configure Component to tell Angular what to do with it
@Component({
    // html tag needed to use Component in other templates
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }

}