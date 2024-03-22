import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  protected readonly logger: Logger;
  constructor(private readonly userService: UserService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    try {
      return await this.userService.verifyUser(username, password);
    } catch (e) {
      this.logger.error(e);
      throw new UnauthorizedException(e);
    }
  }
}
