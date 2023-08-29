import RegisterButton from "@/components/register-buttons/registerButton";
import { OPTIONS } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Register() {
  const session = await getServerSession(OPTIONS);

  if (session) redirect("/");

  return (
    <div className="bg-white sm:m-12 m-4 sm:p-7 p-3 shadow-xl rounded-lg flex justify-center flex-1">
    <div className="lg:w-1/2 w-full p-6 sm:p-12">
      <div className="lg:mt-12 flex flex-col items-center">
        <Image src="/img/pj_logo_web_new.png" alt="PapaJohns logo" width={150} height={70} className="mt-4 lg:hidden mb-4" />
        <h1 className="text-2xl xl:text-3xl font-extrabold">
          Daxil ol
        </h1>
        <div className="w-full flex-1 mt-8">
          <div className="flex flex-col items-center">
            <RegisterButton />
          </div>
        </div>
      </div>
    </div>

    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex rounded-md">
      <div
        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/pj_logo_web_new.png')" }}
      ></div>
    </div>
  </div>
  );
}