import {Injectable} from '@nestjs/common';
import {EventEmitter2} from '@nestjs/event-emitter';

@Injectable()
export class AppEventEmit {
    constructor(private readonly event: EventEmitter2) {
    }

    emit(eventName: symbol | string, ...values: any[]): any {
        return this.event.emit(eventName, ...values);
    }
    // methods EventEmitter2
}
