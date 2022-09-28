import { render, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import { Play } from "./Play"


describe('Test component <Play />', () => {
  it('should render component of the config game',   ()=> {
    render(<Play />)

    const titleComponent = screen.getByRole('heading', { name: /Play/i })
    const panel = screen.getByText(/Guess the number between/i)
    const last = screen.getByText(/Last guess:/i)
    const inputGuess = screen.getByRole('spinbutton', {name: /guess/i})
    const buttonGuess= screen.getByRole('button', { name: /Make guess/i })

    expect(titleComponent).toBeTruthy()
    expect(panel).toBeTruthy()
    expect(last).toBeTruthy()
    expect(inputGuess).toBeTruthy()
    expect(buttonGuess).toBeTruthy()
  })

  it('should call the function handleGuess()', async () => {
    const mock = jest.fn();
    const result = mock();

    render(<Play />)

    const buttonGuess= screen.getByRole('button', { name: /Make guess/i })
    userEvent.click(buttonGuess)

    await waitFor(() => {
      expect(result).toBeUndefined();
    })

  })
})
