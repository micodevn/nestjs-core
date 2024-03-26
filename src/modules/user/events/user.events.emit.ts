import { AppEventEmit } from '~events-emitter/emitters';
import {
  USER_CREATED_EMIT,
  USER_CREATED_PAYLOAD_EMIT,
} from '~events-emitter/constants';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserEventEmit extends AppEventEmit {
  userCreated(user: USER_CREATED_PAYLOAD_EMIT): boolean {
    return this.emit(USER_CREATED_EMIT, user);
  }
}
