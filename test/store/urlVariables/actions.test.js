import * as actions from 'store/urlVariables/actions';
import * as types from 'store/urlVariables/types';

describe('actions', () => {
  const urlVariables = [
    {
      name: 'foo',
      value: 'bar',
    }, {
      name: 'foo2',
      value: 'bar2',
    },
  ];

  it('should create an action to start fetching urlVariables', () => {
    const expectedAction = {
      type: types.FETCH_URL_VARIABLES,
    };

    expect(actions.startFetch()).toEqual(expectedAction);
  });

  it('should create an action to receive urlVariables', () => {
    const expectedAction = {
      type: types.RECEIVE_URL_VARIABLES,
      urlVariables,
    };

    expect(actions.receiveUrlVariables(urlVariables)).toEqual(expectedAction);
  });

  it('should create an action to fetch urlVariables', () => {
    const expectedAction = {
      type: types.FETCH_REQUESTED,
    };

    expect(actions.fetchUrlVariables()).toEqual(expectedAction);
  });

  it('should create an action to create a new urlVariable', () => {
    const expectedAction = {
      type: types.ADD_REQUESTED,
    };

    expect(actions.addTemplate()).toEqual(expectedAction);
  });

  it('should create an action to update a urlVariable', () => {
    const expectedAction = {
      type: types.UPDATE_REQUESTED,
      index: 1,
      value: urlVariables[0],
    };

    expect(actions.updateTemplate(1, urlVariables[0])).toEqual(expectedAction);
  });

  it('should create an action to delete a urlVariable', () => {
    const expectedAction = {
      type: types.DELETE_REQUESTED,
      index: 1,
    };

    expect(actions.deleteTemplate(1)).toEqual(expectedAction);
  });
});

