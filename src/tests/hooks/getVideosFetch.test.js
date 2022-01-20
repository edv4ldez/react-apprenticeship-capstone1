import React from 'react';
import useVideosFetch from '../../hooks/useVideosFetch';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing hooks', () => {
    test('should return a list of videos', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useVideosFetch('Zoe') );
        await waitForNextUpdate();

        expect(result.current.videos.length).not.toBe(0);
    })

    test('should return a list of videos', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useVideosFetch('Zoe') );
        await waitForNextUpdate();

        expect(result.current.error).toBeNull();
    })
    
});
