import React from 'react';

import { List, ListItem, ListExpanded, Icon, Avatar } from '../../';
import Header from '../../storybook/components/Header';
import Container from '../../storybook/components/Container';
import { storiesOf } from '../../storybook/helpers/storiesOf';

export default storiesOf('Components|List', module)
  .addParameters({ jest: ['List'] })
  .add('Text', () => (
    <Container>
      <Header title={'Text List'} />

      <List style={{ width: 300 }}>
        <ListItem text={'Attractions'} />
        <ListItem text={'Dining'} />
        <ListItem text={'Education'} />
        <ListItem text={'Health'} />
        <ListItem text={'Family'} />
        <ListItem text={'Office'} />
        <ListItem text={'Promotions'} />
      </List>
    </Container>
  ))
  .add('with icon', () => (
    <Container>
      <Header title={'Text and Icon List'} />

      <List style={{ width: 300 }}>
        <ListItem
          text={'Attractions'}
          icon={<Icon name={'local-movies'} size={24} />}
        />
        <ListItem
          text={'Dining'}
          icon={<Icon name={'local-dining'} size={24} />}
        />
        <ListItem text={'Education'} icon={<Icon name={'edit'} size={24} />} />
        <ListItem text={'Health'} icon={<Icon name={'favorite'} size={24} />} />
        <ListItem text={'Family'} icon={<Icon name={'group'} size={24} />} />
        <ListItem
          text={'Office'}
          icon={<Icon name={'content-cut'} size={24} />}
        />
        <ListItem
          text={'Promotions'}
          icon={<Icon name={'loyalty'} size={24} />}
        />
      </List>
    </Container>
  ))
  .add('with media', () => (
    <Container>
      <Header title={'Text and Media List'} />

      <List style={{ width: 300 }}>
        <ListItem
          text={'Janet Perkins'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
        <ListItem
          text={'Mary Perkins'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
        <ListItem
          text={'Peter Carlsson'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
        <ListItem
          text={'Trevor Hansen'}
          media={
            <Avatar
              type="icon"
              content="person"
              contentColor={'#ececec'}
              color={'#a3a3a3'}
              size={40}
            />
          }
        />
      </List>
    </Container>
  ));
