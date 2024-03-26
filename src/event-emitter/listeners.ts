import { EventEmitterModule, OnEvent } from '@nestjs/event-emitter';
import {
  USER_CREATED_EMIT,
  USER_CREATED_PAYLOAD_EMIT,
} from '~events-emitter/constants';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      // set this to `true` to use wildcards
      wildcard: true,
    }),
  ],
  providers: [],
})
export class AppEventListeners {
  @OnEvent(USER_CREATED_EMIT)
  userCreated(user: USER_CREATED_PAYLOAD_EMIT): void {
    // todo
    console.log('AppEventListeners createUser', user);
  }
}
