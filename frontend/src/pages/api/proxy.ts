import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const BACKEND_URL = "http://backend:3000"; // クラスタ内のサービス名
    const response = await axios({
      method: req.method,
      url: `${BACKEND_URL}/posts`,
      data: req.body,
    });

    res.status(response.status).json(response.data);
  } catch (error: unknown) {
    res.status(500).json({ error: error });
  }
}