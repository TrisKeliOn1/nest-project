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
import { GetQuestionBySlugController } from './controller/get-question-by-slug.controller'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-case/get-question-by-slug'
import { EditQuestionController } from './controller/edit-question.controller'
import { EditQuestionUseCase } from '@/domain/forum/application/use-case/edit-question'
import { DeleteQuestionController } from './controller/delete-question.controller'
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-case/delete-question'
import { AnswerQuestionController } from './controller/answer-question.controller'
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-case/answer-question'
import { EditAnswerController } from './controller/edit-answer.controller'
import { EditAnswerUseCase } from '@/domain/forum/application/use-case/edit-answer'
import { DeleteAnswerController } from './controller/delete-answer.controller'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-case/delete-answer'
import { FetchQuestionAnswersController } from './controller/fetch-question-answers.controller'
import { FetchQuestionAnswersUseCase } from '@/domain/forum/application/use-case/fetch-question-answers'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController,
    EditQuestionController,
    DeleteQuestionController,
    AnswerQuestionController,
    EditAnswerController,
    DeleteAnswerController,
    FetchQuestionAnswersController,
  ],
  providers: [
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentUseCase,
    AuthenticateStudentUseCase,
    GetQuestionBySlugUseCase,
    EditQuestionUseCase,
    DeleteQuestionUseCase,
    AnswerQuestionUseCase,
    EditAnswerUseCase,
    DeleteAnswerUseCase,
    FetchQuestionAnswersUseCase,
  ],
})
export class HttpModule {}
