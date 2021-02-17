import * as sinon from 'sinon';
import { AuthenticatedRequester, BASE_API_URL } from './AuthenticatedRequester';
import set = Reflect.set;

describe('AuthenticatedRequester', () => {
  const sandbox = sinon.createSandbox();
  afterEach(() => {
    sandbox.restore();
  });

  it('throws an error if no API key is provided', () => {
    // @ts-ignore
    expect(() => new AuthenticatedRequester()).toThrow();
  });

  describe('Get', () => {
    it('construct the url endpoint using BASE_API_URL and encoded query', async () => {
      const client = new AuthenticatedRequester('test');
      const stub = sandbox.stub(client, "request");

      await client.get('/test', { someParam: 'test 1' });
      const requestCall = stub.getCall(0);
      expect(requestCall.args[0]).toEqual(`${BASE_API_URL}/test?someParam=test%201`);
    });
    it('use the serialization method if provided', async () => {
      const client = new AuthenticatedRequester('test');
      const stub = sandbox.stub(client, "request")
        .returns(Promise.resolve({
          foo: 'bar',
          bar: 'foo',
        }))

      const serialized = await client.get('/test', {}, (a) => ({
        foo: a.bar,
        bar: a.foo,
      }));

      expect(serialized.foo).toEqual('foo');
      expect(serialized.bar).toEqual('bar');
    });
  });
})