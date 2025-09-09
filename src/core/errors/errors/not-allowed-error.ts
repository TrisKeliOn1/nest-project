import { UseCaseError } from '@/core/errors/usa-case-error'

export class NotAllowedError extends Error implements UseCaseError {
  constructor() {
    super('Not Allowed')
  }
}
