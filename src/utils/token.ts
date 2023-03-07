import { jwtVerify, SignJWT } from 'jose';

export const creationToken = async (userId: number) => {
  const secret = new TextEncoder().encode(process.env.SECRET_KEY);
  const alg = 'HS256';

  const jwt = await new SignJWT({ userId })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(secret);

  return jwt;
};

export const valitionToken = async (token: string) => {
  try {
    const secret = new TextEncoder().encode(process.env.SECRET_KEY);

    const { payload } = await jwtVerify(token, secret);
    return payload.userId as number;
  } catch (error) {
    return null;
  }
};
