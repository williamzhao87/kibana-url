import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getKibanaUrl(query): string {
    const { start, end, env, region } = query;
    const startTime = new Date(parseInt(start)).toISOString();
    const endTime = new Date(parseInt(end)).toISOString();
    let base = 'https://es-spot.kibana.usw1.genhtcc.com';
    if (env === 'prod') {
      base = `https://kibana-${region}.genesyscloud.com/app/kibana#/dev_tools/console?_g=()`
    }

    return `${base}?start=${startTime}&end=${endTime}`;
  }
}
