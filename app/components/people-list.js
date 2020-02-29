import Component from '@glimmer/component';
import {
  action
} from '@ember/object';

export default class PeopleListComponent extends Component {
  @action
  showPerson(email) {
    if (email) {
      alert(`The person's email address is ${email}!`);
    } else {
      alert(`Sorry, we don't know this persons email address`);
    }

  }
}
