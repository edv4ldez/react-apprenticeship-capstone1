import React from 'react';
import { render, fireEvent, debug, getByText, getByRole, screen } from '@testing-library/react';
import VideoItem from '../../../components/ListVideos/VideoItem.component';
import AuthContext from '../../../auth/AuthContext.auth';
import { MemoryRouter } from 'react-router';

describe('', () => {
    const context = {
        authenticated: false,
        category: "Wizeline",
        favorites: [],
        isChecked: false,
        login: () => {},
        logout: () => {},
        setCategory: function(){},
        setFavorites: function(){},
        setIsChecked: function(){},
        videos: [{
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
        }]
    }
    
    test('should match title with the title in the document', () => {
        render( 
            <AuthContext.Provider value={context}>
                    <VideoItem video={{
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
        }}
        /> 
            </AuthContext.Provider>,
            {wrapper: MemoryRouter}
        );

        expect(screen.getByText(/titulo/i)).toBeInTheDocument()
    });


    test('should match src with http source', () => {
        const {debug} = render( 
            <AuthContext.Provider value={context}>
                    <VideoItem video={{
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
        }}
        /> 
            </AuthContext.Provider>,
            {wrapper: MemoryRouter}
        );
        
        const img = screen.getByRole('img');

        expect(img).toHaveAttribute('src', 'http')
    });

    
});
