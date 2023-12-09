import { Module } from '@nestjs/common'
import { ExpertsModule } from './experts/experts.module'
import { PrismaModule } from './database/prisma.module'

@Module({
	imports: [ExpertsModule, PrismaModule],
	controllers: [],
	providers: []
})
export class AppModule {}
