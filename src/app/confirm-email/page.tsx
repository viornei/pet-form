export default function Page() {
  return (
    <div className="flex flex-col h-[80vh] items-center justify-center py-20 px-8">
      <h1 className="text-4xl mb-4">Please confirm your email</h1>
      <p className="text-center text-lg max-w-100">
        We’ve sent a confirmation link to your email. Please check your inbox
        and click the link to activate your account.
      </p>
    </div>
  );
}
