import { when } from 'jest-when'
import BackendService from '../BackendService.js'

jest.mock('axios')

describe('BackendService.js', () => {

  it('returns undefined', () => {
    const api = new BackendService()

    expect(api.getInstance()).toBeUndefined()
  })

  //TODO
  it.skip('gets super power', () => {
    when(axios).calledWith('http://superpower.com').mockReturnValue('test')

    const api = new BackendService()
    api.getSuperPower()

    expect(axios).toBeCalled()
  })
})
