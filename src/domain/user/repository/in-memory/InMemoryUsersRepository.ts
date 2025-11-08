import { randomUUID } from 'node:crypto'
import type { Prisma, User } from '@prisma/client'
import type { IUsersRepository } from '../IUsersRepository'

export class InMemoryUsersRepository implements IUsersRepository {
	public users: User[] = []

	async create(data: Prisma.UserCreateInput): Promise<User> {
		const user: User = {
			id: randomUUID(),
			name: data.name,
			email: data.email,
			username: data.username,
			password_hash: data.password_hash,
		}

		this.users.push(user)

		return user
	}
	async findByemail(email: string): Promise<User | null> {
		const user = this.users.find((user) => user.email === email)

		if (!user) {
			return null
		}

		return user
	}
}
