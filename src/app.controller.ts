import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('kibana')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getKibanaUrl(@Query() query): string {
    return this.appService.getKibanaUrl(query);
  }
}
