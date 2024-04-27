import pino from 'pino';
import { env } from '@/env';

const transport = pino.transport({
  targets: [
    {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
    ...(env.NODE_ENV === 'production' && env.LOGSTREAM_SOURCE_TOKEN
      ? [
          {
            target: '@logtail/pino',
            options: { sourceToken: env.LOGSTREAM_SOURCE_TOKEN },
            level: 'warn',
          },
        ]
      : []),
  ],
});

export const logger = pino(transport);
