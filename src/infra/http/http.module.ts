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
import { ChooseQuestionBestAnswerController } from './controller/choose-question-best-answer.controller'
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/application/use-case/chose-question-best-answer'
import { CommentOnQuestionController } from './controller/comment-on-question.controller'
import { CommentOnQuestionUseCase } from '@/domain/forum/application/use-case/comment-on-question'
import { DeleteQuestionCommentController } from './controller/delete-question-comment.controller'
import { DeleteQuestionCommentUseCase } from '@/domain/forum/application/use-case/delete-question-comment'
import { CommentOnAnswerUseCase } from '@/domain/forum/application/use-case/comment-on-answer'
import { CommentOnAnswerController } from './controller/comment-on-answer.controller'
import { DeleteAnswerCommentController } from './controller/delete-answer-comment.controller'
import { DeleteAnswerCommentUseCase } from '@/domain/forum/application/use-case/delete-answer-comment'
import { FetchQuestionCommentsController } from './controller/fetch-question-comments.controller'
import { FetchQuestionCommentsUseCase } from '@/domain/forum/application/use-case/fetch-question-comments'
import { FetchAnswerCommentsController } from './controller/fetch-answer-comments.controller'
import { FetchAnswerCommentsUseCase } from '@/domain/forum/application/use-case/fetch-answer-comments'
import { UploadAttachmentController } from './controller/upload-attachment.controller'

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
    ChooseQuestionBestAnswerController,
    CommentOnQuestionController,
    DeleteQuestionCommentController,
    CommentOnAnswerController,
    DeleteAnswerCommentController,
    FetchQuestionCommentsController,
    FetchAnswerCommentsController,
    UploadAttachmentController,
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
    ChooseQuestionBestAnswerUseCase,
    CommentOnQuestionUseCase,
    DeleteQuestionCommentUseCase,
    CommentOnAnswerUseCase,
    DeleteAnswerCommentUseCase,
    FetchQuestionCommentsUseCase,
    FetchAnswerCommentsUseCase,
  ],
})
export class HttpModule {}
