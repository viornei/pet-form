export default function Page() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center px-8 py-20">
      <h1 className="mb-4 text-4xl">Please confirm your email</h1>
      <p className="max-w-100 text-center text-lg">
        We’ve sent a confirmation link to your email. Please check your inbox
        and click the link to activate your account.
      </p>
    </div>
  );
}
