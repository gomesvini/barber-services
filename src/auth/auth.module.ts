import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UsersService } from 'src/users/users.service'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './strategies/local.strategy'

@Module({
	imports: [PassportModule],
	providers: [AuthService, UsersService, LocalStrategy]
})
export class AuthModule {}
