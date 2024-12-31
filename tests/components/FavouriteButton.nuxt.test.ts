import { it, expect, describe, vi, afterEach } from 'vitest'
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import { FavouriteButton } from '#components'

describe('Favourite button', () => {
    afterEach(() => {
        useUserSessionMock.mockRestore()
        useFetchMock.mockRestore()
    })

    it('not rendrer if not logged in', async () => {
        useUserSessionMock.mockImplementation(() => { return { loggedIn: false } })

        const wrapper = await mountSuspended(FavouriteButton, { props: { movieId: 1 } })

        expect(wrapper.html()).toBe('<!--v-if-->')
    })

    it('rendrer if logged in', async () => {
        const wrapper = await mountSuspended(FavouriteButton, { props: { movieId: 1 } })

        expect(wrapper.html()).toContain('class="iconify i-carbon:star"')
    })

    it('rendrer filled star if logged in and already favourited', async () => {
        useFetchMock.mockImplementation(() => ({ data: ref([{ id: 1, name: 'Movie', releaseDate: '2024' }]) }))

        const wrapper = await mountSuspended(FavouriteButton, { props: { movieId: 1 } })

        expect(wrapper.html()).toContain('class="iconify i-carbon:star-filled"')
    })
})

const { useUserSessionMock } = vi.hoisted(() => {
    return {
        useUserSessionMock: vi.fn(() => {
            return { loggedIn: true }
        })
    }
})

const { useFetchMock } = vi.hoisted(() => {
    return {
        useFetchMock: vi.fn(() => {
            return { data: ref([] as unknown) }
        })
    }
})

mockNuxtImport('useUserSession', () => {
    return useUserSessionMock
})

mockNuxtImport('useFetch', () => {
    return useFetchMock
})