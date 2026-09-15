import Link from "next/link"
import { SignFormComponent } from "../components/Sign/signFormComponent";

export default function () {
    return (
        <div className="flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Inloggen
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Geen account?{" "}
                    <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                        Registreren
                    </Link>
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
                        <SignFormComponent />
                    </form>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className=" flex w-full justify-center rounded-md border border-transparent bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                            Inloggen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}