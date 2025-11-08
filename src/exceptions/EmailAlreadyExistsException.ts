export class EmailAlreadyExistsExceptions extends Error {
	constructor(readonly statusCode: number = 400) {
		super('E-mail já cadastrado')
	}
}
