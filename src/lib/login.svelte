<script>
    let email = '';
    let password = '';
    let message = '';
  
    function handleLogin() {
      if (!email || !password) {
        message = 'Email dan password wajib diisi!';
        return;
      }
  
      if (email === 'fadhilah@gmail.com' && password === '123456') {
        message = 'Login berhasil!';
        // Redirect to dashboard
      } else {
        message = 'Email atau password salah!';
      }
    }
  </script>
  
  <div class="container">
    <div class="box">
      <h2>Login</h2>
  
      {#if message}
        <div>{message}</div>
      {/if}
  
      <input class="input" type="email" bind:value={email} placeholder="Email" />
      <input class="input" type="password" bind:value={password} placeholder="Password" />
  
      <button class="button" on:click={handleLogin}>Login</button>
    </div>
  </div>
  