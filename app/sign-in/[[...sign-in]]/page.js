export default function SignInPage() {
  return (
    <main className="auth-container">
      <h1>Sign in to Play2Win</h1>
      <p>Authenticate with Google to review your teams advanced match analytics.</p>
      <div className="button-group">
        <a className="auth-button" href="/auth/google">Sign in with Google</a>
        <a className="auth-button secondary" href="/sign-up">Need an account?</a>
      </div>
    </main>
  );
}
