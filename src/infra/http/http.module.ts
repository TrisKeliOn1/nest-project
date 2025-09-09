import { Module } from '@nestjs/common'
import { CreateAccountController } from './controller/create-account.controller'
import { AuthenticateController } from './controller/authenticate.controller'
import { CreateQuestionController } from './controller/create-question.controller'
import { FetchPrivateQuestionsController } from './controller/fetch-recent-questions.controller'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchPrivateQuestionsController,
  ],
  providers: [PrismaService],
})
export class HttpModule {}
