import { it, expect, describe } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { AuthForm } from '#components'

describe('Auth form', () => {
    it('mounts correctly', async () => {
        const wrapper = await mountSuspended(AuthForm, { props: { title: 'Sign up' } })

        expect(wrapper.text()).toContain("Sign up")
        expect(wrapper.text()).toContain("Username")
        expect(wrapper.text()).toContain("Password")
    })

    it('when submit emits valid payload once', async () => {
        const wrapper = await mountSuspended(AuthForm, { props: { title: 'Sign up' } })

        await wrapper.get('[data-test="username"]').setValue('myuser')
        await wrapper.get('[data-test="password"]').setValue('mypassword')
        await wrapper.get('[data-test="form"]').trigger('submit')

        expect(wrapper.emitted()).toHaveProperty('submit')
        const submitEvent = wrapper.emitted('submit')
        expect(submitEvent).toHaveLength(1)
        expect(submitEvent?.[0]).toEqual([{
            username: 'myuser',
            password: 'mypassword'
        }])
    })
})