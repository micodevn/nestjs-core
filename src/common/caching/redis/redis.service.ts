import { createClient } from 'redis';
import { redisOptions } from '../../../../config/redis.config';

export class RedisService {
  private redisIns;

  constructor() {
    this.initRedis();
  }

  private initRedis(): void {
    this.redisIns = createClient(redisOptions);

    this.redisIns
      .connect()
      .then(() => {
        console.log('Redis Connected !!! ', redisOptions);
      })
      .catch((error: any) => {
        console.log('Redis can not connect !', error);
      });

    this.redisIns.on('error', (error: any) => {
      console.error('Redis connect fail !', error);
    });
  }

  async set(key: string, value: string): Promise<void> {
    return this.redisIns.set(key, value);
  }

  async get(key: string): Promise<string | null> {
    return this.redisIns.get(key);
  }

  async del(key: string): Promise<number> {
    return this.redisIns.del(key);
  }
}
