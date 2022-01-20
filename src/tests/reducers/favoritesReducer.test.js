import { favoritesReducer } from '../../reducers/favoritesReducer';
import '../../setupTests';
import '@testing-library/jest-dom/extend-expect';
import { types } from '../../types/types';


describe('testing favoritesReducer', () => {
    test('should return empty', () => {
        const { state } = favoritesReducer({ state: [] }, {});
        
        expect( state ).toEqual( [] );
    });

    test('should return the state', () => {
        const state = favoritesReducer([{
            id: 1234,
            channelId: 1234,
            channelTitle: 'tituloChannel',
            description: 'description',
            thumbnails: {},
            width : 560,
            height: 200,
            title: 'titulo',
            url: 'http',
            favorite: false
        }], { });
        
        expect( state ).toEqual([{id: 1234,
            channelId: 1234,
            channelTitle: 'tituloChannel',
            description: 'description',
            thumbnails: {},
            width : 560,
            height: 200,
            title: 'titulo',
            url: 'http',
            favorite: false
        }])
    });

    test('hould return favorites true of id object 1234', () => {
    
        const state = favoritesReducer([{
            id: 1234,
            channelId: 1234,
            channelTitle: 'tituloChannel',
            description: 'description',
            thumbnails: {},
            width : 560,
            height: 200,
            title: 'titulo',
            url: 'http',
            favorite: false
        }], { type: types.isSelected, payload: 1234});

        expect( state ).toEqual([{
            id: 1234,
            channelId: 1234,
            channelTitle: 'tituloChannel',
            description: 'description',
            thumbnails: {},
            width : 560,
            height: 200,
            title: 'titulo',
            url: 'http',
            favorite: false
        }])
    });

    test('should return favorites false of id object 1234', () => {
    
        const state = favoritesReducer([{
            id: 1234,
            channelId: 1234,
            channelTitle: 'tituloChannel',
            description: 'description',
            thumbnails: {},
            width : 560,
            height: 200,
            title: 'titulo',
            url: 'http',
            favorite: true
        }], { type: types.isNotSelected, payload: 1234});

        expect( state ).toEqual([{
            id: 1234,
            channelId: 1234,
            channelTitle: 'tituloChannel',
            description: 'description',
            thumbnails: {},
            width : 560,
            height: 200,
            title: 'titulo',
            url: 'http',
            favorite: true
        }])
    });
    
    
});
