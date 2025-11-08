import type { Prisma, User } from '@prisma/client'

export interface IUsersRepository {
	create(data: Prisma.UserCreateInput): Promise<User>
	findByemail(email: string): Promise<User | null>
}
