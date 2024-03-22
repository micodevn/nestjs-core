import { registerAs } from '@nestjs/config';

export default registerAs('redisConfig', () => {
  return redisModuleOption;
});

const redisModuleOption = {
  url: 'redis://localhost:6379',
  // cluster: {
  //   nodes: [
  //     { host: '127.0.0.1', port: 7000 },
  //   ],
  // },
};

export const redisOptions = redisModuleOption;
