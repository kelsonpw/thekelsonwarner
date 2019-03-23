import * as React from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';

import './languages.scss';

const frontEnd = [
  'React',
  'React Native',
  'Redux',
  'Redux Saga',
  'Mobx',
  'VueJS',
  'Styled Components',
  'jQuery',
];

const backEnd = [
  'NodeJS',
  'Express',
  'Koa',
  'Rails',
  'Laravel',
  'Firebase',
  'MySQL/PostgreSQL',
  'MongoDB',
];

const misc = [
  'Git source control',
  'Jira/Confluence',
  'FluidUI',
  'Sketch',
  'Salesforce',
  'MLab',
  'Amazon Web Services',
  'Heroku',
];

function Languages() {
  const [techBio, setTechBio] = React.useState(frontEnd);
  return (
    <div className="Languages">
      <h4 className="Languages__header">Some of the technology I use</h4>
      <ListGroup className="Languages__list">
        {techBio.map(item => (
          <ListGroupItem>{item}</ListGroupItem>
        ))}
      </ListGroup>
      <ButtonGroup className="Languages__buttons">
        <Button
          className="Languages__button"
          disabled={techBio === frontEnd}
          onClick={() => setTechBio(frontEnd)}>
          Front End
        </Button>
        <Button
          className="Languages__button"
          disabled={techBio === backEnd}
          onClick={() => setTechBio(backEnd)}>
          Back End
        </Button>
        <Button
          className="Languages__button"
          disabled={techBio === misc}
          onClick={() => setTechBio(misc)}>
          Miscellaneous
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Languages;
