import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import { GameConfig } from './ConfigGame'


function reset(lower: number, upper: number) {
  return lower + upper
}


describe('Test component <GameConfig />', () => {
  it('should render component of the config game',   ()=> {
    render(<GameConfig reset={reset}/>)

    const titleComponent = screen.getByRole('heading', { name: /game config/i })
    const inputLower = screen.getByRole('spinbutton', {name: /lower/i})
    const inputUpper = screen.getByRole('spinbutton', {name: /upper/i})
    const buttonReset = screen.getByRole('heading', { name: /game config/i })

    // screen.logTestingPlaygroundURL()

    expect(titleComponent).toBeTruthy()
    expect(inputLower).toBeTruthy()
    expect(inputUpper).toBeTruthy()
    expect(buttonReset).toBeTruthy()
  })

  it('should call the function handleReset()', async () => {
    const mock = jest.fn();
    const result = mock();

    render(<GameConfig reset={reset}/>)

    const buttonReset = screen.getByRole('button', {name: /Reset/i})
    userEvent.click(buttonReset)

    await waitFor(() => {
      expect(result).toBeUndefined();
    })

  })
})