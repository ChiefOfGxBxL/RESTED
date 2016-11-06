/* eslint-disable import/no-unresolved */
import * as actions from 'store/collections/actions';
import * as types from 'store/collections/types';

describe('actions', () => {
  let request;

  beforeEach(() => {
    request = {
      method: 'GET',
      headers: [{ name: 'test', value: 'blah' }],
      cache: false,
      url: 'http://www.aperturescience.com',
    };
  });

  it('should create an action to fetch collections', () => {
    const expectedAction = {
      type: types.FETCH_COLLECTIONS,
    };

    expect(actions.startFetch()).toEqual(expectedAction);
  });

  it('should create an action to receive collections', () => {
    const collections = [{
      requests: [request],
    }];
    const expectedAction = {
      type: types.RECEIVE_COLLECTIONS,
      collections,
    };

    expect(actions.receiveCollections(collections)).toEqual(expectedAction);
  });

  it('should create an action to add a collection', () => {
    const expectedAction = {
      type: types.ADD_COLLECTION,
    };

    expect(actions.doAddCollection()).toEqual(expectedAction);
  });

  it('should create an action to add a request', () => {
    const expectedAction = {
      type: types.ADD_REQUEST,
      collectionIndex: 2,
      request,
    };

    expect(actions.addRequest(request, 2)).toEqual(expectedAction);
  });

  it('should create an action to reorder a request', () => {
    const source = {
      collectionIndex: 1,
      requestIndex: 1,
    };
    const target = {
      collectionIndex: 0,
      requestIndex: 0,
    };
    const expectedAction = {
      type: types.REORDER_REQUEST,
      source,
      target,
    };

    expect(actions.reorderRequest(source, target)).toEqual(expectedAction);
  });

  it('should create an action to reorder a colleciton', () => {
    const oldIndex = 0;
    const newIndex = 1;
    const expectedAction = {
      type: types.REORDER_COLLECTION,
      oldIndex,
      newIndex,
    };

    expect(actions.reorderCollection(oldIndex, newIndex)).toEqual(expectedAction);
  });
});

