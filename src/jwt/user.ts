import { env } from '@lib/env';
import { getExpiryTime } from '@lib/tools';
import { IUserPayload } from '@schema/jwt';
import { jwt, sign } from 'hono/jwt';

export const userGenerateToken = async (payload: IUserPayload) => {
  const token = await sign(
    {
      ...payload,
      exp: getExpiryTime(env.USER_JWT_EXPIRE),
    },
    env.USER_JWT_SECRET,
  );

  return token;
};

export const userRefreshToken = async (payload: {
  id: string;
  name: string;
  email: string;
}) => {
  const token = await sign(
    {
      ...payload,
      exp: getExpiryTime(env.USER_JWT_REFRESH_EXPIRE),
    },
    env.USER_JWT_REFRESH_SECRET as string,
  );

  return token;
};

export const userGuard = jwt({
  secret: env.USER_JWT_SECRET,
  alg: 'HS256',
});
