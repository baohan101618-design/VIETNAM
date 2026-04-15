(function () {
  function togglePassword(button) {
    const targetId = button.getAttribute('data-target');
    const input = document.getElementById(targetId);
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
    button.textContent = input.type === 'password' ? 'Hiện' : 'Ẩn';
  }

  document.querySelectorAll('.toggle-pass').forEach((btn) => {
    btn.addEventListener('click', () => togglePassword(btn));
  });

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      const password = document.getElementById('register-password')?.value || '';
      const confirm = document.getElementById('confirm-password')?.value || '';
      const msg = document.getElementById('register-message');

      if (password.length < 8) {
        event.preventDefault();
        if (msg) {
          msg.className = 'msg-box error';
          msg.textContent = 'Mật khẩu phải có tối thiểu 8 ký tự.';
        }
        return;
      }

      if (password !== confirm) {
        event.preventDefault();
        if (msg) {
          msg.className = 'msg-box error';
          msg.textContent = 'Mật khẩu xác nhận chưa khớp.';
        }
      }
    });
  }

  const forgotForm = document.getElementById('forgot-form');
  if (forgotForm) {
    forgotForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const msg = document.getElementById('forgot-message');
      if (msg) {
        msg.className = 'msg-box success';
        msg.textContent = 'Đã gửi email khôi phục. Vui lòng kiểm tra hộp thư của bạn.';
      }
    });
  }
})();
