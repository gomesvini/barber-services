import { Module } from '@nestjs/common'
import { ExpertsModule } from './experts/experts.module'
import { PrismaModule } from './database/prisma.module'
import { QueuesModule } from './queues/queues.module'
import { QueuecustomersModule } from './queuecustomers/queuecustomers.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'

@Module({
	imports: [
		ExpertsModule,
		PrismaModule,
		QueuesModule,
		QueuecustomersModule,
		UsersModule,
		AuthModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
