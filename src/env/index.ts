import 'dotenv/config'
import z from 'zod'

const envSchema = z.object({
	PORT: z.coerce.number().default(3000),
	NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
	console.error('Variáreis de ambiencia inválidas')

	throw new Error('Variáreis de ambiencia inválidas')
}

export const env = _env.data
