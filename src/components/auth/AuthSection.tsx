import RegisterForm from "./registerForm/RegisterForm";
const AuthSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-primary-pink-100  py-25 w-full gap-3">
      <h3 className="text-sm font-bold">Welcome</h3>
      <h2 className="text-5xl">Get Started</h2>
      <p className="text-base">Join our community of happy pet owners today!</p>
      <RegisterForm />
    </div>
  );
};
export default AuthSection;
