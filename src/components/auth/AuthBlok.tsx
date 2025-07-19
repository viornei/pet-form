import RegisterForm from "./registerForm/RegisterForm";
const AuthBlock = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-primary-pink-100 h-250 w-full gap-3">
      <h3 className="text-lg">Welcome</h3>
      <h2 className="text-3xl">Get Started</h2>
      <p className="text-base">Join our community of happy pet owners today!</p>
      <RegisterForm />
    </div>
  );
};
export default AuthBlock;
