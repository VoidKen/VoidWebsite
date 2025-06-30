import React from 'react';

function EmailMe() {
  return (
    <section id="email-me">
      <h2>Email Me</h2>
      <p>
        Feel free to reach out!<br />
        <a
          href="mailto:void.ken@aol.com"
          style={{
            color: '#61dafb',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1.1rem',
          }}
        >
          void.ken@aol.com
        </a>
      </p>
    </section>
  );
}

export default EmailMe;