import { signIn, signOut, signUpRequest, signInRequest } from '../actions/userAuth-actions.js';
import superagent from 'superagent';

const randomNum = max => {
  return Math.floor(Math.random()* max);
};

const mockUser = {
  username: `testname${randomNum(5000)}`,
  email: `testemail${randomNum(1000)}@email.net`,
  password: '1234512345',
};

describe('Auth actions', () => {
  let tempUser;

  test('signIn should return a SIGN_IN action', () => {
    let action = signIn({ token: '12345' });
    expect(action).toEqual({
      'payload': {'token': '12345'}, 'type': 'SIGN_IN'}
    );
  });

  test('signOut should return a SIGN_OUT action', () => {
    let action = signOut({ token: '12345' });
    expect(action).toEqual({'type': 'SIGN_OUT'});
  });

  // ASYNC
  // test('signup req should return a token', done => {
  //   superagent.post('http://localhost:3000/api/signup')
  //     .send(mockUser)
  //     .end((err, res) => {
  //       if(err) return done(err);
  //       expect(res.text).toBeTruthy();
  //       expect(typeof res.text).toEqual('string');
  //       expect(err).toEqual(null);
  //       console.log('::::::::::::res.text:::::::', res.text);
  //       tempUser = mockUser;
  //       done();
  //     });
  // });

  // test('login req should return a token', done => {
  //   superagent.get('http://localhost:3000/api/signin')
  //     .auth(tempUser.username, tempUser.password)
  //     .end((err, res) => {
  //       if(err) return done(err);
  //       expect(res.text).toBeTruthy();
  //       expect(typeof res.text).toEqual('string');
  //       expect(err).toEqual(null);
  //       console.log('::::::::::::res.text:::::::', res.text);
  //       done();
  //     });
  // });
});