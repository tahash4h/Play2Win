export default function SignUpPage() {
  return (
    <main className="auth-container">
      <h1>Create your Play2Win account</h1>
      <p>Use your Google account to register and unlock detailed team analytics.</p>
      <div className="button-group">
        <a className="auth-button" href="/auth/google">Sign up with Google</a>
        <a className="auth-button secondary" href="/">Back to login</a>
      </div>
    </main>
  );
}
