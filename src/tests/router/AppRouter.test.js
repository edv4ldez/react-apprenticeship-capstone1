import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import AppRouter from '../../router/AppRouter.router';
import AuthContext from '../../auth/AuthContext.auth';
import { MemoryRouter } from 'react-router';
import { act } from 'react-dom/test-utils';

describe('testing AppRouter', () => {
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
        videos: []
    }
    
    test('', () => {
        const { debug } = renderWithRouter
        
        expect(screen.getByText(/Login/i)).toBeInTheDocument()
        

    });
    
});
