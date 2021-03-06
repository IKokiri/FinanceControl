import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DashboardService } from './dashboard.service';
import { Roles } from '../../decorators/roles.decorator';
import { RolesEnum } from '../auth/enum/roles.enum';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { RolesGuard } from '../../guards/roles.guard';

@ApiTags('Dashboards')
@Controller('dashboards')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get(':walletId')
  @ApiBearerAuth()
  @Roles(RolesEnum.Default, RolesEnum.Admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'get Graphics' })
  findAll(@Param('walletId') walletId: string): Promise<any> {
    return this.dashboardService.getGraphics(walletId);
  }
}
