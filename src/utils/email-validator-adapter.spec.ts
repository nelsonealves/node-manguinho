import { EmailValidatorAdapter} from './email-validator'

describe('SignUp Controller', () => {
  test('Should return false if validator returns false', async () => {
    const sut = new EmailValidatorAdapter()
    
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
    
  })
})
