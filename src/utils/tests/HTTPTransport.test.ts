import { expect } from 'chai';
import sinon from 'sinon';
import HTTPTransport from '../HTTPTransport';

let open: any;
let send: any;
let setRequestHeader: any;

describe('HTTPTransport test', () => {
  beforeEach(() => {
    open = sinon.fake();
    setRequestHeader = sinon.fake();
    send = sinon.fake();
  });

  function FakeFormData() {}

  // @ts-ignore
  global.FormData = FakeFormData;
  // @ts-ignore
  global.XMLHttpRequest = function () {
    return {
      x: 123,
      open,
      send,
      setRequestHeader,
    } as any;
  };

  it('GET method', () => {
    const http = new HTTPTransport('/user');

    http.get('/getUser');

    expect(open.callCount).to.eq(1);
    expect(send.callCount).to.eq(1);

    expect(open.firstArg).to.eq('Get');
    expect(open.lastArg).to.eq('https://ya-praktikum.tech/api/v2/user/getUser');
  });

  it('POST method with query params', () => {
    const http = new HTTPTransport('/user');

    http.post('/createUser', { username: 'qwa', password: '12345' });

    expect(open.callCount).to.eq(1);
    expect(send.callCount).to.eq(1);
    expect(open.firstArg).to.eq('Post');
    expect(open.lastArg).to.eq('https://ya-praktikum.tech/api/v2/user/createUser');
    expect(send.firstArg).to.eq('{"username":"qwa","password":"12345"}');
  });

  it('delete', () => {
    const http = new HTTPTransport('/user');

    http.delete('/test');

    expect(open.callCount).to.eq(1);
    expect(send.callCount).to.eq(1);

    expect(open.firstArg).to.eq('Delete');
    expect(open.lastArg).to.eq('https://ya-praktikum.tech/api/v2/user/test');
  });

  it('send form data', () => {
    const http = new HTTPTransport('/user');

    http.post('/test', {username:"qwa", password: "12345"});

    expect(open.callCount).to.eq(1);
    expect(send.callCount).to.deep.eq(1);

    expect(open.firstArg).to.eq('Post');
    expect(open.lastArg).to.eq('https://ya-praktikum.tech/api/v2/user/test');
    expect(send.firstArg).to.deep.eq('{"username":"qwa","password":"12345"}');
  });
})
