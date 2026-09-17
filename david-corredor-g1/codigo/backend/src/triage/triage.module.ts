import { Module } from '@nestjs/common';
import { TriageService } from './triage.service';
import { GlmModule } from '../glm/glm.module';
import { TicketsModule } from '../tickets/tickets.module';
import { AuditModule } from '../audit/audit.module';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule, GlmModule, TicketsModule, AuditModule],
  providers: [TriageService],
  exports: [TriageService],
})
export class TriageModule {}
