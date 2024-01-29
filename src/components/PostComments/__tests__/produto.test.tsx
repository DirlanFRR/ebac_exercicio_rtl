import { render, screen, fireEvent, Matcher } from "@testing-library/react";
import App from "../../../App";

describe('testes para o componente principal', () => {
  const comments = [
    'Que linda miniatura!',
    'Eu tenho uma igual!'
  ]
  
  test('deve renderizar o componente principal', () => {
    render(<App />)
    expect(screen.getByText('Olha só que legal minha miniatura do Batmóvel.')).toBeInTheDocument()
  })


  test.each(comments)("deve adicionar dois comentarios", (comment: Matcher) => {
    render(<App />)
    fireEvent.change(screen.getByTestId('comment-field'), { target: { value: comment } })
    fireEvent.click(screen.getByTestId('comment-btn'))
    expect(screen.getByText(comment)).toBeInTheDocument()
  })
})