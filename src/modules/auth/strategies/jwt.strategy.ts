import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt } from 'passport-jwt';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  protected readonly logger: Logger;

  constructor(
    configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        // get token
        (request: any) =>
          request?.cookies?.Authentication ||
          request?.Authentication ||
          request?.headers.authentication,
      ]),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: any): Promise<any> {
    const { username } = payload;
    try {
      return await this.userService.getUser(username);
    } catch (e) {
      this.logger.error(e);
      throw new UnauthorizedException(e);
    }
  }
}
