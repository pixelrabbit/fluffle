// import Image from 'next/image'
import Deck from '@/components/deck/deck';

export default function Home() {
  const cardsData = [{
    heading: "React",
    children: "<p>Aliquip sint officia nulla ad do consequat. Id est aliqua velit eu voluptate mollit. Nostrud nostrud eu reprehenderit in ut in aliquip in voluptate dolor in minim Lorem mollit..</p>"
  }, {
    heading: "NextJS",
    children: "<p>Aliquip sint officia nulla ad do consequat. Id est aliqua velit eu voluptate mollit. Nostrud nostrud eu reprehenderit in ut in aliquip in voluptate dolor in minim Lorem mollit..</p>"
  }, {
    heading: "Vercel",
    children: "<p>Aliquip sint officia nulla ad do consequat. Id est aliqua velit eu voluptate mollit. Nostrud nostrud eu reprehenderit in ut in aliquip in voluptate dolor in minim Lorem mollit..</p>"
  }, {
    heading: "Storybook",
    children: "<p>Aliquip sint officia nulla ad do consequat. Id est aliqua velit eu voluptate mollit. Nostrud nostrud eu reprehenderit in ut in aliquip in voluptate dolor in minim Lorem mollit..</p>"
  }, {
    heading: "Chromatic",
    children: "<p>Aliquip sint officia nulla ad do consequat. Id est aliqua velit eu voluptate mollit. Nostrud nostrud eu reprehenderit in ut in aliquip in voluptate dolor in minim Lorem mollit..</p>"
  }]
  return (
    <>
      <h2>A design system built by rabbits, for rabbits.</h2>
      <Deck cards={cardsData}></Deck>
    </>
  )
}
