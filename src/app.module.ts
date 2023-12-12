import { Module } from '@nestjs/common'
import { ExpertsModule } from './experts/experts.module'
import { PrismaModule } from './database/prisma.module'
import { QueuesModule } from './queues/queues.module'

@Module({
	imports: [ExpertsModule, PrismaModule, QueuesModule],
	controllers: [],
	providers: []
})
export class AppModule {}
