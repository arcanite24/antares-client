import { NowRequest, NowResponse } from '@vercel/node';

const hello = (_req: NowRequest, res: NowResponse): void => {
  res.json({
    ok: true,
    message: '🚀',
  });
};

export default hello;
