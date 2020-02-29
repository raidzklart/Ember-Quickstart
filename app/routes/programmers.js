import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    let url = 'https://reqres.in/api/users';

    let response = fetch(url).then(res => {
      return res.json()
    }).then(data => {
      console.log(data.data);

      return data.data
    });
    return response
  }
}
