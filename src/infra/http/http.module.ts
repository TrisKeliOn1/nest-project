import { Module } from '@nestjs/common'
import { CreateAccountController } from './controller/create-account.controller'
import { AuthenticateController } from './controller/authenticate.controller'
import { CreateQuestionController } from './controller/create-question.controller'
import { DatabaseModule } from '../database/database.module'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-case/create-question'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-case/fetch-recent-questions'
import { CryptographyModule } from '../criptography/cryptography.module'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-case/register-student'
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-case/authenticate-student'
import { FetchRecentQuestionsController } from './controller/fetch-recent-questions.controller'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentUseCase,
    AuthenticateStudentUseCase,
  ],
})
export class HttpModule {}
