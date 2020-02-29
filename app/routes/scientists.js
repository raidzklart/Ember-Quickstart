import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return [{
      'first_name': 'Marie',
      'last_name': 'Curie'
    }, {
      'first_name': 'Mae',
      'last_name': 'Jemison'
    }, {
      'first_name': 'Albert',
      'last_name': 'Hofmann'
    }];
  }
}
