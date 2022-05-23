import { EmailValidatorAdapter} from './email-validator'
import validator from 'validator'
import isEmail from 'validator/lib/isEmail'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))
describe('SignUp Controller', () => {
  test('Should return false if validator returns false', async () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

    const isValid = sut.isValid('invalid_email')
    expect(isValid).toBe(false)
    
  })
  test('Should return true if validator returns true', async () => {
    const sut = new EmailValidatorAdapter()
    
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(true)
    
  })

  test('Should call validator if correct email', async () => {
    const sut = new EmailValidatorAdapter()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    const isValid = sut.isValid('any_email@mail.com')
    expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com')
    
  })

})
