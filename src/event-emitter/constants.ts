export const USER_CREATED_EMIT = 'user.created';

export const USER_UPDATED_EMIT = 'user.updated';

export interface USER_CREATED_PAYLOAD_EMIT {
  username: string;
  payload?: {
    fullName?: string;
  };
}
