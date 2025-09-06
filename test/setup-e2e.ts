import { PrismaClient } from '@prisma/client'
import { execSync } from 'child_process'
import { randomUUID } from 'crypto'
import 'dotenv/config'

let prisma: PrismaClient

function generateUniqueDatabaseURL(schemaId: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL environment variable')
  }

  const url = new URL(process.env.DATABASE_URL)
  url.searchParams.set('schema', schemaId)

  return url.toString()
}

const schemaId = randomUUID()

beforeAll(async () => {
  const databaseURL = generateUniqueDatabaseURL(schemaId)

  process.env.DATABASE_URL = databaseURL

  const tempPrisma = new PrismaClient({
    datasources: { db: { url: databaseURL } },
  })

  try {
    await tempPrisma.$executeRawUnsafe(
      `DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`,
    )
    await tempPrisma.$executeRawUnsafe(`CREATE SCHEMA "${schemaId}"`)
  } catch (error) {
    console.log('Schema cleanup error (ignorado):', error)
  } finally {
    await tempPrisma.$disconnect()
  }

  execSync('npx prisma db push', {
    stdio: 'inherit',
    env: { ...process.env, DATABASE_URL: databaseURL },
  })

  prisma = new PrismaClient({
    datasources: {
      db: {
        url: databaseURL,
      },
    },
  })
})

afterAll(async () => {
  if (prisma) {
    await prisma.$executeRawUnsafe(
      `DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`,
    )
    await prisma.$disconnect()
  }
})
