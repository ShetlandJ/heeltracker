import { Card } from 'react-bootstrap';

function About() {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            What is this?
          </Card.Title>
          <Card.Text>
            Kayfabe tracker is an attempt to track wresters' characters' moral alignment throughout their career, as until now no such database existed.
          </Card.Text>

          <Card.Text>
            In professional wrestling, the most common storyline trope is that of good guy versus bad guy. In the industry, this dynamic is characterised by the terms Babyface (or Face, a good character) and Heel (a bad character).
          </Card.Text>

          <Card.Text>
            Throughout a professional wrestlers' career, their character goes through various adjustments, including switching from Face to Heel (a 'Heel turn') or the reverse (a 'Face turn'). It's very rare for a wrestler to only ever have been aligned to one side in their career.
          </Card.Text>

          <Card.Text>
            Although the in-ring action in wrestling is real and risky, the match outcomes are pre-determined in order to tell an entertaining story. Traditionally, a Face character will follow the rules of the match and aim to win without cheating. A Heel character will try to win at any cost - including employing 'illegal' tactics such as using weapons or distracting/knocking out the referee.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default About;