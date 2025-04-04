import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getDataPoolBC() {
    const rawPool: any[] = [];

    const dataPool = rawPool.map((pool) => {
      return {
        ...pool,
        id_pool: Number(pool?.id_pool),
      };
    });

    return dataPool;
  }
}
