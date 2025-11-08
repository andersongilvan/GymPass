import { hash } from 'bcryptjs'
import { EmailAlreadyExistsExceptions } from '@/exceptions/EmailAlreadyExistsException'
import type { IUsersRepository } from '../../repository/IUsersRepository'

interface RegisterUsersServiceRequest {
	name: string
	email: string
	username: string
	password: string
}

export class RegisterUsersService {
	constructor(private useresRepository: IUsersRepository) {}

	async execute({
		name,
		email,
		username,
		password,
	}: RegisterUsersServiceRequest) {
		const userWithEmailDuplicated =
			await this.useresRepository.findByemail(email)

		if (userWithEmailDuplicated) {
			throw new EmailAlreadyExistsExceptions()
		}

		const password_hash = await hash(password, 6)

		const user = await this.useresRepository.create({
			name,
			email,
			username,
			password_hash,
		})

		return user
	}
}
