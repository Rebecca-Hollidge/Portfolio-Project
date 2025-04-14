// source https://alphonso-javier.medium.com/svelte-simple-login-with-local-storage-and-stores-723759da36b3

import { writable } from 'svelte/store'
import { browser } from '$app/environment'

//const persistedUser = browser && localStorage.getItem('user')
//export let user = writable({username: "", password: ""})
export const username = writable(browser && localStorage.getItem('username') ? localStorage.getItem('username') : "")
export const password = writable(browser && localStorage.getItem('password') ? localStorage.getItem('password') : "")
/*if (browser) {
    user.subscribe(u => localStorage.user = u)
}*/