import { mount } from 'svelte'
import './login.css'
import login from './src/lib/login.svelte'

const login = mount(login, {
    target : document.getElementById('login')
})

export default login




/*export function handleLogin(email, password) {
    if (!email || !password) {
      return 'Email dan password wajib diisi!';
    }
  
    if (email === 'fadhilah@gmail.com' && password === '123456') {
      return 'Login berhasil!';
    } else {
      return 'Email atau password salah!';
    }
}*/
  