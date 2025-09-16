import {render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'

describe('ExpandableText', () => {
  it('should render the full text when it is less than the 255 characters', ()=>{
    const text = "Short text"
    render(<ExpandableText text={text}/>)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('should truncate text if longer than 255 characters', ()=>{
    const text= 'a'.repeat(256)

    render(<ExpandableText text={text}/>)

    const truncatedText = text.substring(0,255) + '...'
    expect(screen.getByText(truncatedText)).toBeInTheDocument()
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/more/i)
  })
})