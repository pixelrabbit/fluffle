import { Metadata } from 'next';
import Deck from '@/components/deck/deck';

export const metadata: Metadata = {
  title: 'About | Fluffle DS',
}

export default function About() {
  return (
      <h2>About the Developer</h2>
  )
}
